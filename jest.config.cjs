module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"]
  },

  moduleNameMapper: {
    "^(.*)\\.js$": "$1"
  },

  testPathIgnorePatterns: ["<rootDir>/dist/", "/_.+"],

  setupFilesAfterEnv: ["jest-extended/all"]
};
