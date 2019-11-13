const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    coverImageUrl: { type: String, required: true },
    willOpenAt: Date,
    dueDate: Date,
    score: Number,
    reservationCount: { type: Number, default: 0 },
    wishlistedCount: { type: Number, default: 0 },
    // denormalizedPackage:
    // packageIds: [{ type: Schema.Types.ObjectId, ref="Package" }],
    defaultPackageId: String,
    curriculum: { type: Schema.Types.ObjectId, ref: "Curriculum" },
    categoryId: { type: Schema.Types.ObjectId },
    feedbackCount: { type: Number, default: 0 },
    feedbackGoodCount: { type: Number, default: 0 },
    ownerUser: { type: Schema.Types.ObjectId },
    fundedAt: Date,
    recommendations: [{ type: String }],
    packageDescription: { type: String },
    difficulty: { type: String },
    description: { type: String },
    satisfactionRate: Number,
    summary: String,
    qnas: [{ question: { type: String }, answer: { type: String } }],
    skills: [{ type: String }],
    interviews: [
      {
        question: { type: String },
        answer: { type: String },
        photoUrl: String
      }
    ],
    note: String,
    signature: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
