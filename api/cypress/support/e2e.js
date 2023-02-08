import './commands'
import 'cypress-plugin-api'

const email = Cypress.env('email')
const password = Cypress.env('password')

beforeEach(() => {
    cy.getToken(email, password)
})