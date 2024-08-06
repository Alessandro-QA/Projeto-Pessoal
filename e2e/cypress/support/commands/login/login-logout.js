/// <reference types="cypress" />

const locLogin = require('../../locators/login/locators-login.js');

class Authenticate {
  /**
   * Realiza login programatico na aplicacao por API/Cookies
   * @param {*} credenciais
  */
  login(credenciais) {

    const loginUrl = `https://api.uat.aliare.digital/aliare-auth/Account/Login?ReturnUrl=`
    const returnUrl = Cypress.env('returnURL')
    let requestVerificationToken
    cy.request('GET', `${loginUrl + returnUrl}`).then(response => {
      const htmlDocument = document.createElement('html')
      htmlDocument.innerHTML = response.body
      const loginForm = htmlDocument.getElementsByTagName('form')[0]
      requestVerificationToken = loginForm.elements.__RequestVerificationToken.value
    })

    cy.request({
      method: 'POST',
      url: 'https://api.uat.aliare.digital/aliare-auth/connect/token',
      headers: {
        // 'authorization': 'Basic Y2NkZXZjbGllbnQ6MTdjNGZkYTUtYzUxOC00OTg1LTgzMmQtYmY4NWQxZmYxNGQ1',
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: {
        // scope: "tenant i18n fazenda bemocorrencia atividade atividadeagricola bem cicloproducao controleclimatico cultura estoque formapagamento material notafiscal operacao pedidocompra pessoa planejamentosafra planocontas safra unidadearmazenamento unidademedida eexport subscription parametrotributario permission product webhookvindi contabancaria financeiro instituicaofinanceira localidade producaoagricola notification assinei webhook marketingcampaign nfedistribuicao aliare agriq onboarding profile openid indexadormoeda agriq openbanking",
        grant_type: "password",
        username: credenciais.email,
        password: credenciais.senha,
        client_id: 'my-farm-clientapp-dev',
        __RequestVerificationToken: requestVerificationToken,
        ReturnUrl: returnUrl
      }
    }).then((response) => {
      Cypress.env('access_token', response.body.access_token)
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

    cy.visit(`${Cypress.env('baseUrl')}`)

    cy.intercept('GET', '/api/settings').as('settings')

    cy.wait('@settings', { timeout: 30000 });

    cy.get(locLogin.login.btnDrop, { timeout: 30000 })
      .should('exist')
      .and('be.visible')
      .click()

    cy.get(locLogin.login.btnSair)
      .should('exist')
      .and('be.visible').contains('Sair').click()

  }
}

export default new Authenticate()
