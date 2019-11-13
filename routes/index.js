const categoryRouter = require("./category");
const bannerRouter = require("./banner");

const router = app => {
  app.use("/category", categoryRouter);
  app.use("/banner", bannerRouter);
};

module.exports = router;
