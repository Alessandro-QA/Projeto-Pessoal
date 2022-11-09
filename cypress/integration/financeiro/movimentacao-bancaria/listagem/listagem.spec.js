/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/financeiro/movimentaca-bancaria/listagem/documentos.json'
import seedTestListagemMovimentacao from '../../../../fixtures/financeiro/movimentaca-bancaria/listagem/validar-listagem.json'
import seedTestAgenda from '../../../../fixtures/financeiro/movimentaca-bancaria/listagem/pagar-pela-agenda.json'
import { pagarPelaAgenda, pagarReceberTitulo } from '../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import { validarListagem } from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import testDescritpion from './bdd-description/listagem.description.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var dataAtual = Utils.getDate()
  var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)
  var bodyDocumento357753 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento357753)
  var bodyDocumento987456 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento987456)
  var bodyDocumento159753 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento159753)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Movimentações Bancárias', { tags: '@movimentacoesBancarias' }, () => {
    context('Listagem', () => {
      context('Validar filtros da listagem', () => {
        it('Deve cadastrar documentos via API', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento357753, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento987456, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento159753, 'login_cenarios')
        })

        it('Deve pagar títulos via Agenda Financeira', function () {
          pagarPelaAgenda(seedTestAgenda.documento357753)
          pagarPelaAgenda(seedTestAgenda.documento987456)
          pagarReceberTitulo(seedTestAgenda.documento159753)
        })

        it('Deve filtrar por Empresa/Pessoa', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescritpion.filtroEmpresa)

          validarListagem(seedTestListagemMovimentacao.movimentacaoEmpresa)
        })

        it('Deve filtrar por Conta', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescritpion.filtroConta)

          validarListagem(seedTestListagemMovimentacao.movimentacaoContaBancaria)
        })

        it('Deve filtrar por Data', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescritpion.filtroData)

          validarListagem(seedTestListagemMovimentacao.movimentacaoData)
        })
      })
    })
  })
})
