const Booking=require('../Modal/BookingModal');
exports.parcelbooking = (async (req, res, next) => {
const booking= await Booking.create({
    name:req.body.name,
    email:req.body.email,
    address:req.body.address,
    destination:req.body.destination,

});
    res.status(201).json({
      message: 'parcel Booked',
      booking
    });
  });