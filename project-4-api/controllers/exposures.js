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


module.exports = {
    index
}