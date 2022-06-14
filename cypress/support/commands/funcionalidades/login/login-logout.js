/// <reference types="cypress" />

import locLogin from '../../../locators/funcionalidades/login/locators-login'

// Funcao command que recebe json com os dados do login e realiza login na aplicacao
Cypress.Commands.add('login', (credenciais) => {
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

  cy.get('.cnx-page-header__container--title')
    .should('exist').and('be.visible')
})

// Funcao command que realiza logout na aplicacao
Cypress.Commands.add('logout', () => {
  cy.get(locLogin.login.btnDrop)
    .scrollIntoView().should('exist')
    .and('be.visible').click()

  cy.get(locLogin.login.btnSair)
    .scrollIntoView().should('exist')
    .and('be.visible').and('contain', 'Sair').click()

  cy.reload()
})

// Envia um request para a pagina de login para obter o token/cookie CSRF (RequestVerificationToken)
Cypress.Commands.add('setCookies', function () {
  cy.request('GET', locLogin.login.urlLogin).then(response => {
    // Faz parse do html response para pegar o token CSRF
    const htmlDocument = document.createElement('html')
    htmlDocument.innerHTML = response.body
    const loginForm = htmlDocument.getElementsByTagName('form')[0]
    const requestVerificationToken = loginForm.elements.__RequestVerificationToken.value

    // Envia uma request para o IdentityServer para definir os cookies de sessao
    cy.fixture('environments-api').as('ENV').then(() => {
      cy.request({
        method: 'POST',
        url: this.ENV.authBaseUrl + this.ENV.accountLogin,
        followRedirect: false,
        form: true,
        body: {
          ReturnUrl: this.ENV.returnUrl,
          client_id: this.ENV.clientId,
          Email: this.ENV.username,
          Password: this.ENV.password,
          __RequestVerificationToken: requestVerificationToken
        }
      }).its('headers.set-cookie').should('not.be.empty')
    })
  })
})
