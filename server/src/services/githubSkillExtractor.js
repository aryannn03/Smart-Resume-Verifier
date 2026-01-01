const { SKILLS } = require("../utils/constants");

const extractGitHubSkills = (repos) => {
  const foundSkills = new Set();

  repos.forEach(repo => {
    if (repo.language) {
      const lang = repo.language.toLowerCase();
      if (SKILLS.includes(lang)) {
        foundSkills.add(lang);
      }
    }

    const textBlob = `${repo.name} ${repo.description || ""}`.toLowerCase();

    SKILLS.forEach(skill => {
      if (textBlob.includes(skill)) {
        foundSkills.add(skill);
      }
    });
  });

  return Array.from(foundSkills);
};

module.exports = extractGitHubSkills;
