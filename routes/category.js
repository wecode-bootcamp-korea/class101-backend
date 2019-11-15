const express = require("express");
const router = express.Router();

const categoryController = require("controllers/category");

router.get("/", categoryController.get_list);

router.get("/:categoryId", categoryController.get_one);

module.exports = router;
