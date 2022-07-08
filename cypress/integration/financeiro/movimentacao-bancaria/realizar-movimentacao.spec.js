/// <reference types="cypress" />

import seedTestPagamento from '../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/pagamento.json'
import MovimentacaoBancaria from '../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import testDescritpion from './bdd-description/realizar-movimentacao.js'
import Utils from '../../../support/utils/utils.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Movimentação Bancaria | Adicionar pagamento, recebimento e transferência', { tags: '@movimentacaoBancaria' }, () => {

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    describe('Realizar movimentação do tipo pagamento e validar o lançamento na listagem de movimentação', () => {
      it('Adicionar pagamento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescritpion.pagamento)

        MovimentacaoBancaria.adicionarPagamentoRecebimento(seedTestPagamento.pagamento)
      })

      it('Validar movimentação do tipo pagamento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescritpion.recebimento)

        MovimentacaoBancaria.validarDashboard(seedTestPagamento.pagamento)
      })
    })

    describe('Realizar movimentação do tipo recebimento e validar o lançamento na listagem de movimentação', () => {
      it('Adicionar Recebimento', function () {
        cy.allure().severity('critical').startStep('test content')
          .descriptionHtml(testDescritpion.transferencia)

        MovimentacaoBancaria.adicionarPagamentoRecebimento(seedTestPagamento.recebimento)
      })

      it('Validar movimentação do tipo recebimento', function () {
        cy.allure().severity('critical').startStep('test content')

        MovimentacaoBancaria.validarDashboard(seedTestPagamento.recebimento)
      })
    })

    describe.only('Realizar movimentação do tipo transfêrencia e validar o lançamento na listagem de movimentação', () => {
      it('Adicionar Transferência', function () {
        cy.allure().severity('critical').startStep('test content')

        MovimentacaoBancaria.adicionarPagamentoRecebimento(seedTestPagamento.transferencia)
      })

      it('Validar movimentação do tipo transferência', function () {
        cy.allure().severity('critical').startStep('test content')

        MovimentacaoBancaria.validarDashboard(seedTestPagamento.transferencia)
      })
    })
  })
})
