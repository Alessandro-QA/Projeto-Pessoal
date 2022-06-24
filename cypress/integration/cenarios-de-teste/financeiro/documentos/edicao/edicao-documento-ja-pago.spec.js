/// <reference types="cypress" />

import seedCadastro from '../../../../../fixtures/cenarios-de-teste/financeiro/documentos/edicao/documento-ja-pago/cadastro-documento-ja-pago.json'
import seedEdicao from '../../../../../fixtures/cenarios-de-teste/financeiro/documentos/edicao/documento-ja-pago/edicao-documento-ja-pago.json'
import seedExclusao from '../../../../../fixtures/cenarios-de-teste/financeiro/documentos/edicao/documento-ja-pago/exclusao-documento-ja-pago.json'
import Documentos from '../../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'
import LivroCaixa from '../../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa'
import Movimentacao from '../../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria'
import Safra from '../../../../../support/commands/funcionalidades/resultados-safra/resultado-safra'
import Utils from '../../../../../support/utils/utils.js'
import Authenticate from '../../../../../support/commands/funcionalidades/login/login-logout.js'

// Cadastro, Edição e Exclusão de Documento Já Pago
describe('CENÁRIO > Documentos | Cadastro, Edição e Exclusão de Documento Já Pago - ', { tags: '@documentos' }, () => {
  var dataAtual = Utils.getDate()
  var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, seedCadastro.cadastroDocumento)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  it('Cadastrar documento dedutível já pago por API', function () {
    cy.allure().severity('normal').startStep('test content')

    Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento, 'login_cenarios')
  })

  it('Validar se o cadastro refletiu na Movimentação Bancária', function () {
    cy.allure().severity('normal').startStep('test content')

    Movimentacao.validarDashboard(seedCadastro.movimentacaoBancaria)
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

    Safra.validarDashboard(seedCadastro.resultadoDaSafraDashboard)
  })

  it('Validar se o cadastro refletiu no resultado da safra - Analítica', function () {
    cy.allure().severity('normal').startStep('test content')

    Safra.resultadoAnalitico(seedCadastro.resultadoDaSafraAnalitica)
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

    Movimentacao.validarDashboard(seedEdicao.movimentacaoBancaria)
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

    Safra.validarDashboard(seedEdicao.resultadoDaSafraDashboard)
  })

  it('Validar se edição refletiu no resultado da safra - Analítica', function () {
    cy.allure().severity('normal').startStep('test content')

    Safra.resultadoAnalitico(seedEdicao.resultadoDaSafraAnalitica)
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

    Safra.validarDashboard(seedExclusao.resultadoDaSafraDashboard)
  })

  it('Validar se exclusão refletiu no resultado da safra - Analítica', function () {
    cy.allure().severity('normal').startStep('test content')

    Safra.resultadoAnalitico(seedExclusao.resultadoDaSafraAnalitica)
  })
})
