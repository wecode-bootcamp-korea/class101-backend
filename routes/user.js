const express = require("express");
const router = express.Router();
const authController = require("controllers/auth");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
// router.post("/test", authController.loginRequired);
router.get("/google", authController.google);

module.exports = router;
