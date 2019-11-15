const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  description: { type: String },
  itemIds: [{ type: String, ref: "Product" }],
  score: Number,
  title: { type: String, required: true, unique: true },
  imageUrl: String
});

module.exports = mongoose.model("Collection", collectionSchema);
