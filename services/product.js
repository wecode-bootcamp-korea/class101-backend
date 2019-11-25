const Product = require("models/product");
const User = require("models/user");

exports.getDetails = async productId => {
    let product = await Product.findById(productId)
        .populate("categoryId", "title")
        .populate("curriculum", " title missionSteps coverImage")
        .populate("ownerUser", "name nickname email photoUrl content");

    let missoinStepResponse = [];

    for (const steps of product.curriculum.missionSteps) {
        const { _id, imageUrls, index, missions, subtitle, title } = steps;

        const missionlist = [];

        for (const mission of missions) {
            const { episode, title, _id } = mission;
            missionlist.push({ episode, title, _id });
        }

        let newStep = {
            _id,
            imageUrls,
            index,
            missions: missionlist,
            subtitle,
            title
        };

        missoinStepResponse.push(newStep);
    }

    product.curriculum.missionSteps = missoinStepResponse;

    return product;
};

exports.purchaseProduct = async (productId, userId) => {
    const user = await User.findById(userId);

    const purchasedProduct = !user.purchasedProducts.includes(productId) && user.purchasedProducts.concat(productId);

    purchasedProduct && (await User.updateOne({ _id: userId }, { purchasedProducts: purchasedProduct }));

    return { purchasedProducts: user.purchasedProducts };
};
