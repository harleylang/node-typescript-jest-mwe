import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: 'node',
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}",
      "!<rootDir>/node_modules/",
    ],
    modulePathIgnorePatterns: ["data.test.ts"],
    coverageThreshold: {
      global: {
        lines: 90,
        statements: 90
      }
    },
    moduleNameMapper: {
      "@exmpl/(.*)": "<rootDir>/src/$1"
    },
    moduleDirectories: ["node_modules", "src"],
};

export default config;