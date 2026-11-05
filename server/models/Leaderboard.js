const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    totalQuizzes: { type: Number, default: 0 },
    totalScore: { type: Number, default: 0 },
    averagePercentage: { type: Number, default: 0 },
    bestScore: { type: Number, default: 0 },
    totalPoints: { type: Number, default: 0 },
    currentStreak: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Leaderboard", schema);
