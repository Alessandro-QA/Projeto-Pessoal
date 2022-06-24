/// <reference types="cypress" />

import locLogin from '../../../locators/funcionalidades/login/locators-login'

class Authenticate {
  /**
   * Realiza login programatico na aplicacao por API/Cookies
   * @param {*} credenciais
  */
  login(credenciais) {
    cy.clearCookies()
    cy.clearLocalStorage()

    const loginUrl = `${Cypress.env('authUrl')}/Account/Login?ReturnUrl=`
    const returnUrl = Cypress.env('returnURL')

    cy.request('GET', `${loginUrl + returnUrl}`).then(response => {
      const htmlDocument = document.createElement('html')
      htmlDocument.innerHTML = response.body
      const loginForm = htmlDocument.getElementsByTagName('form')[0]
      const requestVerificationToken = loginForm.elements.__RequestVerificationToken.value

      cy.request({
        method: 'POST',
        url: `${Cypress.env('authUrl')}/Account/Login?client_id=my-farm-clientapp`,
        headers: {
          'authority': 'auth.dev.conexa.com.br',
          'content-type': 'application/x-www-form-urlencoded',
          'origin': Cypress.env('authUrl'),
          'referer': `${loginUrl + returnUrl}`
        },
        body: {
          ReturnUrl: returnUrl,
          client_id: 'my-farm-clientapp',
          Email: credenciais.email,
          Password: credenciais.senha,
          __RequestVerificationToken: requestVerificationToken,
          RememberMe: false
        }
      })
    })
  }

  /**
   * Realizar login na aplicacao por interface
   * @param {*} credenciais
  */
  loginInterface(credenciais) {
    cy.visit('/')

    cy.get(locLogin.login.iptEmail)
      .scrollIntoView().should('exist')
      .and('be.visible').type(credenciais.email, { log: false })

    cy.get(locLogin.login.iptSenha)
      .scrollIntoView().should('exist')
      .and('be.visible').type(credenciais.senha, { log: false })

    cy.get(locLogin.login.btnLogin)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locLogin.login.btnLogin)
      .should('not.exist')

    cy.get(locLogin.login.titulo)
      .should('exist').and('be.visible')
  }

  /**
   * Realiza logout na aplicacao por interface
   * @param {*}
  */
  logout() {
    cy.get(locLogin.login.btnDrop)
      .scrollIntoView().should('exist')
      .and('be.visible').click()

    cy.get(locLogin.login.btnSair)
      .scrollIntoView().should('exist')
      .and('be.visible').and('contain', 'Sair').click()

    cy.reload()
  }
}

export default new Authenticate()
