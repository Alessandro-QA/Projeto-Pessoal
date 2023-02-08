/// <reference types="cypress" />

import locDashboardContrato from '../../locators/producao/contratos/locators-dashboard-contrato.js'

class Contrato {
  /**
   * Método para validar a dashboard de contrato
   * @param {} seedTest
   */

  validarDashboard(seedTest) {
    const url = '/producao/contrato'
    const locatorTituloPagina = locDashboardContrato.titulo
    const tituloPagina = 'Contratos'

    cy.log('Navegar para dashboard contrato')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', '/api/producao-agricola/v1/contratos/List?**')
      .as('listContratos')
    cy.intercept('POST', '/api/financeiro/v1/Documento/ValorRecebido/Contratos')
      .as('contratos')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/cultura/v1/cultura/icone?**`)
      .as('iconesCultura')

    cy.log('Selecionar fazenda')
    cy.getVisible(locDashboardContrato.selectFazenda).click()
      .get(locDashboardContrato.listaFazenda).contains(seedTest.fazenda).click()

    cy.log('Selecionar safra')
    cy.getVisible(locDashboardContrato.selectSafra).click()
      .get(locDashboardContrato.listaSafra).contains(seedTest.safra).click()

    cy.wait('@listContratos')
    cy.wait('@contratos')
    cy.wait('@iconesCultura')

    cy.log('Validar cards de contratos')
    const cardsContratos = seedTest.cardsContratos

    cardsContratos.forEach((dadosCard) => {
      cy.get(locDashboardContrato.spanNumeroContrato).contains(dadosCard.numeroContrato)
        .parents(locDashboardContrato.cardContrato).within(() => {

          cy.log('Validar card contrato')
          cy.get(locDashboardContrato.spanCultura).should(($el) => {
            expect($el).to.contain.text(dadosCard.cardContrato)
          })

          cy.log('Validar status da entrega')
          cy.get(locDashboardContrato.spanStatusContrato).should(($el) => {
            expect($el).to.contain.text(dadosCard.statusEntrega)
          })

          cy.log('Validar numero do contrato')
          cy.get(locDashboardContrato.spanNumeroContrato).should(($el) => {
            expect($el).to.contain.text(dadosCard.numeroContrato)
          })

          cy.log('Validar status de fixar')
          cy.get(locDashboardContrato.spanFormacaoValor).should(($el) => {
            expect($el).to.contain.text(dadosCard.informacaoFixar)
          })

          cy.log('Validar valor recebido')
          cy.get(locDashboardContrato.spanValorRecebido).should(($el) => {
            expect($el).to.contain.text(dadosCard.valorRecebido)
          })

          cy.log('Validar quantidade entregue')
          cy.get(locDashboardContrato.spanQuantidadeEntregue).should(($el) => {
            expect($el).to.contain.text(dadosCard.quantidadeEntregue)
          })

          cy.log('Validar o tipo de negociação')
          cy.get(locDashboardContrato.spanNegociacao).should(($el) => {
            expect($el).to.contain.text(dadosCard.tipoNegociacao)
          })
        })
    })
  }
}

export default new Contrato()
