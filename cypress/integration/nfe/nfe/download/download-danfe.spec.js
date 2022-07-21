/// <reference types="cypress" />

import Nfe from '../../../../support/commands/funcionalidades/nfe/nfe.js'
import seedTestNfe from '../../../../fixtures/cenarios-de-teste/nfe/download/download-danfe.json'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

// https://dev.azure.com/conexalabs/ProjetoX/_wiki/wikis/ProjetoX.wiki/3033/NF-e#**funcionalidade%3A**-download-de-danfe

context('Funcionalidade', () => {
  describe('NFe | Download de DANFe', { tags: '@nfe' }, () => {
    var nfe = Utils.getPayloadPorAmbiente(seedTestNfe)

    before(function () {
      const credenciais = Cypress.env('login_nfe')
      Authenticate.login(credenciais)

      cy.visit('/fiscal/nfe')
    })

    beforeEach(function () {
      Utils.deleteDownloadsFolder()
    })

    after(() => {
      Authenticate.logout()
    })

    it('NFe Autorizada', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.autorizada)
    })

    it('NFe Com Uso Denegado', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.usoDenegado)
    })

    it('NFe Cancelada', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.cancelada)
    })

    it('NFe Em Contingência', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.contingencia)
    })

    it('NFe Pendente', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.pendente)
    })

    it('NFe Rejeitada', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.rejeitada)
    })

    it('NFe Com Lote Processando', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.processando)
    })

    it('NFe com Lote Recebido', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.loteRecebido)
    })

    it('NFe com Lote Processado', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.loteProcessado)
    })

    it('NFe com Lote em Processamento', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.loteEmProcessamento)
    })

    it('NFe Rascunho', function () {
      cy.allure().severity('critical').startStep('test content')

      Nfe.downloadDanfe(nfe.rascunho)
    })
  })
})
/** Lista de Status da NFe
 "Autorizada" = 1
 "Uso denegado" = 2
 "Cancelada" = 3
 "Contingência" = 4
 "Pendente" = 5
 "Rejeitada" = 6
 "Processando" = 7
 "Lote Recebido" = 8
 "Lote Processado" = 9
 "Lote Em Processamento" = 10
 "Rascunho" = 11
*/
