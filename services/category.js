const Product = require("models/product");

const getRate = (goodCount, count) => {
  if (!isNaN(Math.floor((goodCount / count) * 100))) {
    return Math.floor((goodCount / count) * 100) + "%";
  } else {
    return null;
  }
};

exports.getProductByCategory = async categoryId => {
  const products = await Product.find({ categoryId: categoryId }).select(
    "title _id coverImageUrl wishlistedCount feedbackCount feedbackGoodCount willOpenAt "
  );

  const response = [];
  products.forEach(prod => {
    const result = {};
    result["_id"] = prod._id;
    result["title"] = prod.title;
    result["favorites"] = prod.wishlistedCount;
    result["rate"] = getRate(prod.feedbackGoodCount, prod.feedbackCount);
    result["willOpenAt"] = prod.willOpenAt;
    result["imageUrl"] = prod.coverImageUrl;
    response.push(result);
  });
  return response;
};
