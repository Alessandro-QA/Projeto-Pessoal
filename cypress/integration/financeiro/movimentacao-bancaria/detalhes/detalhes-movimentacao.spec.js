/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/detalhes/documento.json'
import seedTestDetalhes from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/detalhes/detalhes-movimentacao.json'
import testDescription from './bdd-description/detalhes-movimentacao.description.js'
import { detalhes } from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Movimentação Bancaria | Detalhes da movimentação bancaria', { tags: '@movimentacaoBancaria' }, () => {
    var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Cadastro do documento ja pago', () => {
      it('Via API', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', documento.documentoPagamento, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', documento.documentoRecebimento, 'login_cenarios')
      })
    })

    context('Validar os detalhes da movimentação bancaria', () => {
      it('Selecionar movimentacao do tipo pagamento e validar detalhes', function () {
        cy.allure().severity('normal').startStep('test contet')
          .descriptionHtml(testDescription.detalhes)

        detalhes(seedTestDetalhes.detalhesPagamento)
      })

      it('Selecionar movimentacao do tipo recebimento e validar detalhes', function () {
        cy.allure().severity('normal').startStep('test contet')
          .descriptionHtml(testDescription.detalhes)

        detalhes(seedTestDetalhes.detalhesRecebimento)
      })
    })
  })
})
