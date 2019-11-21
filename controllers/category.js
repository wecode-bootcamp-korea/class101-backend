const Category = require("models/category");
const categoryService = require("services/category");

exports.list = async (req, res) => {
  try {
    const categoryList = await Category.find();

    res.status(200).json({ category: categoryList });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.single = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const products = await categoryService.getProductByCategory(categoryId);

    res.status(200).json({ products: products });
  } catch (err) {
    res.status(400).json({ error: `Wrong Category Id ${err.value}` });
  }
};
