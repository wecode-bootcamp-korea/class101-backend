const categoryRouter = require("./category");
const userRouter = require("./user");

const router = app => {
    app.use("/api/category", categoryRouter);
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
