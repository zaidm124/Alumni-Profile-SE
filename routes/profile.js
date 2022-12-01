const express = require("express");
const Alumni = require("../models/alumniModel");
const Profile = require("../models/alumniProfile");
const app = express();

const router = express.Router();

/**
 * name
 * admission
 * batch
 * email
 * phone
 * url
 * _id
 */

router.get("/getAlumni/:email", async (req, res) => {
  const alumni = Alumni.findOne({ email: req.params.email });

  return res.status(200).json({ success: true, alumni });
});




module.exports = router;
