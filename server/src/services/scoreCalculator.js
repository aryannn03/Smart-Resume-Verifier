const { SKILLS } = require("../utils/constants");

const calculateScore = (resumeText, extractedSkills) => {
  let score = 0;

  // Skill match score (max 60)
  const skillScore = Math.min(extractedSkills.length * 4, 60);
  score += skillScore;

  // Resume completeness (max 25)
  let completenessScore = 0;
  const sections = ["education", "skills", "projects", "experience"];

  sections.forEach(section => {
    if (resumeText.toLowerCase().includes(section)) {
      completenessScore += 6;
    }
  });

  score += Math.min(completenessScore, 25);

  // Skill diversity (max 15)
  const diversityScore = extractedSkills.length >= 5 ? 15 : extractedSkills.length * 3;
  score += Math.min(diversityScore, 15);

  return Math.min(score, 100);
};

module.exports = calculateScore;
