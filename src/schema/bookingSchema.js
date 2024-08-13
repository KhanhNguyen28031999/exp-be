const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  customerName: String,
  phoneNumber: String,
  numberOfRooms: Number,
  numberOfAdults: Number,
  numberOfChildren: Number,
  hotelLocation: String,
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
