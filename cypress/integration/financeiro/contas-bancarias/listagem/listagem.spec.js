/// <reference types="cypress" />

import payLoadContaBancaria from '../../../../fixtures/funcionalidades/financeiro/contas-bancarias/listagem/pay-load.json'
import seedTestListagem from '../../../../fixtures/funcionalidades/financeiro/contas-bancarias/listagem/listagem.json'
import testDescription from './bdd-description/listagem.description.js'
import ContasBancaria from '../../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

context('Funcionalidade', () => {
  describe('Contas Bancárias | Listagem', { tags: '@contasBancarias' }, () => {
    var contaBancaria = Utils.getPayloadPorAmbiente(payLoadContaBancaria)

    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Cadastro de contas bancarias via API', ()=> {
      it('Cadastro de conta bancaria', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaCorrente, 'login_cadastro')
      })

      it('Cadastro de cartão de crédito', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.cartaoCredito, 'login_cadastro')
      })

      it('Cadastro de conta Tesouraria', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/ContaBancaria', contaBancaria.contaTesouraria, 'login_cadastro')
      })
    })

    context('Listagem de Contas Bancárias', () => {
      it('Sem aplicar Filtros', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.semFiltro)

        ContasBancaria.validarListagem(seedTestListagem.semFiltro)
      })

      it('Filtrar por tipo de Conta', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtrarTipo)

        ContasBancaria.validarListagem(seedTestListagem.filtroConta)
      })

      it('Filtrar por empresa', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtrarEmpresa)

        ContasBancaria.validarListagem(seedTestListagem.filtroEmpresa)
      })

      it('Pesquisar Conta Bancária', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.pesquisar)

        ContasBancaria.validarListagem(seedTestListagem.filtroPesquisar)
      })
    })

    context('Inativar Conta Bancaria e validar Inativação', () => {
      it('Inativar Conta Bancaria', function () {
        ContasBancaria.cadastroEditar(seedTestListagem.filtroStatus.inativarConta)
      })
      
      it('Filtrar por status', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtrarSituacao)

        ContasBancaria.validarListagem(seedTestListagem.filtroStatus)
      })
    })
  })
})
