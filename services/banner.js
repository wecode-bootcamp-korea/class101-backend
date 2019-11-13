const Product = require("models/product");
const getProducts = require("utils/getProducts");

exports.getTopten = async () => {
  const topTen = await getProducts.getProductsBySort("-wishlistedCount");
  return getProducts.getResponseForList(topTen);
};

exports.getBrandNew = async () => {
  const brandNew = await getProducts.getProductsBySort("-willOpenAt");
  return getProducts.getResponseForList(brandNew);
};

exports.getNotice = async () => {
  const notice = await getProducts.getProductsBySort("wishlistedCount");
  return getProducts.getResponseForList(notice);
};

exports.getMdChoice = async () => {
  const products = await Product.find({ MD: true })
    .select(
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId"
    )
    .populate("categoryId", "title");
  const mdChoice = products.slice(0, 10);
  return getProducts.getResponseForList(mdChoice);
};
