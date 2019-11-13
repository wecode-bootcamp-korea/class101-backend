const Product = require("models/product");
const common = require("common");

exports.getTopten = async () => {
  const topTen = await common.getProductsBySort("-wishlistedCount");
  return common.getResponseForList(topTen);
};

exports.getBrandNew = async () => {
  const brandNew = await common.getProductsBySort("-willOpenAt");
  return common.getResponseForList(brandNew);
};

exports.getNotice = async () => {
  const notice = await common.getProductsBySort("wishlistedCount");
  return common.getResponseForList(notice);
};

exports.getMdChoice = async () => {
  const products = await Product.find({ MD: true })
    .select(
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId"
    )
    .populate("categoryId", "title");
  const mdChoice = products.slice(0, 10);
  return common.getResponseForList(mdChoice);
};
