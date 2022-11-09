/// <reference types="cypress" />

import payLoadDocumentos from '../../../../fixtures/financeiro/contas-bancarias/listagem-lancamentos-cartao/pay-load-documentos.json'
import seedTestLancamentoCartao from '../../../../fixtures/financeiro/contas-bancarias/listagem-lancamentos-cartao/lançamentos.json'
import testDescription from './bdd-description/lancamentos-cartao.description.js'
import ContasBancarias from '../../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var documento = Utils.getPayloadPorAmbiente(payLoadDocumentos)

  var dataAtual = Utils.getDate()

  var documentoPago = Utils.replacer('dataSubstituicao', dataAtual, documento.documentoPago)
  var documentoRecebido = Utils.replacer('dataSubstituicao', dataAtual, documento.documentoRecebido)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Listagem de Cartão de Crédito', () => {
      it('Deve cadastrar documentos via API', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', documentoPago, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', documentoRecebido, 'login_cenarios')
      })

      it('Deve validar lançamentos no cartão - Sem filtro', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.semFiltro)

        ContasBancarias.validarListagem(seedTestLancamentoCartao.semFiltro)
      })

      it('Deve validar lançamentos no cartão - Filtrando por período', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.filtrarPeriodo)

        ContasBancarias.validarListagem(seedTestLancamentoCartao.filtrarPeriodo)
      })
    })
  })
})
