const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const path = require('path');

// Resolvendo o caminho absoluto para config.json - Passando a pasta diretamente não estava aceitando
const configPath = path.resolve(__dirname, 'cypress', 'config-files', 'config.json');
const config = require(configPath);

module.exports = defineConfig({
  e2e: {

    setupNodeEvents: async function (on, config) {
      allureCypress(on, {
        resultsDir: "cypress/allure-results",
      });
      return config;
    },
    trashAssetsBeforeRuns: true
  },
  env: {
    ...config // Adiciona todas as variáveis do config.json ao objeto env
  },
  video: false,
  watchForFileChanges: false
})
