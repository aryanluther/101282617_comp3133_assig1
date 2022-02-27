const mongoose = require("mongoose");

let userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "username must be unique"],
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    match: [
      /^[a-zA-Z0-9\#\$\&\_]+$/,
      "Please enter a valid password ( min 6 characters, a-z, A-Z, 0-9, #, $, &, _ )",
    ],
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  type: {
    type: String,
    required: true,
    enum: ["admin", "customer"],
  },
});

let User = mongoose.model("User", userModel);
module.exports = User;
