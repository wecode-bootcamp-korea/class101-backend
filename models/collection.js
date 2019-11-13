const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  description: { type: String },
  itemIds: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  score: Number,
  title: { type: String, required: true, unique: true },
  imageUrl: String
});

module.exports = mongoose.model("Collection", collectionSchema);
