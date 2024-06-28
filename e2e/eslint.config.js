module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 6,
    },
    globals: {
      browser: true,
      node: true,
      es6: true,
    },
  },
  plugins: {
    json: {}, // Configuração do plugin "json"
    cypress: {}, // Configuração do plugin "cypress"
  },
  rules: {
    'new-cap': ['error', { newIsCap: true }],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
  },
  ignores: [
    'node_modules/**',
    '**/*.sql',
    '.nyc_output/*',
    'coverage/*',
    '**/*.png',
    '**/*.ofx',
    // Outras exclusões que você tinha no .eslintignore
  ],
};
