/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/financeiro/documentos/listagem/documentos.json'
import seedTestDocumento from '../../../../fixtures/financeiro/documentos/listagem/listagem.json'
import { listagem, conferir } from '../../../../support/commands/financeiro/documentos/documentos.js'
import Utils from '../../../../support/utils/utils.js'
import testDescription from './bdd-description/listagem.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
 
  var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

  describe('Documentos', { tags: '@documentos' }, () => {
    context('Listagem', () => {
      context('Filtragem de Documentos', () => {
        
        it('Sem preenchimento de filtro', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.semFiltro)

          listagem(seedTestDocumento.semFiltro)
        })

        it('Filtrar por Pessoa', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.filtrarPessoa)

          listagem(seedTestDocumento.filtroPessoa)
        })

        it('Filtrar por Tag', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.filtrarTag)

          listagem(seedTestDocumento.filtroTag)
        })

        it('Filtrar por Conferido', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.filtrarConferido)

          conferir(seedTestDocumento.filtroConferido.conferir)

          listagem(seedTestDocumento.filtroConferido)
        })

        it('Filtrar por Não Conferido', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.filtrarConferido)

          listagem(seedTestDocumento.filtroNaoConferido)
        })

        it('Filtrar por Safra e Ciclo', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.filtrarSafraCiclo)

          listagem(seedTestDocumento.filtroSafraCiclo)
        })

        it('Filtrar por Fazenda', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.filtrarFazenda)

          listagem(seedTestDocumento.filtroFazenda)
        })

        it('Filtrar por Data', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.filtrarData)

          listagem(seedTestDocumento.filtroData)
        })

        it('Filtrar por Safra', function () {
          // cy.allure().severity('normal').startStep('test content')
            //.descriptionHtml(testDescription.filtrarSafra)

          listagem(seedTestDocumento.filtroSafra)
        })
      })
    })
  })
})
