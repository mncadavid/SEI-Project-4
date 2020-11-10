const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models').Users;

const signup = (req,res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if(err){
            return res.status(500).json(err);
        }

        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if (err){
                return res.status(500).json(err);
            }
            req.body.password = hashedPwd;

            User.create(req.body)
            .then(newUser => {
                const token = jwt.sign(
                    {
                        username: newUser.username,
                        id: newUser.id
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "30 days"
                    }
                )
                res.cookie("jwt", token);
                res.redirect('/browse');
            })
            .catch(err => {
                if(err.name === 'SequelizeUniqueConstraintError'){
                    res.status(400).send(`Error: ${err.name}`)
                }
                else{
                    res.status(400).send(`Error: ${err}`);
                }
            })
        })
    })
}

const login = (req,res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser => {
        if(foundUser){
            bcrypt.compare(req.body.password, foundUser.password, (err,match) => {
                if(match){
                    const token = jwt.sign(
                        {
                            id: foundUser.id,
                            username: foundUser.username
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: "30 days"
                        }
                    )
                    res.cookie("jwt", token);
                    res.redirect(`/browse`);
                } else{
                    res.send(`Incorrect Password`)
                }
            })
        }
        else if(!foundUser){
            return res.send(`Incorrect Username`)
        }
    })
    .catch(err => {
        res.status(400).send(`Error: ${err}`);
    }
    )
}

module.exports = {
    signup,
    login
}