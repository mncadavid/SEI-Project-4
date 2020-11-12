const Food = require('../models').Food;
const Exposure = require('../models').Exposure;
const Child = require('../models/').Child;

const index = (req, res) => {
    Child.findByPk(3, {
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

// const getFoodData = (req, res) => {
//     console.log("======================")
//     console.log(req.params.childId)
//     Child.findByPk(req.params.childId, {
//         include: [
//             {
//                 model: Exposure,
//                 attributes: ['foodId', 'date', 'reaction'],
//                 include: [{
//                     model: Food,
//                     attributes: ['id','name', 'category'],
//                     where: {
//                         name: req.params.food
//                     }
//                 }]
//             }
//         ],
//         attributes: ['name', 'age']
//     })
//     .then(foundChild => {
//         foundChild.dataValues.food = req.params.food;
//         Food.findAll({
//             where: {
//                 name: req.params.food
//             }
//         })
//         .then(food => {
//             foundChild.dataValues.foodId = food[0].dataValues.id;
//             console.log(`Going to send: ${foundChild.dataValues}`);
//             res.send(foundChild);
//         })
//     })
// };

const getFoodData = (req, res) => {
    console.log("======================")
    console.log(req.params.childId)
    Exposure.findAll({
        where: {
            childId: req.params.childId,
            foodId: req.params.foodId
        }
    })
    .then(foundExposures => {
        let response = {
            exposures: foundExposures
        };
        Food.findAll({
            where: {
                id: req.params.foodId
            }
        })
        .then(food => {
            response.foodId = req.params.foodId;
            response.food = food[0].dataValues.name;
            res.send(response);
        })
    })
};

const addExposure = (req,res) => {
    Exposure.create(req.body)
    .then(newExposure => {
        Food.findByPk(newExposure.dataValues.foodId)
        .then(food => {
            res.redirect(`/exposures/${food.name}/${newExposure.dataValues.childId}`)
        })
    })
}

module.exports = {
    index,
    getFoodData,
    addExposure
}