export default {
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/Testing/setupTests.js"], // Add this line
};