const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
    answers: [
      {
        question: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question",
          required: true,
        },
        selectedOption: { type: Number, default: null },
        isCorrect: { type: Boolean, default: false },
        marksAwarded: { type: Number, default: 0 },
      },
    ],
    score: { type: Number, default: 0 },
    totalMarks: { type: Number, required: true },
    percentage: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["inProgress", "completed", "abandoned"],
      default: "inProgress",
    },
    startedAt: { type: Date, default: Date.now },
    submittedAt: Date,
    timeTakenSeconds: { type: Number, default: 0 },
  },
  { timestamps: true },
);
module.exports = mongoose.model("QuizAttempt", schema);
