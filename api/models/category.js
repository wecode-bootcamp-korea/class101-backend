const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  title: { type: String, required: true },
  iconUrl: { type: String, required: true }
});

module.exports = mongoose.model("Category", categorySchema);
