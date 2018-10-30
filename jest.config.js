module.exports = {
  browser: true,
  verbose: false,
  collectCoverage: true,
  collectCoverageFrom: ['src/app/**/*.js'],
  setupFiles: ['jest-localstorage-mock', 'jest-mock-console'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/app/$1',
    'Mocks(.*)$': '<rootDir>/test/mocks$1',
  },
};
