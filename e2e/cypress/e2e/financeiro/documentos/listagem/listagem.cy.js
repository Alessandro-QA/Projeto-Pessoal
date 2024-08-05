/// <reference types="cypress" />

import payloadDocumentos from '../../../../fixtures/financeiro/documentos/listagem/documentos.json'
import seedTestDocumento from '../../../../fixtures/financeiro/documentos/listagem/listagem.json'
import { listagem, conferir } from '../../../../support/commands/financeiro/documentos/documentos.js'
import Utils from '../../../../support/utils/utils.js'
import testDescription from './bdd-description/listagem.description.js'

const dayjs = require('dayjs');

describe('Financeiro', { tags: '@financeiro' }, () => {

  var documento = Utils.getPayloadPorAmbiente(payloadDocumentos)

  describe('Documentos', { tags: '@documentos' }, () => {
    context('Listagem', () => {
      context('Filtragem de Documentos', () => {

        it('Sem preenchimento de filtro', function () {
       
          cy.allureDescriptionHtml(testDescription.semFiltro).allureSeverity('normal')

          listagem(seedTestDocumento.semFiltro)
        })

        it('Filtrar por Pessoa', function () {
         
          cy.allureDescriptionHtml(testDescription.filtrarPessoa).allureSeverity('normal')

          listagem(seedTestDocumento.filtroPessoa)
        })

        it('Filtrar por Tag', { retries: { runMode: 1, openMode: 1, }, } , function () {

          cy.allureDescriptionHtml(testDescription.filtrarTag).allureSeverity('normal')
          
          listagem(seedTestDocumento.filtroTag)
        })

        it('Filtrar por Conferido', function () {
         
          cy.allureDescriptionHtml(testDescription.filtrarConferido).allureSeverity('normal')

          listagem(seedTestDocumento.filtroConferido)
        })

        it('Filtrar por Não Conferido', function () {
          
          cy.allureDescriptionHtml(testDescription.filtrarConferido).allureSeverity('normal')

          listagem(seedTestDocumento.filtroNaoConferido)
        })

        it('Filtrar por Safra e Ciclo', function () {
          
          cy.allureDescriptionHtml(testDescription.filtrarSafraCiclo).allureSeverity('normal')

          listagem(seedTestDocumento.filtroSafraCiclo)
        })

        it('Filtrar por Fazenda', function () {
          
          cy.allureDescriptionHtml(testDescription.filtrarFazenda).allureSeverity('normal')

          listagem(seedTestDocumento.filtroFazenda)
        })

        it('Filtrar por Data', function () {
        
          cy.allureDescriptionHtml(testDescription.filtrarData).allureSeverity('normal')

          // Data de hoje
          const hoje = dayjs().format('DD/MM/YYYY'); // Ou qualquer formato que desejar

          // Data de uma semana atrás
          const umaSemanaAtras = dayjs().subtract(1, 'week').format('DD/MM/YYYY');

          seedTestDocumento.filtroData.dataInicio = umaSemanaAtras
          seedTestDocumento.filtroData.dataFinal = hoje
          listagem(seedTestDocumento.filtroData)
        })

        it('Filtrar por Safra', function () {
          
          cy.allureDescriptionHtml(testDescription.filtrarSafra).allureSeverity('normal')

          listagem(seedTestDocumento.filtroSafra)
        })

        it('Validar quando nenhum documento encontrado', function () {
          
          cy.allureDescriptionHtml(testDescription.nenhumEncontrado).allureSeverity('normal')

          listagem(seedTestDocumento.semDocumento)
        })
      })
    })
  })
})
