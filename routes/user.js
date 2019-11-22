const express = require("express");
const router = express.Router();
const authController = require("controllers/auth");
const profileController = require("controllers/profile");
const { checkAuth } = require("services/auth");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
// router.post("/test", authController.loginRequired);
router.get("/profile", checkAuth, profileController.getProfile);
router.get("/google", authController.google);

module.exports = router;
