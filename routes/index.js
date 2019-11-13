const categoryRouter = require("./category");
const bannerRouter = require("./banner");
const collectionRouter = require("./collection");

const router = app => {
  app.use("/category", categoryRouter);
  app.use("/banner", bannerRouter);
  app.use("/collection", collectionRouter);
};

module.exports = router;
