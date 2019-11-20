const express = require("express");
const router = express.Router();
const { signup, login } = require("controllers/auth");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
// router.post("/test", authController.loginRequired);

module.exports = router;
