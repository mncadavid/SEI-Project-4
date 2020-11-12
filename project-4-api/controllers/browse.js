const Food = require('../models').Food;
const Child = require('../models').Child;
const Exposure=require('../models').Exposure;

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

const getLastExposure = (req,res) => {
    Exposure.findOne({
        where: {
            childId: req.params.childId,
            foodId: req.params.foodId
        },
        order: [
            ['date', 'DESC']
        ]
    })
    .then(exposure => {
        res.send(exposure);
    })
}


module.exports = {
    index,
    addFood,
    getLastExposure
}