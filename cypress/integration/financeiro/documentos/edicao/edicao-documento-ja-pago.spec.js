/// <reference types="cypress" />

import seedCadastro from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/edicao/documento-ja-pago/cadastro-documento-ja-pago.json'
import seedEdicao from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/edicao/documento-ja-pago/edicao-documento-ja-pago.json'
import seedExclusao from '../../../../fixtures/cenarios-de-teste/financeiro/documentos/edicao/documento-ja-pago/exclusao-documento-ja-pago.json'
import Documentos from '../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'
import LivroCaixa from '../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa'
import Movimentacao from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria'
import ResultadoSafra from '../../../../support/commands/funcionalidades/resultados-safra/resultado-safra'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

// Cadastro, Edição e Exclusão de Documento Já Pago
context('Cenário de Teste', () => {
  describe('Documentos | Cadastro, Edição e Exclusão de Documento Já Pago', { tags: '@documentos' }, () => {
    var dataAtual = Utils.getDate()
    var documento = []

    switch (Cypress.env('ambiente')) {
      case 'dev': documento = seedCadastro.documentoDev
        break
      case 'qa': documento = seedCadastro.documentoQA
        break
      default:
        throw new Error('Não foi possivel atribuir os documentos')
    }

    var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, documento)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    // after(() => {
    //   Authenticate.logout()
    // })

    it('Cadastrar documento dedutível já pago por API', function () {
      cy.allure().severity('normal').startStep('test content')

      Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento, 'login_cenarios')
    })

    it('Validar se o cadastro refletiu na Movimentação Bancária', function () {
      cy.allure().severity('normal').startStep('test content')

      Movimentacao.validarListagem(seedCadastro.movimentacaoBancaria)
    })

    it('Validar se o cadastro refletiu no Livro Caixa', function () {
      cy.allure().severity('normal').startStep('test content')

      LivroCaixa.validarDashboard(seedCadastro.livroCaixa)
    })

    it('Validar se o cadastro refletiu no lançamento do Livro Caixa', function () {
      cy.allure().severity('normal').startStep('test content')

      LivroCaixa.validarLancamento(seedCadastro.lancamentoLivroCaixa)
    })

    it('Validar se o cadastro refletiu no resultado da safra - Dashboard', function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoSintetico(seedCadastro.resultadoDaSafraDashboard)
    })

    it('Validar se o cadastro refletiu no resultado da safra - Analítica', function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoAnalitico(seedCadastro.resultadoDaSafraAnalitica)
    })

    it('Editar o documento cadastrado', function () {
      cy.allure().severity('critical').startStep('test content')

      Documentos.editar(seedEdicao.filtro, seedEdicao.edicaoDocumento)
    })

    it('Validar os detalhes do documento editado', function () {
      cy.allure().severity('normal').startStep('test content')

      Documentos.validarDetalhes(seedEdicao.detalhesDocumento)
    })

    it('Validar se edição refletiu na Movimentação Bancária', function () {
      cy.allure().severity('normal').startStep('test content')

      Movimentacao.validarListagem(seedEdicao.movimentacaoBancaria)
    })

    it('Validar se edição refletiu no Livro Caixa', function () {
      cy.allure().severity('normal').startStep('test content')

      LivroCaixa.validarDashboard(seedEdicao.livroCaixa)
    })

    it('Validar se edição refletiu no lançamento do Livro Caixa', function () {
      cy.allure().severity('normal').startStep('test content')

      LivroCaixa.validarLancamento(seedEdicao.lancamentoLivroCaixa)
    })

    it('Validar se edição refletiu no resultado da safra - Dashboard', function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoSintetico(seedEdicao.resultadoDaSafraDashboard)
    })

    it('Validar se edição refletiu no resultado da safra - Analítica', function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoAnalitico(seedEdicao.resultadoDaSafraAnalitica)
    })

    it('Excluir o documento cadastrado', function () {
      cy.allure().severity('critical').startStep('test content')

      Documentos.excluir(seedExclusao.exclusaoDocumento)
    })

    it('Validar exclusão do documento', function () {
      cy.allure().severity('normal').startStep('test content')

      Documentos.validarExclusao()
    })

    it('Validar se exclusão refletiu na Movimentação Bancária', function () {
      cy.allure().severity('normal').startStep('test content')

      Movimentacao.validarExclusao(seedExclusao.movimentacaoBancaria)
    })

    it('Validar se exclusão refletiu no Livro Caixa  ', function () {
      cy.allure().severity('normal').startStep('test content')

      LivroCaixa.validarExclusao(seedExclusao.exclusaoLivroCaixa)
    })

    it('Validar se exclusão refletiu no resultado da safra - Dashboard', function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoSintetico(seedExclusao.resultadoDaSafraDashboard)
    })

    it('Validar se exclusão refletiu no resultado da safra - Analítica', function () {
      cy.allure().severity('normal').startStep('test content')

      ResultadoSafra.resultadoAnalitico(seedExclusao.resultadoDaSafraAnalitica)
    })
  })
})
