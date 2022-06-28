/// <reference types="cypress" />

import seedTest from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-ja-pago-com-exploracao-individual.json'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import Movimentacao from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import Fazenda from '../../../../support/commands/funcionalidades/atividades-agricolas/cadastros/fazenda/fazenda.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Cenário de Teste', () => {
  describe('Documentos | Cadastro de Documento Já Pago - Empresa com Exploração Individual', { tags: '@documentos' }, () => {
    var dataAtual = Utils.getDate()
    var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, seedTest.documento)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    it('Definir a matricula como Exploração Individual', function () {
      cy.allure().severity('normal').startStep('test content')

      Fazenda.matricula(seedTest.matriculaFazenda)
    })

    it('Cadastrar documento já pago por API', function () {
      cy.allure().severity('normal').startStep('test content')

      Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento, 'login_cenarios')
    })

    it('Confirmar se gerou Movimentação Bancária', function () {
      cy.allure().severity('critical').startStep('test content')

      Movimentacao.validarDashboard(seedTest.movimentacaoBancaria)
    })

    it('Confirmar se gerou Livro Caixa', function () {
      cy.allure().severity('critical').startStep('test content')

      LivroCaixa.validarDashboard(seedTest.lancamentoLivroCaixa)
    })

    it('Remover matricula de exploração individual', function () {
      cy.allure().severity('normal').startStep('test content')

      Fazenda.deletarMatricula(seedTest.matriculaFazenda)
    })
  })
})
