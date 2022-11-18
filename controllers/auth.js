const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp =(async (req, res, next) => {
    res.json({status:"success"})
});

const logIn = (async (req, res, next) => {
    res.json({status:"success"})
});

module.exports = {
  signUp,
  logIn
};
