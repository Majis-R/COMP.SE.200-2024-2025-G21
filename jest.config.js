module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testEnvironment: 'node'
};