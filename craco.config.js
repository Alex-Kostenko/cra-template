const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@ui': path.resolve(__dirname, 'src/components'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '@ui': '<rootDir>/src/components',
        '@/(.+)': '<rootDir>/src/$1',
      },
    },
  },
};
