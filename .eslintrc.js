module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'airbnb', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // plugins: ['jest'],
  rules: {
    // 'jest/no-disabled-tests': 'warn',
    // 'jest/no-focused-tests': 'error',
    // 'jest/no-identical-title': 'error',
    // 'jest/prefer-to-have-length': 'warn',
    // 'jest/valid-expect': 'error',
  },
};
