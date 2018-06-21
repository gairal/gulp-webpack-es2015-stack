module.exports = {
  browser: true,
  verbose: false,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/js/**/*.js',
  ],
  setupFiles: [
    'jest-localstorage-mock',
    'jest-mock-console',
  ],
};
