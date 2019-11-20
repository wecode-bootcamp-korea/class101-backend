const Category = require("models/category");
const Product = require("models/product");
const service = require("services/category");

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
    const products = await service.getProductByCategory(categoryId);

    res.status(200).json({ products: products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
