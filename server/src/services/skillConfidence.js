const getSkillConfidence = (resumeText, skills) => {
  const text = resumeText.toLowerCase();
  const confidenceMap = {};

  skills.forEach(skill => {
    const regex = new RegExp(`\\b${skill}\\b`, "g");
    const matches = text.match(regex);
    const count = matches ? matches.length : 0;

    if (count >= 3) {
      confidenceMap[skill] = "strong";
    } else if (count === 2) {
      confidenceMap[skill] = "medium";
    } else {
      confidenceMap[skill] = "weak";
    }
  });

  return confidenceMap;
};

module.exports = getSkillConfidence;
