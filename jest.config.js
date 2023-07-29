module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"]
  },

  testPathIgnorePatterns: ["/_.+"],

  setupFilesAfterEnv: ["jest-extended/all"]
};
