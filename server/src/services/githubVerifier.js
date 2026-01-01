const fetchGitHubProfileData = require("./githubService");
const extractGitHubSkills = require("./githubSkillExtractor");
const matchGitHubSkills = require("./githubSkillMatcher");

const verifyGitHubProfile = async (githubUsername, resumeSkills) => {
  const repos = await fetchGitHubProfileData(githubUsername);
  const githubSkills = extractGitHubSkills(repos);

  const { matchedSkills, githubScore } =
    matchGitHubSkills(resumeSkills, githubSkills);

  return {
    githubSkills,
    matchedSkills,
    githubScore,
    verified: githubScore > 0
  };
};

module.exports = verifyGitHubProfile;
