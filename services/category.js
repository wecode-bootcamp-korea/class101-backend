const Product = require("models/product");
const productUtil = require("utils/product");

exports.getProductByCategory = async categoryId => {
  const products = await Product.find({ categoryId: categoryId }).select(
    "overImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId createdAt"
  );

  return productUtil.getResponseForList(products);
};
