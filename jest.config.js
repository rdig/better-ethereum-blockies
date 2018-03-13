module.exports = {
  rootDir: 'src',
  collectCoverageFrom: [
    '*.{js}',
    '!index.js',
    '!flowtypes.js',
  ],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      branches: 80,
    },
  },
};
