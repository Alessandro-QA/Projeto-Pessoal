import locLogin from '../../support/locators/login/locators-login.js'
import locDashboard from '../../support/locators/main-dashboard/locators-dashboard.js'
import Authenticate from '../../support/commands/login/login-logout.js'
import testDescription from './bdd-description/login.description.js'

describe('Login', { tags: '@login' }, () => {
  const credenciais = Cypress.env('login_cadastro')
  const loginUrl = `https://api.uat.aliare.digital/aliare-auth/Account/Login?ReturnUrl=`

  describe('Logout e Login', () => {
    it('Deve realizar logout', { retries: { runMode: 3, openMode: 3, }, }, function () {

      cy.allureDescriptionHtml(testDescription.realizarLogout).allureSeverity('normal')

      Authenticate.logout()

      cy.url().should('include', loginUrl)
    })

    it('Deve realizar login', function () {

      cy.allureDescriptionHtml(testDescription.realizarLogin).allureSeverity('normal')
      Authenticate.loginInterface(credenciais, loginUrl)

      cy.intercept('GET', '/api/settings').as('settings')

      cy.get(locDashboard.dashboard.titulo, { timeout: 90000 })
        .scrollIntoView().should('exist')
        .and('be.visible').and('have.text', 'Dashboard geral')
    })
  })
})