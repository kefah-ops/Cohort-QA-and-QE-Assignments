module.exports = {
  preset: 'ts-jest',       // Use ts-jest to transform TypeScript files
  testEnvironment: 'node', // Set the environment for Node.js tests
  roots: ['<rootDir>/src', '<rootDir>/test'],  // Specify the root directories for Jest to search for tests
  moduleFileExtensions: ['ts', 'js', 'json'],  // File extensions Jest should process
  transform: {
    '^.+\\.ts$': 'ts-jest',  // Use ts-jest to transform .ts files
  },
};
