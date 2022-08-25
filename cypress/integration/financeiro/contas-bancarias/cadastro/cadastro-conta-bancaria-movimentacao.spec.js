/// <reference types="cypress" />

import seedTestContaBancaria from '../../../../fixtures/funcionalidades/financeiro/contas-bancarias/cadastro/conta-bancaria-movimentacao.json'
import ContaBancaria from '../../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import MovimentacaoBancaria from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import testDescription from './bdd-description/cadastro-conta-bancaria.description.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Cenário de Teste', () => {
  describe('Contas Bancárias | Cadastro de Conta', { tags: '@contasBancarias' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Realizar cadastro de conta bancaria e validar lançamento de movimentação inicial', () => {
      it('Cadastro da conta Bancária sem marcar o checkbox "Incluir no saldo disponível"', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.contaCorrenteMovimentacao)

        ContaBancaria.cadastroEditar(seedTestContaBancaria.contaBancaria)
      })

      it('Validar movimentação financeira', function () {
        cy.allure().severity('minor').startStep('test content')

        MovimentacaoBancaria.validarListagem(seedTestContaBancaria.listagemMovimentacao)
      })
    })
  })
})
