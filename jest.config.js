module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    // "^.+\\.svg$": "jest-svg-transformer"
    "\\.svg$": "<rootDir>/__mocks__/svgTransform.js"
  }
}
