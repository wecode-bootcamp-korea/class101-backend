const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const curriculumSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  title: { type: String },
  missionSteps: [
    {
      title: String,
      subtitle: String,
      isHidden: Boolean,
      imageUrls: Array,
      index: 0,
      missions: Array
    }
  ],
  willOpenAt: Date,
  coverImage: String,
  createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Curriculum", curriculumSchema);

// ref="MissionSteps"
