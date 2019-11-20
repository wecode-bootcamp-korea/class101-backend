const categoryRouter = require("./category");
const bannerRouter = require("./banner");
const collectionRouter = require("./collection");
const productRouter = require("./product");
const userRouter = require("./user");

const router = app => {
  app.use("/category", categoryRouter);
  app.use("/banner", bannerRouter);
  app.use("/collection", collectionRouter);
  app.use("/product", productRouter);
  app.use("/users", userRouter);

  app.all("*", (req, res, next) => {
    const err = new Error(`can't find ${req.originalUrl} on this server`);
    err.status = "FAIL";
    err.statusCode = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  });
};

module.exports = router;
