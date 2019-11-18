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

exports.getResponseForList = async array => {
  const response = [];
  for (const prod of array) {
    product = {};
    product["_id"] = prod._id;
    product["title"] = prod.title;
    product["ownerUser"] = prod.ownerUser.nickname;
    product["favorites"] = prod.wishlistedCount;
    product["rate"] = getRate(prod.feedbackGoodCount, prod.feedbackCount);
    product["willOpenAt"] = prod.willOpenAt;
    product["imageUrl"] = prod.coverImageUrl;
    if (prod.categoryId) {
      const category = await Category.findOne({ _id: prod.categoryId }).select(
        "title"
      );
      const categoryTitle = category.title;
      product["category"] = categoryTitle;
    }
    response.push(product);
  }
  return response;
};
