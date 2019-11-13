const express = require("express");
const router = express.Router();

const Category = require("models/category");

router.get("/", async (req, res) => {
  try {
    const categoryList = await Category.find();
    res.status(200).json({
      category: categoryList
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;
