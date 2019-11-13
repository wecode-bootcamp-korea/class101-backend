const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const missionStepSchema = new Schema({
  imageUrls: String,
  index: { type: Number, required: true },
  subtitle: { type: String, required: true },
  missions: [{
      _id: Schema.Types.ObjectId,
      title: { type: String, required: true },
      episode: { type: Number, required: true },
      isFree: { type: Boolean, required: true },
      curriculumId: { type: Schema.Types.ObjectId, ref="Curriculums"},
      paragraphSection: { type: String, required: true },
      willOpenAt: { type: Date, required: true }
    }]
})

module.exports = mongoose.model("MisstionStep", missionStepSchema);