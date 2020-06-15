module.exports = {
  preset: 'ts-jest',
  rootDir: __dirname,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*spec.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/.git/',
    '<rootDir>/.github/',
    '<rootDir>/.vscode/',
    '<rootDir>/.circleci/'
  ]
}
