const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const curriculumSchema = new Schema(
  {
    firebaseId: String,
    title: { type: String, unique: true },
    missionSteps: [
      {
        title: String,
        subtitle: String,
        isHidden: Boolean,
        imageUrls: Array,
        index: Number,
        missions: Array
      }
    ],
    willOpenAt: Date,
    coverImage: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Curriculum", curriculumSchema);
