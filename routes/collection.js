const express = require("express");
const router = express.Router();
const collectionController = require("controllers/collection");

router.get("/", collectionController.list);

module.exports = router;
