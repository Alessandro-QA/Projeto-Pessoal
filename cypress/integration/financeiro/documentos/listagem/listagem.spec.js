/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/financeiro/documentos/listagem/documentos.json'
import seedTestDocumento from '../../../../fixtures/financeiro/documentos/listagem/listagem.json'
import { listagem, conferir } from '../../../../support/commands/financeiro/documentos/documentos.js'
import Utils from '../../../../support/utils/utils.js'
import testDescription from './bdd-description/listagem.description'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var dataAtual = Utils.getDate()
  var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

  var bodyDocumento789456 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento789456)
  var bodyDocumento987456 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento987456)
  var bodyDocumento357357 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento357357)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Documentos', { tags: '@documentos' }, () => {
    context('Listagem', () => {
      context('Filtragem de Documentos', () => {
        it('Cadastrar documentos via API', function () {
          cy.allure().severity('Critical').startStep('test content')

          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento789456, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento987456, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento357357, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', documento.documento753753, 'login_cenarios')
        })

        it('Sem preenchimento de filtro', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.semFiltro)

          listagem(seedTestDocumento.semFiltro)
        })

        it('Filtrar por Pessoa', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarPessoa)

          listagem(seedTestDocumento.filtroPessoa)
        })

        it('Filtrar por Tag', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarTag)

          listagem(seedTestDocumento.filtroTag)
        })

        it('Filtrar por Conferido', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarConferido)

          conferir(seedTestDocumento.filtroConferido.conferir)

          listagem(seedTestDocumento.filtroConferido)
        })

        it('Filtrar por Não Conferido', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarConferido)

          listagem(seedTestDocumento.filtroNaoConferido)
        })

        it('Filtrar por Safra e Ciclo', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarSafraCiclo)

          listagem(seedTestDocumento.filtroSafraCiclo)
        })

        it('Filtrar por Fazenda', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarFazenda)

          listagem(seedTestDocumento.filtroFazenda)
        })

        it('Filtrar por Data', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarData)

          listagem(seedTestDocumento.filtroData)
        })

        it('Filtrar por Safra', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtrarSafra)

          listagem(seedTestDocumento.filtroSafra)
        })
      })
    })
  })
})
