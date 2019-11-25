const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    fireStoreId: { type: String },
    title: { type: String, required: true, unique: true },
    topic: { type: String, required: true },
    coverImageUrl: { type: String },
    willOpenAt: Date,
    dueDate: Date,
    score: Number,
    isPublished: { type: Boolean, default: false },
    reservationCount: { type: Number, default: 0 },
    wishlistedCount: { type: Number, default: 0 },
    denormalizedPackage: [
        {
            kitItemOptionGroupStands: Array,
            kitItemStands: Array,
            klassItemStands: Array,
            name: String,
            photoUrl: String,
            shippingSchedule: String
        }
    ],
    curriculum: { type: Schema.Types.ObjectId, ref: "Curriculum" },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    feedbackCount: { type: Number, default: 0 },
    feedbackGoodCount: { type: Number, default: 0 },
    ownerUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
    recommendations: [{ type: String }],
    packageDescription: { type: String },
    difficulty: { type: String },
    description: { type: String },
    satisfactionRate: Number,
    summary: String,
    qnas: [{ question: { type: String }, answer: { type: String } }],
    skills: [{ title: String, content: String, photoUrl: String }],
    interviews: [
        {
            question: { type: String },
            answer: { type: String },
            photoUrl: String
        }
    ],
    note: String,
    signature: { type: Boolean, default: false },
    students: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Product", productSchema);
