const express = require("express");
const router = express.Router();
const productController = require("controllers/product");
const { checkAuth } = require("services/auth");

router.get("/:productId", productController.detail);
router.post("/:productId", checkAuth, productController.purchase);

module.exports = router;
