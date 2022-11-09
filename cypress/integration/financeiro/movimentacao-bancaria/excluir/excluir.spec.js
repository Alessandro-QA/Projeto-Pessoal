/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/financeiro/movimentaca-bancaria/detalhes/documento.json'
import seedTestExcluir from '../../../../fixtures/financeiro/movimentaca-bancaria/excluir/excluir.json'
import testDescription from './bdd-description/excluir.description.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import { excluir, validarExclusao } from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Movimentações Bancárias', { tags: '@movimentacoesBancarias' }, () => {
    context('Exclusão', () => {
      context('Excluir Movimentação Bancária - Do tipo Pagamento', () => {
        it('Deve cadastrar documento já pago por API', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', documento.documentoPagamento, 'login_cenarios')
        })

        it('Deve excluir Movimentação Bancária', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.excluir)

          excluir(seedTestExcluir.excluirPagamento)
        })

        it('Deve validar exclusão da Movimentação Bancária', function () {
          validarExclusao(seedTestExcluir.excluirPagamento)
        })
      })

      context('Excluir Movimentação Bancária - Do tipo Recebimento', () => {
        it('Deve cadastrar documento já recebido por API', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', documento.documentoRecebimento, 'login_cenarios')
        })

        it('Deve excluir Movimentação Bancária', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.excluir)

          excluir(seedTestExcluir.excluirRecebimento)
        })

        it('Deve validar exclusão da Movimentação Bancária', function () {
          validarExclusao(seedTestExcluir.excluirRecebimento)
        })
      })
    })
  })
})
