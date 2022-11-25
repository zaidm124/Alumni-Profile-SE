const express = require("express");
const app = express();
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.use("/profile",require("./profile"))

module.exports = router;
