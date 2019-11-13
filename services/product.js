const Product = require("models/product");

exports.getDetails = async productId => {
  let product = await Product.findById(productId)
    .populate("categoryId", "title")
    .populate("curriculum", " title missionSteps coverImage");

  let missionSteps = [];

  product.curriculum.missionSteps.forEach(steps => {
    let missionStep = {};
    let missions = [];

    steps.missions.forEach(mission => {
      let singleMission = {};

      singleMission["title"] = mission.title;
      singleMission["episode"] = mission.episode;

      missions.push(singleMission);
    });

    missionStep["imageUrls"] = steps.imageUrls[0];
    missionStep["title"] = steps.title;
    missionStep["subtitle"] = steps.subtitle;
    missionStep["index"] = steps.index;
    missionStep["missions"] = missions;

    missionSteps.push(missionStep);
  });

  product.curriculum["missionSteps"] = missionSteps;

  return product;
};
