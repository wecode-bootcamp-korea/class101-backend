const Product = require("models/product");
const common = require("common");

exports.getProductByCategory = async categoryId => {
  const products = await Product.find({ categoryId: categoryId }).select(
    "title _id coverImageUrl wishlistedCount feedbackCount feedbackGoodCount willOpenAt "
  );

  return common.getResponseForList(products);
};
