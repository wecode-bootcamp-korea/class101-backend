const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  likedCount: { type: Number, default: 0 },
  productId: { type: String, ref: "Product" },
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Comment", commentSchema);
