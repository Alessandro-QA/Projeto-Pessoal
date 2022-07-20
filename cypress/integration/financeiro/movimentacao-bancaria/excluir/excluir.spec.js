/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/detalhes/documento.json'
import seedTestExcluir from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/excluir/excluir.json'
import testDescription from './bdd-description/excluir.description.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import { excluir, validarExclusao } from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'

context('Funcionalidade', () => {
  describe('Movimentação Bancaria | Excluir movimentação bancaria', { tags: '@movimentacaoBancaria' }, () => {
    var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Cadastro de documento já pago/recebido', () => {
      it('Via API', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', documento.documentoPagamento, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', documento.documentoRecebimento, 'login_cenarios')
      })
    })

    context('Excluir movimentacao do tipo pagamento na tela de detalhes de movimentações', () => {
      it('Selecionar movimentação do tipo pagamento e excluir movimentação', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.excluir)

        excluir(seedTestExcluir.excluirPagamento)
      })

      it('Validar exclusão de movimentação', function () {
        validarExclusao(seedTestExcluir.excluirPagamento)
      })
    })

    context('Excluir movimentacao do tipo recebimento na tela de detalhes de movimentações', () => {
      it('Selecionar movimentação do tipo recebimento e excluir movimentação', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescription.excluir)

        excluir(seedTestExcluir.excluirRecebimento)
      })

      it('Validar exclusão de movimentação', function () {
        validarExclusao(seedTestExcluir.excluirRecebimento)
      })
    })
  })
})
