const authService = require("service/auth");
const catchAsync = require("utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
    await authService.signup(req, res);
    res.status(200).json({
        status: "SUCCESS",
        message: "SUCCESSFULLY CREATED USER"
    });
});

exports.login = catchAsync(async (req, res, next) => {
    const result = await authService.login(req, res, next);
    switch (result) {
        case "NO_EMAIL_PASSWORD":
            next({ message: "INSERT EMAIL AND PASSWORD", statusCode: 401 });
            break;
        case "INCORRECT_EMAIL_PASSWORD":
            next({ message: "INCORRECT EMAIL OR PASSWORD", statusCode: 401 });
            break;
        default:
            res.status(200).json({ token: result });
    }
});

exports.login_required = catchAsync(async (req, res, next) => {
    let token = req.header.authorization;
    console.log(token);
});
