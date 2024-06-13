/// <reference types="cypress" />

import payLoadContaBancaria from '../../../../fixtures/financeiro/contas-bancarias/listagem/pay-load.json'
import seedTestListagem from '../../../../fixtures/financeiro/contas-bancarias/listagem/listagem.json'
import testDescription from './bdd-description/listagem.description.js'
import ContasBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var contaBancaria = Utils.getPayloadPorAmbiente(payLoadContaBancaria)

  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Listagem de Conta Bancária', () => {
      it('Deve cadastrar contas bancárias via API', function () {
        cy.log("Cadastro de conta corrente por API")
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaCorrente, 'login_cadastro')

        cy.log("Cadastro de Cartão de Crédito por API")
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.cartaoCredito, 'login_cadastro')

        cy.log("Cadastro de Conta Tesouraria por API")
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaTesouraria, 'login_cadastro')
      })

      it('Deve listar contas bancárias - Pesquisando por Nome', function () {
        // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.pesquisar)

        ContasBancaria.validarListagem(seedTestListagem.filtroPesquisar)
      })

      it('Deve listar contas bancárias - Sem aplicar Filtros', function () {
        // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.semFiltro)

        ContasBancaria.validarListagem(seedTestListagem.semFiltro)
      })

      it('Deve listar contas bancárias - Filtrando por Tipo de Conta', function () {
        // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.filtrarTipo)

        ContasBancaria.validarListagem(seedTestListagem.filtroConta)
      })

      it('Deve listar contas bancárias - Filtrando por Empresa', function () {
        // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.filtrarEmpresa)

        ContasBancaria.validarListagem(seedTestListagem.filtroEmpresa)
      })

      it('Deve listar contas bancárias - Filtrar por Status inativo', function () {
        // cy.allure().severity('normal').startStep('test content')
          //.descriptionHtml(testDescription.filtrarSituacao)

        cy.log('Inativando Conta Corrente')
        ContasBancaria.inativar(seedTestListagem.filtroStatus.inativarConta)

        cy.log('Filtrar por conta inativa')
        ContasBancaria.validarListagem(seedTestListagem.filtroStatus)
      })
    })
  })
})
