const Resume = require("../models/Resume");
const parseResume = require("../services/resumeParser");
const extractSkills = require("../nlp/skillExtractor");
const fs = require("fs");
const calculateScore = require("../services/scoreCalculator");
const getSkillConfidence = require("../services/skillConfidence");



exports.uploadResume = async (req, res) => {
  try {
    const filePath = req.file.path;

    const text = await parseResume(filePath);
    const skills = extractSkills(text);
    const score = calculateScore(text, skills);
    const skillConfidence = getSkillConfidence(text, skills);

    const resume = await Resume.create({
      user: req.user.userId,
      fileName: req.file.originalname,
      rawText: text,
      extractedSkills: skills,
      skillConfidence,
      credibilityScore: score
    });

    // delete uploaded PDF
    fs.unlinkSync(filePath);

    res.status(201).json({
      success: true,
      resumeId: resume._id,
      message: "Resume uploaded and processed successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
exports.getMyResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.userId })
      .sort({ createdAt: -1 })
      .select("-rawText"); 

    res.status(200).json({
      success: true,
      count: resumes.length,
      resumes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
