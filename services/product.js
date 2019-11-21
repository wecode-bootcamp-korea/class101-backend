const Product = require("models/product");

exports.getDetails = async productId => {
  let product = await Product.findById(productId)
    .populate("categoryId", "title")
    .populate("curriculum", " title missionSteps coverImage")
    .populate("ownerUser", "name nickname email photoUrl ");

  let missoinStepResponse = [];

  for (const steps of product.curriculum.missionSteps) {
    const { _id, imageUrls, index, missions, subtitle, title } = steps;

    const missionlist = [];

    for (const mission of missions) {
      const { episode, title, _id } = mission;
      missionlist.push({ episode, title, _id });
    }

    let newStep = {
      _id,
      imageUrls,
      index,
      missions: missionlist,
      subtitle,
      title
    };

    missoinStepResponse.push(newStep);
  }

  product.curriculum.missionSteps = missoinStepResponse;

  return product;
};
