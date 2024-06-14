import './commands'
import 'cypress-plugin-api'
import "allure-cypress/commands";
import 'cypress-plugin-steps'

const email = Cypress.env('email')
const password = Cypress.env('password')

// Logar somente uma vez em cada Teste e manter a Session ativada
before(() => {  
        cy.getToken(email, password)
});