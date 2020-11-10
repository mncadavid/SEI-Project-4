const express = require('express');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const app = express();

const verifyToken = (req,res,next) => {
    let token = req.cookies.jwt;

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
        if(err || !decodedUser){
            if(err.name == "JsonWebTokenError"){
                return res.status(400).send(`Error: ${err}`);
            }
            return res.send(err);
        }
        req.user = decodedUser;
        next();
    });
}

app.use('/users', routes.users);
app.use('/lists', routes.lists);
app.use('/auth', routes.auth);

app.get('/', (req,res) => {
    res.send('Splash page')
})

app.listen(process.env.PORT, () => {
    console.log("listening");
});