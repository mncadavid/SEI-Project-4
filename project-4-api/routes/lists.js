const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.lists.index);
router.get('/show', ctrl.lists.show);

module.exports = router;