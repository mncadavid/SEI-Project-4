const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.exposures.index);
router.get('/:food', ctrl.exposures.getFoodData);

module.exports = router;