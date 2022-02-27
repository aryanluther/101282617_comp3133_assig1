const mongoose = require("mongoose");

let listingModel = new mongoose.Schema({
  listing_id: {
    type: String,
    required: true,
    unique: true,
  },

  listing_title: {
    type: String,
    required: true,
    lowercase: true,
  },

  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },

  street: {
    type: String,
    required: true,
    lowercase: true,
  },

  city: {
    type: String,
    required: true,
    lowercase: true,
  },

  postal_code: {
    type: String,
    required: true,
    lowercase: true,
  },

  price: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },

  username: {
    type: String,
    required: true,
  },
});

let Listing = mongoose.model("Listing", listingModel);
module.exports = Listing;
