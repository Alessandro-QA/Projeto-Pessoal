/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/financeiro/movimentaca-bancaria/detalhes/documento.json'
import seedTestDetalhes from '../../../../fixtures/financeiro/movimentaca-bancaria/detalhes/detalhes-movimentacao.json'
import testDescription from './bdd-description/detalhes-movimentacao.description.js'
import { detalhes } from '../../../../support/commands/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

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
    context('Detalhes', () => {
      context('Validar os detalhes da Movimentação Bancária', () => {
        it('Deve cadastrar documentos pagos por API', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', documento.documentoPagamento, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', documento.documentoRecebimento, 'login_cenarios')
        })

        it('Deve validar os detalhes da Movimentação Bancária - Pagamento', function () {
          // cy.allure().severity('normal').startStep('test contet')
            .descriptionHtml(testDescription.detalhes)

          detalhes(seedTestDetalhes.detalhesPagamento)
        })

        it('Deve validar os detalhes da Movimentação Bancária - Recebimento', function () {
          // cy.allure().severity('normal').startStep('test contet')
            .descriptionHtml(testDescription.detalhes)

          detalhes(seedTestDetalhes.detalhesRecebimento)
        })
      })
    })
  })
})
