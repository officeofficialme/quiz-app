const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
    questionText: { type: String, required: true },
    questionImage: String,
    questionType: { type: String, enum: ["mcq", "trueFalse"], default: "mcq" },
    options: [String],
    correctOption: { type: Number, required: true },
    explanation: String,
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
    marks: { type: Number, default: 1 },
    order: { type: Number, required: true },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Question", schema);
