const Product = require("models/product");
const User = require("models/user");
const Category = require("models/category");
const multer = require("multer");
const fs = require("fs");

/**
 * Multer Image
 */

const multerProductStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("=========multerProductStorage==========");
        console.log(req.files);

        if (req.files.coverImageUrl) {
            productId = req.headers.product_id;
            console.log(productId);
            if (!fs.existsSync(`public/product/${productId}`)) {
                fs.mkdirSync(`public/product/${productId}`);
                if (!fs.existsSync(`public/product/${productId}/cover`)) {
                    fs.mkdirSync(`public/product/${productId}/cover`);
                }
            } else {
                if (!fs.existsSync(`public/product/${productId}/cover`)) {
                    fs.mkdirSync(`public/product/${productId}/cover`);
                }
            }
            req.body.productId = productId;
            cb(null, `public/product/${productId}/cover`);
        }

        if (req.files.interviewImages) {
            productId = req.headers.product_id;
            console.log(productId);
            if (!fs.existsSync(`public/product/${productId}`)) {
                fs.mkdirSync(`public/product/${productId}`);
                if (!fs.existsSync(`public/product/${productId}/interviews`)) {
                    fs.mkdirSync(`public/product/${productId}/interviews`);
                }
            } else {
                if (!fs.existsSync(`public/product/${productId}/interviews`)) {
                    fs.mkdirSync(`public/product/${productId}/interviews`);
                }
            }
            req.body.productId = productId;
            cb(null, `public/product/${productId}/interviews`);
        }
    },
    filename: (req, file, cb) => {
        if (req.files.coverImageUrl) {
            cb(null, `product_cover_image.png`);
        }
        if (req.files.interviewImages) {
            cb(null, `product_interview_image_${Date.now()}.png`);
        }
    }
});

const multerProfileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        userId = req.user._id;
        if (!fs.existsSync(`public/user/${userId}`)) {
            fs.mkdirSync(`public/user/${userId}`);
        }
        cb(null, `public/user/${userId}`);
    },
    filename: (req, file, cb) => {
        cb(null, `creator_profile_image.png`);
    }
});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
        cb(null, true);
    } else {
        cb({ status: "FAIL", message: "Upload only images" });
    }
};

const uploadProfile = multer({ storage: multerProfileStorage, fileFilter: multerFilter });
exports.uploadProfileImage = uploadProfile.single("profileImageUrl");

const uploadProductImagesMulter = multer({ storage: multerProductStorage, fileFilter: multerFilter });
exports.uploadProductImages = uploadProductImagesMulter.fields([
    { name: "coverImageUrl", maxCount: 1 },
    { name: "interviewImages", maxCount: 3 }
]);

/**
 * Product CRUD
 */

exports.createProduct = async (req, res, next) => {
    req.body.ownerUser = req.user.id;
    const filteredBody = filterObj(req.body, "categoryId", "difficulty", "title", "ownerUser", "topic");

    console.log(filteredBody);

    //Create new product
    const newProduct = await Product.create(filteredBody);
    // console.log("======createProduct======");
    // console.log(newProduct);

    //Add _id of newly created product to ownerUser's myProducts
    const ownerUser = await User.findByIdAndUpdate(newProduct.ownerUser, { $push: { myProducts: newProduct._id } });
    // console.log("======ownerUser======");
    // console.log(ownerUser);
    return newProduct;
};

exports.updateProduct = async (req, res, next) => {
    console.log("====updateProduct===");
    console.log(req.body);
    console.log(req.file);
    console.log(req.files);

    if (req.files) {
        req.body.coverImageUrl = req.files.path;
    }

    const filteredBody = filterObj(
        req.body,
        "categoryId",
        "difficulty",
        "title",
        "topic",
        "coverImageUrl",
        "description",
        "interviews",
        "recommendations"
    );

    const updatedProduct = await Product.findByIdAndUpdate(req.body.productId, filteredBody, { new: true });

    console.log(updatedProduct);
};

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) {
            newObj[el] = obj[el];
        }
    });
    return newObj;
};

exports.getCreatorProducts = async (req, res, next) => {
    const user = await User.findById(req.user._id).populate("myProducts", "title isPublished coverImageUrl");
    return user;
};

exports.getCreatorProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.productId);
    return product;
};

exports.deleteProduct = async (req, res, next) => {
    await Product.findByIdAndRemove(req.params.productId);
};

exports.getProductCategories = async (req, res, next) => {
    const categories = await Category.find().select("_id title");
    return categories;
};

/**
 * Creator Profile GET UPDATE
 */

exports.updateProfile = async (req, res, next) => {
    console.log(req.body);

    console.log(req.file);
    if (req.file) {
        req.body.photoUrl = req.file.path;
    }
    const filteredBody = filterObj(req.body, "photoUrl", "nickname", "phone", "introduction");

    const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, { new: true });
    console.log(updatedUser);
};

exports.getProfile = async (req, res, next) => {
    const user = await User.findById(req.user._id).select("_id photoUrl nickname phone introduction");
    console.log(user);
    return user;
};
