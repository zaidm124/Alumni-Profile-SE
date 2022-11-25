const mongoose = require("mongoose");

const alumniProfile = new mongoose.Schema({
  //name admission batch email phone url
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  admission: {
    type: String,
    required: [true, "Please tell your admission number"],
  },
  batch: {
    type: Number,
    required: [true, "Please tell your batch year"],
  },
  email: {
    type: String,
    required: [true, "Please Provide your email."],
    unique: true,
    lowerCase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: String,
    required: [true, "Please provide your phone number"],
  },
  url: {
    type: String,
  },
});

const Profile = mongoose.model("Alumni", alumniProfile);
module.exports = Profile;
