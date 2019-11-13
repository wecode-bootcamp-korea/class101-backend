const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const curriculumSchema = new Schema({
  title: { type: String, required: true },
  missionSteps: [{ type: Schema.Types.ObjectId, ref="MissionSteps" }],
  willOpenAt: { type: Date, required: true }
});

module.exports = mongoose.model("Curriculum", curriculumSchema);