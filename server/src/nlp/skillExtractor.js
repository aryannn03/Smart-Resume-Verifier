const preprocessText = require("./preprocess");
const { SKILLS } = require("../utils/constants");

const extractSkills = (text) => {
  const tokens = preprocessText(text);
  const tokenSet = new Set(tokens);

  const extractedSkills = [];

  SKILLS.forEach(skill => {
    const skillTokens = skill.split(" ");
    const isPresent = skillTokens.every(t => tokenSet.has(t));

    if (isPresent) {
      extractedSkills.push(skill);
    }
  });

  return extractedSkills;
};

module.exports = extractSkills;
