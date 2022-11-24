const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Alumni = require("../models/alumniModel");
const catchAsync = require("./../utils/catchAsync");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (alumni, statusCode, req, res) => {
  const token = signToken(alumni._id);

  // if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),

    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });
  alumni.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      alumni,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newAlumni = await Alumni.create({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  const token = signToken(newAlumni._id);

  res.status(201).json({
    status: "success",
    token,
    data: {
      alumni: newAlumni,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please Provide email and password", 400));
  }

  const alumni = await Alumni.findOne({ email }).select("+password");

  if (!alumni || !(await alumni.correctPassword(password, alumni.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  createSendToken(alumni, 200, req, res);
});
