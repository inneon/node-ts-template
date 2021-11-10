module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  modulePathIgnorePatterns: ['lib'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/integration/*.spec.ts'],
  setupFiles: ['./src/tests/jest.overrides.ts'],
  preset: 'ts-jest',
}
