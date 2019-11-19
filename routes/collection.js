const express = require("express");
const router = express.Router();
const { list } = require("controllers/collection");

router.get("/", list);

module.exports = router;
