const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  description: { type: String },
  itemIds: [{ type: String, ref="Product" }],
  score: { type: Number },
  title: { type: String, required: true }
});

module.exports = mongoose.model("Collection", collectionSchema);
