const express = require("express");
const router = express.Router();
const { detail } = require("controllers/product");

router.get("/:productId", detail);

module.exports = router;
