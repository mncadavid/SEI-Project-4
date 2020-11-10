const Food = require('../models').Food;

const index = (req, res) => {
    Food.findAll()
    .then(food => {
        res.status(200).json(food);
    })
}

const addFood = (req, res) => {
    Food.create(req.body)
    .then(newFood => {
        Food.findAll()
        .then(food => {
            res.status(200).json(food);
        })
    })
}


module.exports = {
    index,
    addFood
}