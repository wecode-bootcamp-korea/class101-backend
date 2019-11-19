const express = require("express");
const router = express.Router();
const bannerController = require("controllers/banner");

router.get("/promotion", bannerController.promotion);
router.get("/theme", bannerController.theme);

module.exports = router;
