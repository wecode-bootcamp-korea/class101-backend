const express = require("express");
const router = express.Router();
const { theme, promotion } = require("controllers/banner");

router.get("/promotion", promotion);
router.get("/theme", theme);

module.exports = router;
