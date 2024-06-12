/// <reference types="cypress" />

import seedTestPagamento from '../../../../fixtures/financeiro/movimentaca-bancaria/realizar-movimentacao/pagamento.json'
import Movimentacao from '../../../../support/commands/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import testDescritpion from './bdd-description/realizar-movimentacao.description.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Movimentações Bancárias', { tags: '@movimentacoesBancarias' }, () => {
    context('Adicionar Pagamento', () => {
      context('Adição de pagamento e validação da listagem', () => {
        it('Deve adicionar pagamento', function () {
          // cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescritpion.pagamento)

          Movimentacao.adicionarPagamentoRecebimento(seedTestPagamento.pagamento)
        })

        it('Deve validar movimentação do tipo Pagamento', function () {
          // cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescritpion.recebimento)

          Movimentacao.validarListagem(seedTestPagamento.pagamento)
        })
      })
    })

    context('Adicionar Recebimento', () => {
      context('Adição de recebimento e validação da listagem', () => {
        it('Deve adicionar recebimento', function () {
          // cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescritpion.transferencia)

          Movimentacao.adicionarPagamentoRecebimento(seedTestPagamento.recebimento)
        })

        it('Deve validar movimentação do tipo Recebimento', function () {
          // cy.allure().severity('normal').startStep('test content')

          Movimentacao.validarListagem(seedTestPagamento.recebimento)
        })
      })
    })

    context('Adicionar Transferência', () => {
      context('Adição de transferência e validação da listagem', () => {
        it('Deve adicionar transferência', function () {
          // cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescritpion.transferencia)

          Movimentacao.adicionarPagamentoRecebimento(seedTestPagamento.transferencia)
        })

        it('Deve validar movimentação do tipo Transferência', function () {
          // cy.allure().severity('normal').startStep('test content')

          Movimentacao.validarListagem(seedTestPagamento.transferencia)
        })
      })
    })
  })
})