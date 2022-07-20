/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/funcionalidades/financeiro/documentos/listagem/documentos.json'
import seedTestDocumento from '../../../../fixtures/funcionalidades/financeiro/documentos/listagem/listagem.json'
import { listagem, conferir } from '../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'
import Utils from '../../../../support/utils/utils.js'
import testDescription from './bdd-description/listagem.description'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('FUNCIONALIDADE > Documentos | Listagem Documento - ', { tags: '@documentos' }, () => {
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

    it('Filtrar documentos por Pessoa', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.filtrarPessoa)

      listagem(seedTestDocumento.filtroPessoa)
    })

    it('Filtrar documentos por Tag', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.filtrarTag)

      listagem(seedTestDocumento.filtroTag)
    })

    it('Filtrar por documento conferido', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.filtrarConferido)

      conferir(seedTestDocumento.filtroConferido.conferir)

      listagem(seedTestDocumento.filtroConferido)
    })

    it('Filtrar por documento não conferido', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.filtrarConferido)

      listagem(seedTestDocumento.filtroNaoConferido)
    })

    it('Filtrar por safra e ciclo', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.filtrarSafraCiclo)

      listagem(seedTestDocumento.filtroSafraCiclo)
    })

    it('Filtrar por fazenda', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.filtrarFazenda)

      listagem(seedTestDocumento.filtroFazenda)
    })

    it('Filtrar por data', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.filtrarData)

      listagem(seedTestDocumento.filtroData)
    })

    it('Filtrar por safra', function () {
      cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescription.filtrarSafra)

      listagem(seedTestDocumento.filtroSafra)
    })
  })
})
