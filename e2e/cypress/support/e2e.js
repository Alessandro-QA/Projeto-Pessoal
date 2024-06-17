import './commands'
import 'cypress-plugin-api'
import "allure-cypress/commands"
import 'cypress-plugin-steps'
import "cypress-localstorage-commands"
import './allure'

const Authenticate = require('./commands/login/login-logout.js');

// Logar somente uma vez em cada Teste e manter a Session ativada
beforeEach(() => {
    const credenciais = Cypress.env('login_cadastro');
    cy.restoreLocalStorage();  // Restaura o estado do localStorage antes de cada teste
    cy.session(credenciais, () => {
      Authenticate.login(credenciais);
    });
    
});

afterEach(() => {
  // Salva o estado do localStorage após cada teste
  cy.saveLocalStorage();
});

