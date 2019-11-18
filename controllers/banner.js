const HeroBanner = require("models/heroBanner");
const { getBanners } = require("services/banner");

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
    const response = await getBanners();

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
