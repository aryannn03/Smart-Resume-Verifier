const matchGitHubSkills = (resumeSkills, githubSkills) => {
  const matched = resumeSkills.filter(skill =>
    githubSkills.includes(skill)
  );

  const score =
    resumeSkills.length === 0
      ? 0
      : Math.round((matched.length / resumeSkills.length) * 100);

  return {
    matchedSkills: matched,
    githubScore: score
  };
};

module.exports = matchGitHubSkills;
