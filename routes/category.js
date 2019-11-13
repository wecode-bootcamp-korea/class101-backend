const express = require("express");
const router = express.Router();
const categoryController = require("controllers/category");

router.get("/", categoryController.list);

router.get("/:categoryId", categoryController.single);

module.exports = router;
