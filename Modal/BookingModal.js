const bcrypt = require('bcrypt');
const { model } = require("mongoose");
const mongoose = require('mongoose');


const  bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  address: 
    {
     type:String
    },
Destination:{
  type:String
}
})

const Booking = model('BOOKING', bookingSchema);
module.exports = Booking;
