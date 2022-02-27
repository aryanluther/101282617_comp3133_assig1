const mongoose = require("mongoose");

let bookingModel = new mongoose.Schema({
  listing_id: {
    type: String,
    required: true,
  },
  booking_id: {
    type: String,
    required: true,
  },
  booking_date: {
    type: String,
    required: true,
  },
  booking_start: {
    type: String,
    required: true,
  },
  booking_end: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

let Booking = mongoose.model("Booking", bookingModel);
module.exports = Booking;
