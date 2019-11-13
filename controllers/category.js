const Category = require("models/category");
const Product = require("models/product");

exports.list = async (req, res) => {
  try {
    const categoryList = await Category.find();
    res.status(200).json({
      category: categoryList
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

exports.single = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const products = await Product.find({ categoryId: categoryId }).select(
      "title _id coverImageUrl wishlistedCount feedbackCount feedbackGoodCount willOpenAt "
    );
    const result = [];
    products.forEach(prod => {
      const response = {};
      response["title"] = prod.title;
      response["favorites"] = prod.wishlistedCount;
      response["satisfactionRate"] =
        Math.floor((prod.feedbackGoodCount / prod.feedbackCount) * 100) + "%";
      response["willOpenAt"] = prod.willOpenAt;
      response["imageUrl"] = prod.coverImageUrl;
      result.push(response);
    });
    res.status(200).json({ products: result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
