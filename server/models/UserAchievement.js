const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    achievement: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Achievement",
      required: true,
    },
    unlockedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);
schema.index({ user: 1, achievement: 1 }, { unique: true });
module.exports = mongoose.model("UserAchievement", schema);
