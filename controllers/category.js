const Category = require("models/category");
const services = require("services/category");

exports.list = async (req, res) => {
  try {
    const categoryList = await Category.find();

    res.status(200).json({ filter: { category: categoryList } });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.single = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const response = await services.getProductByCategory(categoryId);

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
