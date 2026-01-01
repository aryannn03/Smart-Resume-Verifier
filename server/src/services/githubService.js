const axios = require("axios");

const fetchGitHubProfileData = async (username) => {
  const baseURL = "https://api.github.com";

  const reposResponse = await axios.get(
    `${baseURL}/users/${username}/repos`,
    {
      headers: {
        Accept: "application/vnd.github+json"
      }
    }
  );

  return reposResponse.data;
};

module.exports = fetchGitHubProfileData;
