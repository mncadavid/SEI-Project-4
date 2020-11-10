const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.browse.index);
router.post('/addfood', ctrl.browse.addFood)

module.exports = router;