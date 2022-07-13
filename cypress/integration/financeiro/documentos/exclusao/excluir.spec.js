/// <reference types="cypress" />

import seedDocumentos from '../../../../fixtures/funcionalidades/financeiro/documentos/excluir/documento.json'
import seedTestExcluir from '../../../../fixtures/funcionalidades/financeiro/documentos/excluir/excluir.json'
import testDescription from './bdd-description/excluir.description.js'
import { excluir, conferir, getDocumentoPorAmbiente } from '../../../../support/commands/funcionalidades/financeiro/documentos/documentos.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

// Cadastro, Edição e Exclusão de Documento Já Pago
context('Funcionalidade', () => {
  describe('Documentos | Exclusão de documento', { tags: '@documentos' }, () => {
    var dataAtual = Utils.getDate()
    var documento = getDocumentoPorAmbiente(seedDocumentos)

    var bodyDocumento789456 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento789456)
    var bodyDocumento987456 = Utils.replacer('dataSubstituicao', dataAtual, documento.documento987456)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    it('Cadastrar documento por API', function () {
      cy.allure().severity('normal').startStep('test content')

      Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento789456, 'login_cenarios')
      Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento987456, 'login_cenarios')
    })

    it('Não conferido', function () {
      cy.allure().severity('critical').startStep('test content')
        .descriptionHtml(testDescription.naoConferido)

      excluir(seedTestExcluir.documento789456)
    })

    it('Conferido', function () {
      cy.allure().severity('critical').startStep('test content')
        .descriptionHtml(testDescription.conferido)

      conferir(seedTestExcluir.documento987456)

      excluir(seedTestExcluir.documento987456)
    })
  })
})
