import locLogin from '../../support/locators/login/locators-login'
import locDashboard from '../../support/locators/main-dashboard/locators-dashboard'
import Authenticate from '../../support/commands/login/login-logout.js'
import testDescription from './bdd-description/login.description.js'

describe('Login', { tags: '@login' }, () => {
  const credenciais = Cypress.env('login_cadastro')

  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  afterEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  describe('Login', () => {
    it('Deve realizar login', function () {
      cy.allure().severity('blocker').startStep('test content')
        .descriptionHtml(testDescription.realizarLogin)

      Authenticate.loginInterface(credenciais)

      cy.visit('/')
      cy.get(locDashboard.dashboard.titulo)
        .scrollIntoView().should('exist')
        .and('be.visible').and('have.text', 'Dashboard geral')
    })
  })

  describe('Logout', () => {
    it('Deve realizar logout', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.realizarLogout)

      Authenticate.logout()

      cy.get(locLogin.login.btnSair)
        .should('not.exist')
      cy.get(locLogin.login.btnLogin)
        .scrollIntoView().should('exist')
        .and('be.visible')
    })
  })
})

