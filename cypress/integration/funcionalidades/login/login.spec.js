import locLogin from '../../../support/locators/funcionalidades/login/locators-login'
import locDashboard from '../../../support/locators/funcionalidades/main-dashboard/locators-dashboard'

describe('FUNCIONALIDADE | Login - ', { tags: '@login' }, () => {
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

    cy.login(credenciais)

    cy.get(locDashboard.dashboard.titulo)
      .scrollIntoView().should('exist')
      .and('be.visible').and('have.text', 'Dashboard geral')
  })

  it('Deve realizar logout', function () {
    cy.allure().severity('normal').startStep('test content')

    cy.logout()

    cy.get(locLogin.login.btnSair)
      .should('not.exist')
    cy.get(locLogin.login.btnLogin)
      .scrollIntoView().should('exist')
      .and('be.visible')
  })
})
