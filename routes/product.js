const express = require("express");
const router = express.Router();
const productController = require("controllers/product");

router.get("/:productId", productController.detail);

module.exports = router;
