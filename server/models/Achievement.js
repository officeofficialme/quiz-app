const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: String,
    category: {
      type: String,
      enum: ["quiz", "score", "streak", "participation"],
      required: true,
    },
    requirement: { type: Number, required: true },
    points: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Achievement", schema);
