const Product = require("models/product");

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
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId"
    )
    .populate("categoryId", "title")
    .sort(sort);
  return products.slice(0, 10);
};

exports.getResponseForList = array => {
  const response = [];
  array.forEach(prod => {
    product = {};
    product["_id"] = prod._id;
    product["title"] = prod.title;
    product["ownerUser"] = prod.ownerUser.nickName;
    product["favorites"] = prod.wishlistedCount;
    product["rate"] = getRate(prod.feedbackGoodCount, prod.feedbackCount);
    product["willOpenAt"] = prod.willOpenAt;
    product["imageUrl"] = prod.coverImageUrl;
    product["category"] = prod.categoryId.title;
    response.push(product);
  });
  return response;
};
