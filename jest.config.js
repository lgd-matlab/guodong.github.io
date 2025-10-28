module.exports = {
  // Test environment
  testEnvironment: 'jsdom',

  // Test file patterns
  testMatch: [
    '**/__tests__/**/*.(js|jsx)',
    '**/*.(test|spec).(js|jsx)',
    'src/**/__tests__/**/*.(js|jsx)',
  ],

  // Module file extensions
  moduleFileExtensions: ['js', 'jsx', 'json'],

  // Transform patterns
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // Module name mapper for CSS Modules and assets
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|jpe?g|png|svg|webp|avif)$': '<rootDir>/__mocks__/fileMock.js',
  },

  // Setup files
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

  // Coverage configuration
  collectCoverage: false, // Set to true for coverage reports
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/**/*.spec.{js,jsx}',
    '!src/setupTests.js',
    '!src/components/index.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  // Mock configurations
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,

  // Performance
  maxWorkers: '50%',

  // Verbose output
  verbose: false,

  // Transform ignore patterns
  transformIgnorePatterns: [
    'node_modules/(?!(react-query|@tanstack/react-query)/)',
  ],

  // Global variables
  globals: {
    'process.env.NODE_ENV': 'test',
  },

  // Test timeout
  testTimeout: 10000,

  // Reporter configuration
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test-results',
        outputName: 'junit.xml',
      },
    ],
  ],

  // Watch mode configuration
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};