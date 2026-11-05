const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    thumbnail: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
    duration: { type: Number, required: true },
    totalQuestions: { type: Number, default: 0 },
    totalMarks: { type: Number, default: 0 },
    passingMarks: { type: Number, default: 0 },
    attemptsAllowed: { type: Number, default: 0 },
    tags: [String],
    isPublished: { type: Boolean, default: false },
    isAIgenerated: { type: Boolean, default: false },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Quiz", schema);
