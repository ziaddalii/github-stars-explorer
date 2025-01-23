export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",

  transform: {
    // "^.+\\.(ts|tsx)?$": "ts-jest",
    // "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"

  },
  globals: { babelConfig: true, useESM: true },
  roots: ["<rootDir>/src"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  resetMocks: false,
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "png"],
  modulePaths: ["<rootDir>/src"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],
};
