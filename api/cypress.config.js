const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: 'https://myfarm.dev.conexa.com.br/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    email: 'apiTest_myfarm@hubconexa.com',
    password: 'teste@123',
    tenant: '273276e0-7cc1-4891-94de-55e9ced2aad2'
  },
})
