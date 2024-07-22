module.exports = {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2023,
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
    'new-cap': ['error', { newIsCap: true, capIsNew: false }], // Permite uso de funções maiúsculas sem new
    'space-before-blocks': ['error', 'always'], // Exige espaço antes de chaves
    'space-before-function-paren': ['error', {
      anonymous: 'always', // Exige espaço antes dos parênteses para funções anônimas
      named: 'never', // Não exige espaço antes dos parênteses para funções nomeadas
      asyncArrow: 'always', // Exige espaço antes dos parênteses para funções async arrow
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
