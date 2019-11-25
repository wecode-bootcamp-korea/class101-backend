const express = require("express");
const router = express.Router();
const creatorController = require("controllers/creator");
const userController = require("controllers/auth");

router
    .get("/product", userController.loginRequired, creatorController.getCreatorProducts)
    .post("/product", userController.loginRequired, creatorController.createProduct)
    .patch(
        "/product",
        userController.loginRequired,
        creatorController.uploadProductImages,
        creatorController.updateProduct
    )
    .delete("/product/:productId", userController.loginRequired, creatorController.deleteProduct);

router.get("/product/category", userController.loginRequired, creatorController.getProductCategory);
router.get("/product/:productId", userController.loginRequired, creatorController.getCreatorProductDetails);

router
    .get("/profile", userController.loginRequired, creatorController.getProfile)
    .post(
        "/profile",
        userController.loginRequired,
        creatorController.uploadProfileImage,
        creatorController.updateProfile
    );

module.exports = router;
