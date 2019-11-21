const HeroBanner = require("models/heroBanner");
const bannerService = require("services/banner");

exports.promotion = async (req, res) => {
  try {
    const heroBanner_list = await HeroBanner.find();

    res.status(200).json({ promotion: heroBanner_list });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.theme = async (req, res) => {
  try {
    const response = await bannerService.getBanners();

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
