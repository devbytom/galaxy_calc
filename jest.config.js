module.exports = {
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/(build|config|node_modules)/'],
  transformIgnorePatterns: ['<rootDir>/(build|config|node_modules)/'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
};
