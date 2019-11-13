const categoryRouter = require("./category");

const router = app => {
  app.use("/api/category", categoryRouter);
};

module.exports = router;
