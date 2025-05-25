module.exports = {
    env: {
      browser: false,
      commonjs: true,
      es2021: true,
      node: true,
      jest: true
    },
    extends: [
      'standard'
    ],
    parserOptions: {
      ecmaVersion: 'latest'
    },
    rules: {
      'no-console': 'off', // Allow console.log for logging
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'never'],
      'space-before-function-paren': ['error', 'never'],
      'max-len': ['error', { 'code': 120 }]
    },
    overrides: [
      {
        files: ['tests/**/*.js', '**/*.test.js', '**/*.spec.js'],
        env: {
          jest: true
        },
        rules: {
          'no-unused-expressions': 'off'
        }
      }
    ]
  };