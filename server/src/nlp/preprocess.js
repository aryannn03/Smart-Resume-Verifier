const sw = require("stopword");

const preprocessText = (text) => {
  if (!text) return [];

  // convert to lowercase
  let cleaned = text.toLowerCase();

  // remove special characters & numbers
  cleaned = cleaned.replace(/[^a-z\s]/g, " ");

  // tokenize
  let tokens = cleaned.split(/\s+/);

  // remove stopwords
  tokens = sw.removeStopwords(tokens);

  // remove very small words
  tokens = tokens.filter(word => word.length > 2);

  return tokens;
};

module.exports = preprocessText;
