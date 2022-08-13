const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const mongoose = require("mongoose");
const db = require('./Database/Db');

// express urlencoded
app.use(express.urlencoded({ extended: true }));


const userRouter = require('./Routes/routes');
const bookingRouter = require('./Routes/BookingRoutes');

app.use('/api/users', userRouter);
app.use('/api/v1/bookings', bookingRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
