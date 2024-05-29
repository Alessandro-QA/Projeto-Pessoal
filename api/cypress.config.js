const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {

    setupNodeEvents: async function (on, config) {
      allureCypress(on, {
        resultsDir: "cypress/allure-results",
      });
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
  },
  video: false,
  watchForFileChanges: false,
})
