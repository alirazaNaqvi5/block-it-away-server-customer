const express = require('express');
const router = express.Router();
const bookingController = require('../Controller/BookingController');

router.post('/booking', bookingController.parcelbooking); //----For signup
module.exports = router;