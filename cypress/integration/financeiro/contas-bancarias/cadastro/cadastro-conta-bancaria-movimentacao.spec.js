/// <reference types="cypress" />

import seedTestContaBancaria from '../../../../fixtures/financeiro/contas-bancarias/cadastro/conta-bancaria-movimentacao.json'
import ContaBancaria from '../../../../support/commands/funcionalidades/financeiro/contas-bancarias/contas-bancarias.js'
import MovimentacaoBancaria from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import testDescription from './bdd-description/cadastro-conta-bancaria.description.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Cadastro de Conta - Sem inclusão de saldo disponível', () => {
      it('Deve cadastrar conta Bancária sem marcar o checkbox "Incluir no saldo disponível"', function () {
        cy.allure().severity('normal').startStep('test content')
          .descriptionHtml(testDescription.contaCorrenteMovimentacao)

        ContaBancaria.cadastroEditar(seedTestContaBancaria.contaBancaria)
      })

      it('Deve validar movimentação financeira e validar lançamento de movimentação inicial', function () {
        cy.allure().severity('minor').startStep('test content')

        MovimentacaoBancaria.validarListagem(seedTestContaBancaria.listagemMovimentacao)
      })
    })
  })
})
