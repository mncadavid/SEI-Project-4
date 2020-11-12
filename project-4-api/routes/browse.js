const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.browse.index);
router.get('/:childId/:foodId',ctrl.browse.getLastExposure);
router.post('/addfood', ctrl.browse.addFood);

module.exports = router;