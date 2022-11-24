const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please Provide your email."],
    unique: true,
    lowerCase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
});

alumniSchema.pre("save", async function (next) {
  // if password of this document is not modified then just go to next middleware else continue the execution
  if (!this.isModified("password")) return next();

  // hashing the password
  this.password = await bcrypt.hash(this.password, 12);

  // delete password confirm field.
  this.passwordConfirm = undefined;

  next();
});

alumniSchema.methods.correctPassword = async function (
  candidatePassword,
  alumniPassword
) {
  return await bcrypt.compare(candidatePassword, alumniPassword);
};

const Alumni = mongoose.model("Alumni", alumniSchema);
module.exports = Alumni;
