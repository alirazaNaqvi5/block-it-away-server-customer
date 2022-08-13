const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');

router.post('/register', authController.signup); //----For signup
router.post('/logins', authController.login); //----For the login

module.exports = router;