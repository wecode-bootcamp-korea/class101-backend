const Product = require("models/product");
const getProducts = require("utils/getProducts");

exports.getProductByCategory = async categoryId => {
  const products = await Product.find({ categoryId: categoryId }).select(
    "title _id coverImageUrl wishlistedCount feedbackCount feedbackGoodCount willOpenAt "
  );

  return getProducts.getResponseForList(products);
};
