import './commands'
import 'cypress-plugin-api'
import "allure-cypress/commands";
import 'cypress-plugin-steps'

const email = Cypress.env('email')
const password = Cypress.env('password')

/*beforeEach(() => {
    cy.getToken(email, password)
}) */