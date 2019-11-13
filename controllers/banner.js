const HeroBanner = require("models/heroBanner");
const banner = require("services/banner");

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
    const mdChoice = await banner.getMdChoice();
    const topTen = await banner.getTopten();
    const brandNew = await banner.getBrandNew();
    const notice = await banner.getNotice();

    res.status(200).json([
      { title: "MD 추천 클래스", data: mdChoice },
      { title: "지금, 인기 TOP 10", data: topTen },
      { title: "신규 클래스", data: brandNew },
      { title: "알림 신청 중인 클래스", data: notice }
    ]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
