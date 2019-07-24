const jestConfig = {
  testEnvironment: 'node',
  modulePaths: ['src', '/node_modules/'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'coverage/junit' }]],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  collectCoverageFrom: ['src/**/*.js']
};

module.exports = jestConfig;
