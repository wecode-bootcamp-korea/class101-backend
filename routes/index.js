const categoryRouter = require("./category");
const bannerRouter = require("./banner");
const collectionRouter = require("./collection");
const productRouter = require("./product");
const creatorRouter = require("./creator");
const userRouter = require("./user");
const globalErrorHandler = require("controllers/error");

const router = app => {
    app.use("/category", categoryRouter);
    app.use("/banner", bannerRouter);
    app.use("/collection", collectionRouter);
    app.use("/product", productRouter);
    app.use("/creator", creatorRouter);
    app.use("/user", userRouter);

    app.all("*", (req, res, next) => {
        const err = new Error(`can't find ${req.originalUrl} on this server`);
        err.status = "FAIL";
        err.statusCode = 404;
        next(err);
    });

    app.use(globalErrorHandler);
};

module.exports = router;
