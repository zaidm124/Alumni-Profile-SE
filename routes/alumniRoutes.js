const express = require("express");
const app = express();
const Alumni = require("../models/alumniModel");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.get("/getalumni/:batch", async (req, res) => {
    try{
      const alumni = await Alumni.find({ batch: req.params.batch });
      if(!alumni)return res.status(400).json({message:"Alumni Batch not found"})
      return res.status(200).json({ success: true, alumni});
    }catch(err){
      return res.status(400).json("ERR");
    }
  });

router.use("/profile",require("./profile"))

module.exports = router;
