/// <reference types="cypress" />

import seedTest from '../../../../../fixtures/cenarios-de-teste/financeiro/documentos/cadastro/documento-ja-pago.json'
import LivroCaixa from '../../../../../support/commands/funcionalidades/financeiro/livro-caixa/livro-caixa.js'
import Movimentacao from '../../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import Utils from '../../../../../support/utils/utils.js'

describe('CENÁRIO > Documentos | Cadastro de Documento Já Pago - ', { tags: '@documentos' }, () => {
  var dataAtual = Utils.getDate()
  var bodyDocumento = Utils.replacer('dataSubstituicao', dataAtual, seedTest.documento)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    cy.login(credenciais)
  })

  before(function () {
    Utils.setAccessTokenFromLocalStorage()
  })

  after(() => {
    cy.logout()
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
})
