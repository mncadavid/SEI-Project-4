const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.post('/add', ctrl.exposures.addExposure);
router.get('/:foodId/:childId', ctrl.exposures.getFoodData);
router.get('/', ctrl.exposures.index);

module.exports = router;