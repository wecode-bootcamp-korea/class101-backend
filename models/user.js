const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: { type: String, required: true },
        nickname: { type: String, unique: [true, "nickname already exists"] },
        email: { type: String, unique: [true, "email already exists"] },
        password: { type: String },
        address: String,
        detailAddress: String,
        provider: Object,
        photoUrl: String,
        phone: String,
        orderCount: Number,
        creater: { type: Boolean, default: false },
        recentViewedProductIds: [{ type: Schema.Types.ObjectId, ref: "Product" }],
        myProduct: { type: Schema.Types.ObjectId, ref: "Product" },
        purchasedProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }],
        favoriteProducts: [{ type: Schema.Types.ObjectId, ref: "Product" }]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);
