const Product = require("models/product");
const productUtil = require("utils/product");

const getTopten = async () => {
  const topTen = await productUtil.getProductsBySort("-wishlistedCount");

  return productUtil.getResponseForList(topTen);
};

const getBrandNew = async () => {
  const brandNew = await productUtil.getProductsBySort("createdAt");

  return productUtil.getResponseForList(brandNew);
};

const getNotice = async () => {
  const notice = await productUtil.getProductsBySort("wishlistedCount");

  return productUtil.getResponseForList(notice);
};

const getMdChoice = async () => {
  const products = await Product.find({ MD: true })
    .select(
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId"
    )
    .populate("categoryId", "title")
    .populate("ownerUser", "nickname");
  const mdChoice = products.slice(0, 10);

  return productUtil.getResponseForList(mdChoice);
};

exports.getBanners = async () => {
  const response = [
    { title: "MD 추천 클래스", data: await getMdChoice() },
    { title: "지금, 인기 TOP 10", data: await getTopten() },
    { title: "신규 클래스", data: await getBrandNew() },
    { title: "알림 신청 중인 클래스", data: await getNotice() }
  ];

  return response;
};
