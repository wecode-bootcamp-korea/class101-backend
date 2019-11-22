const Product = require("models/product");
const Category = require("models/category");

const getRate = (goodCount, count) => {
  if (!isNaN(Math.floor((goodCount / count) * 100))) {
    return Math.floor((goodCount / count) * 100) + "%";
  } else {
    return null;
  }
};

exports.getProductsBySort = async sort => {
  const products = await Product.find()
    .select(
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId createdAt"
    )
    .populate("categoryId", "title")
    .populate("ownerUser", "nickname")
    .sort(sort);
  return products.slice(0, 10);
};

exports.getResponseForList = async products =>
  await Promise.all(
    products.map(async product => {
      const {
        wishlistedCount: favorites,
        ownerUser,
        feedbackGoodCount,
        feedbackCount,
        categoryId,
        createdAt,
        _id,
        title,
        coverImageUrl: imageUrl,
        willOpenAt
      } = product;

      const nickname = ownerUser ? ownerUser.nickname : "";

      const { title: category } = categoryId
        ? await Category.findOne({ _id: categoryId }).select("title")
        : null;

      const rate = getRate(feedbackGoodCount, feedbackCount);

      return {
        ownerUser: nickname,
        favorites,
        category,
        rate,
        createdAt,
        _id,
        title,
        imageUrl,
        willOpenAt
      };
    })
  );
