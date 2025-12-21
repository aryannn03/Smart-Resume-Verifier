const Resume = require("../models/Resume");
const parseResume = require("../services/resumeParser");
const extractSkills = require("../nlp/skillExtractor");
const fs = require("fs");

exports.uploadResume = async (req, res) => {
  try {
    const filePath = req.file.path;

    // 1. Parse resume
    const text = await parseResume(filePath);

    // 2. Extract skills
    const skills = extractSkills(text);

    // 3. Save to DB
    const resume = await Resume.create({
      fileName: req.file.originalname,
      rawText: text,
      extractedSkills: skills
    });

    // 4. DELETE uploaded file 
    fs.unlinkSync(filePath);

    res.status(201).json({
      success: true,
      resumeId: resume._id,
      message: "Resume uploaded, parsed, and cleaned"
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
