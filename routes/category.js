const express = require("express");
const router = express.Router();
const { list, single } = require("controllers/category");

router.get("/", list);
router.get("/:categoryId", single);

module.exports = router;
