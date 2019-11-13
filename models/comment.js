const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  content: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  likedCount: { type: Number, default: 0 },
  productId: { type: Schema.Types.ObjectId || String, ref: "Product" },
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Comment", commentSchema);
