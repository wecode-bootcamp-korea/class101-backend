const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    nickname: { type: String, unique: true },
    email: String,
    address: String,
    detailAddress: String,
    provider: String,
    photoUrl: String,
    phone: String,
    orderCount: Number,
    creater: Boolean,
    recentViewedProductIds: [{ type: Schema.Types.ObjectId, ref: "Product" }]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);
