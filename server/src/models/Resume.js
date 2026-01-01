const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    fileName: {
      type: String,
      required: true
    },
    rawText: {
      type: String,
      required: true
    },
    extractedSkills: {
      type: [String],
      default: []
    },
    skillConfidence: {
      type: Object,
      default: {}
    },
    credibilityScore: {
      type: Number,
      default: 0
    },
    githubVerified: {
    type: Boolean,
    default: false
    },
    githubScore: {
    type: Number,
    default: 0
    },
    githubMatchedSkills: {
    type: [String],
    default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", ResumeSchema);
