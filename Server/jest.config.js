export default {
  transform: {},
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)", "**/?(*.)+(spec|test).cjs"], // Add .cjs
  testPathIgnorePatterns: ["/node_modules/", "/test/setupTestDB.js"],
  };
