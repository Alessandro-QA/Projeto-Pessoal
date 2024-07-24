/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/financeiro/documentos/exclusao/documento.json'
import seedTestExcluir from '../../../../fixtures/financeiro/documentos/exclusao/excluir.json'
import testDescription from './bdd-description/excluir.description.js'
import { excluir, conferir } from '../../../../support/commands/financeiro/documentos/documentos.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

// Cadastro, Edição e Exclusão de Documento Já Pago
describe('Financeiro', { tags: '@financeiro' }, () => {

  var dataAtual = Utils.getDate()
  var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

  var bodyDocumentoA = Utils.replacer('dataSubstituicao', dataAtual, documento)
  var bodyDocumentoB = Utils.replacer('dataSubstituicao', dataAtual, documento)

  var numDoc1 = Utils.getAlphaNumeric(10)
  var numDoc2 = Utils.getAlphaNumeric(10)

  var bodyDocumentoA = Utils.replacer('numero', numDoc1, bodyDocumentoA)
  var bodyDocumentoB = Utils.replacer('numero', numDoc2, bodyDocumentoB)


  describe('Documentos', { tags: '@documentos' }, () => {
    context('Exclusão', () => {
      context('Documento conferido e não conferido', () => {
        it('Cadastrar documentos por API', function () {
          cy.allureDescriptionHtml(testDescription.criacaoAPI).allureSeverity('minor')

          cy.log(bodyDocumentoA)
          cy.log(bodyDocumentoB)
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumentoA, 'login_cadastro')
          Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumentoB, 'login_cadastro')
        })

        it('Não conferido', function () {
          cy.allureDescriptionHtml(testDescription.naoConferido).allureSeverity('normal')

          excluir(bodyDocumentoB, false)
        })

        it('Conferido', function () {

          cy.allureDescriptionHtml(testDescription.conferido).allureSeverity('normal')
          // Marcar como conferido e validar se botão de exclusão está bloqueado
          conferir(bodyDocumentoA)
          excluir(bodyDocumentoA, true)

          // Desmarcar o conferido e então excluir
          conferir(bodyDocumentoA)
          excluir(bodyDocumentoA, false)
        })
      })
    })
  })
})
