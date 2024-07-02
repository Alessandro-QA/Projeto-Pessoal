import './commands'
import 'cypress-plugin-api'
import "allure-cypress/commands"
import 'cypress-plugin-steps'
import "cypress-localstorage-commands"
import './allure'

const Authenticate = require('./commands/login/login-logout.js');
const email = Cypress.env('login_cadastro').email
const password = Cypress.env('login_cadastro').senha

// Logar somente uma vez em cada Teste e manter a Session ativada
before(() => {
  cy.getToken(email, password)
});

afterEach(() => {
  // Salva o estado do localStorage após cada teste
  cy.saveLocalStorage();
});

