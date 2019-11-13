const Product = require("models/product");

exports.getTopten = async () => {
  const topTen = await getProducts("-wishlistedCount");
  return getResponse(topTen);
};

exports.getBrandNew = async () => {
  const brandNew = await getProducts("-willOpenAt");
  return getResponse(brandNew);
};

exports.getNotice = async () => {
  const notice = await getProducts("wishlistedCount");
  return getResponse(notice);
};

exports.getMdChoice = async () => {
  const products = await Product.find({ MD: true })
    .select(
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId"
    )
    .populate("categoryId", "title");
  const mdChoice = products.slice(0, 10);
  return getResponse(mdChoice);
};

const getRate = (goodCount, count) => {
  if (!isNaN(Math.floor((goodCount / count) * 100))) {
    return Math.floor((goodCount / count) * 100) + "%";
  } else {
    return null;
  }
};

const getProducts = async sort => {
  const products = await Product.find()
    .select(
      "coverImageUrl ownerUser willOpenAt feedbackCount feedbackGoodCount wishlistedCount title categoryId"
    )
    .populate("categoryId", "title")
    .sort(sort);
  return products.slice(0, 10);
};

const getResponse = array => {
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
