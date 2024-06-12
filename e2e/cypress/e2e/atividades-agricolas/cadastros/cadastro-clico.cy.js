/// <reference types="cypress" />

const seedTestCiclo = require('../../../fixtures/atividades-agricolas/cadastros/fixture-ciclo.json');
const Ciclo = require('../../../support/commands/atividades-agricolas/cadastros/ciclo/ciclo.js');
const Authenticate = require('../../../support/commands/login/login-logout.js');
const testDescription = require('./bdd-description/ciclo.description.js');



describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {

  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
})

after(() => {
    Authenticate.logout()
}) 

  describe('Cadastros', { tags: '@cadastro' }, () => {
    context('Ciclo', () => {
      // Teste de cadastro de um novo ciclo de milho
      it.only('Deve cadastrar um ciclo de milho', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.ciclo)

        Ciclo.cadastrar(seedTestCiclo)
      })

      // Validação da Dashboard de ciclo
      it('Deve validar a Dashboard de ciclo', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.ciclo)

        Ciclo.validarDashboard(seedTestCiclo)
      })

      it('Deve validar a Dashboard de ciclo', { retries: { runMode: 1, openMode: 1, }, }, function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.ciclo)
        cy.visit('https://myfarm.dev.conexa.com.br/')
        cy.wait(10000)
      })
    })
  })
})

