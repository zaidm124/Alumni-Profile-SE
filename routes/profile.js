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


router.put("/update/:email", async (req, res) => {
  const {
    description,
    branch,
    experience,
    worked,
    current,
    research,
    projects,
  } = req.body;

  await Alumni.updateOne(
    {
      email: req.params.email,
    },
    {
      $set: {
        description,
        branch,
        experience,
        worked,
        current,
        research,
        projects,
      },
    }
  );

  return res.status(200).json({
    success: true,
    message: "Alumni Detials updated successfully",
  });
});

module.exports = router;
