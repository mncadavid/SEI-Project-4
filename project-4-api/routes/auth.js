const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/login', ctrl.auth.login);
router.get('/signup', ctrl.auth.signup);

module.exports = router;