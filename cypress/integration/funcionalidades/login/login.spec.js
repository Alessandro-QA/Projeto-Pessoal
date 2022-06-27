import locLogin from '../../../support/locators/funcionalidades/login/locators-login'
import locDashboard from '../../../support/locators/funcionalidades/main-dashboard/locators-dashboard'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-descritpion/login.description.js'

describe('FUNCIONALIDADE > Login | Login e Logout na aplicação ', { tags: '@login' }, () => {
  const credenciais = Cypress.env('login_cadastro')

  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  afterEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  it('Deve realizar login', function () {
    cy.allure().severity('blocker').startStep('test content')
      .descriptionHtml(testDescription.realizarLogin)

    Authenticate.loginInterface(credenciais)

    cy.visit('/')
    cy.get(locDashboard.dashboard.titulo)
      .scrollIntoView().should('exist')
      .and('be.visible').and('have.text', 'Dashboard geral')
  })

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
