const profileService = require("services/profile");

exports.getProfile = async (req, res) => {
  const userId = req.userId;

  const response = await profileService.findUser(userId);

  res.status(200).json(response);
};
