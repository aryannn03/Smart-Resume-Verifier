const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
  {
    fileName: String,
    rawText: String,
    extractedSkills: [String],
    credibilityScore: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", ResumeSchema);
