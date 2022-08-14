const express = require('express');
const router = express.Router();
const authController = require('../Controller/authController');

router.post('/register', authController.signup); //----For signup
router.post('/logins', authController.login); //----For the login

// create router to get parcels
router.get('/trackParcels', authController.getParcels);

// create router to get all parcels of the user
router.get('/getParcels', authController.getAllParcels);

// create route to forgot password
router.post('/forgotPassword', authController.forgotPassword);

module.exports = router;