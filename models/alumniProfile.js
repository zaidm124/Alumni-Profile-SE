const mongoose = require("mongoose");
const validator=require("validator")
const alumniProfile = new mongoose.Schema({
  //name admission batch email phone url
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  admission: {
    type: String,
    // required: [true, "Please tell your admission number"],
  },
  batch: {
    type: String,
    // required: [true, "Please tell your batch year"],
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
    // required: [true, "Please provide your phone number"],
  },
  description: {
    type: String,
  },
  branch:{
    type:String
  },
  experience:{
    type:String,
  },
  worked:{
    type:String,
  },
  current:{
    type:String,
  },
  research:{
    type:String,
  },
  projects:{
    type:String,
  }
  
});

const Profile = mongoose.model("Profile", alumniProfile);
module.exports = Profile;
