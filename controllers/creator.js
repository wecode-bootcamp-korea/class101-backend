const creatorService = require("services/creator");
const catchAsync = require("utils/catchAsync");

exports.createProduct = catchAsync(async (req, res, next) => {
    const product = await creatorService.createProduct(req, res, next);

    res.status(200).json({ product });
});

exports.uploadProductImages = catchAsync(async (req, res, next) => {
    await creatorService.uploadProductImages(req, res, next);
});

exports.updateProduct = catchAsync(async (req, res, next) => {
    await creatorService.updateProduct(req, res, next);

    res.status(200).json({ status: "SUCCESS", message: "SUCCESSFULLY UPDATED PRODUCT" });
});

exports.getCreatorProducts = catchAsync(async (req, res, next) => {
    let result = await creatorService.getCreatorProducts(req, res, next);
    result = result.myProducts;
    res.status(200).json({ products: result });
});

exports.getCreatorProductDetails = catchAsync(async (req, res, next) => {
    const productDetails = await creatorService.getCreatorProductDetails(req, res, next);
    const categories = await creatorService.getProductCategories(req, res, next);
    res.status(200).json({ productDetails, categories });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
    await creatorService.deleteProduct(req, res, next);
    res.status(200).json({ status: "SUCCESS", message: "SUCCESSFULLY DELETED PRODUCT" });
});

exports.uploadProfileImage = catchAsync(async (req, res, next) => {
    await creatorService.uploadProfileImage(req, res, next);
});

exports.updateProfile = catchAsync(async (req, res, next) => {
    await creatorService.updateProfile(req, res, next);

    res.status(200).json({ status: "SUCCESS", message: "SUCCESSFULLY UPDATED CREATOR PROFILE" });
});

exports.getProfile = catchAsync(async (req, res, next) => {
    const profile = await creatorService.getProfile(req, res, next);
    res.status(200).json({ profile });
});

exports.uploadCreatorInterviewImages = catchAsync(async (req, res, next) => {
    await creatorService.uploadCreatorInterviewImages(req, res, next);
});

exports.getProductCategory = catchAsync(async (req, res, next) => {
    const category = await creatorService.getProductCategories(req, res, next);

    res.status(200).json({ category });
});
