import './commands'
import 'cypress-plugin-api'
import '@shelex/cypress-allure-plugin'
import 'cypress-plugin-steps'

const email = Cypress.env('email')
const password = Cypress.env('password')

beforeEach(() => {
    cy.getToken(email, password)
})