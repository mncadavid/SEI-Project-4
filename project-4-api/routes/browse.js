const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.browse.index);

module.exports = router;