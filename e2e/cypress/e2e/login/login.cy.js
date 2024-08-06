import locLogin from '../../support/locators/login/locators-login.js'
import locDashboard from '../../support/locators/main-dashboard/locators-dashboard.js'
import Authenticate from '../../support/commands/login/login-logout.js'
import testDescription from './bdd-description/login.description.js'

describe('Login', { tags: '@login' }, () => {
  const credenciais = Cypress.env('login_cadastro')
  const loginUrl = `https://api.uat.aliare.digital/aliare-auth/Account/Login?ReturnUrl=`
  
  describe('Logout e Login', () => {
    it.only('Deve realizar logout', function () {
      
      cy.allureDescriptionHtml(testDescription.realizarLogout).allureSeverity('normal')

      Authenticate.logout()

      cy.url().should('include', loginUrl)
    })
  })

    it('Deve realizar login', function () {
      
      cy.allureDescriptionHtml(testDescription.realizarLogin).allureSeverity('normal')
      Authenticate.loginInterface(credenciais)

      cy.get(locDashboard.dashboard.titulo)
        .scrollIntoView().should('exist')
        .and('be.visible').and('have.text', 'Dashboard geral')
    })

})

