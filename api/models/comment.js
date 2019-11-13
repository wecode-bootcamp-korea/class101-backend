const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  likedCount: { type: Number, default: 0 },
  reComments: {
    commentsList: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
    commentsCount: { type: Number, default: 0 }
  },
  product: { type: Schema.Types.ObjectId, ref: "Product" }
});

module.exports = mongoose.model("Comment", commentSchema);
