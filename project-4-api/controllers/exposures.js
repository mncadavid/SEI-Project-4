const Food = require('../models').Food;
const Exposure = require('../models').Exposure;
const Child = require('../models/').Child;

const index = (req, res) => {
    Child.findByPk(1, {
        include: [
            {
                model: Exposure,
                attributes: ['foodId', 'date', 'reaction'],
                include: [{
                    model: Food,
                    attributes: ['name', 'category']
                }]
            }
        ],
        attributes: ['name', 'age']
    })
    .then(foundChild => {
        res.send(foundChild);
    })
};

const getFoodData = (req, res) => {
    Child.findByPk(1, {
        include: [
            {
                model: Exposure,
                attributes: ['foodId', 'date', 'reaction'],
                include: [{
                    model: Food,
                    attributes: ['id','name', 'category'],
                    where: {
                        name: req.params.food
                    }
                }]
            }
        ],
        attributes: ['name', 'age']
    })
    .then(foundChild => {
        foundChild.dataValues.food = req.params.food;
        Food.findAll({
            where: {
                name: req.params.food
            }
        })
        .then(food => {
            console.log(food);
            foundChild.dataValues.foodId = food[0].dataValues.id;
            res.send(foundChild);
        })
    })
};


module.exports = {
    index,
    getFoodData
}