const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {

    setupNodeEvents: async function (on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://myfarm.dev.conexa.com.br',
    trashAssetsBeforeRuns: true,
    experimentalSessionAndOrigin: true
  },
  env: {
    email: 'apiTest_myfarm@hubconexa.com',
    password: 'teste@123',
    tenant: '273276e0-7cc1-4891-94de-55e9ced2aad2',
    allure: true,
    allureResultsPath: 'cypress/allure-results/api'
  },
  video: false,
  watchForFileChanges: false,
})
