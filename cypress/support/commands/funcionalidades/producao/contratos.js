/// <reference types="cypress" />

import locDashboardContrato from '../../../locators/funcionalidades/producao/contratos/locators-dashboard-contrato'

class ContratoUtils {
  /**
   * Método para validar a dashboard de contrato
   * @param {} seedTest
   */

  validarDashboard(seedTest) {
    const url = '/producao/contrato'
    const locatorTituloPagina = locDashboardContrato.titulo
    const tituloPagina = 'Contratos'

    // Navegar para dashboard contrato
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('GET', '/api/producao-agricola/v1/contratos/List?**')
      .as('listContratos')
    cy.intercept('POST', '/api/financeiro/v1/Documento/ValorRecebido/Contratos')
      .as('contratos')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/cultura/v1/cultura/icone?**`)
      .as('iconesCultura')
    cy.intercept('GET', 'https://api.aliare.digital/user/v1.0-dev/user/applications')
      .as('userApplications')

    // Selecionar fazenda
    cy.getVisible(locDashboardContrato.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    // Selecionar safra
    cy.getVisible(locDashboardContrato.selectSafra).click()
      .contains(seedTest.safra).click()

    cy.wait('@listContratos')
    cy.wait('@contratos')
    cy.wait('@iconesCultura')
    cy.wait('@userApplications')

    // Validar cards de contratos
    const cardsContratos = seedTest.cardsContratos
    cardsContratos.forEach((dadosCard, i) => {
      // Validar card contrato
      cy.get(locDashboardContrato.spanCultura).eq(i).should(($el) => {
        expect($el).to.contain.text(dadosCard.cardContrato)
      })

      // Validar status da entrega
      cy.get(locDashboardContrato.spanStatusContrato).eq(i).should(($el) => {
        expect($el).to.contain.text(dadosCard.statusEntrega)
      })

      // Validar numero do contrato
      cy.get(locDashboardContrato.spanNumeroContrato).should(($el) => {
        expect($el).to.contain.text(dadosCard.numeroContrato)
      })

      // Validar status de fixar
      cy.get(locDashboardContrato.spanFormacaoValor).eq(i).should(($el) => {
        expect($el).to.contain.text(dadosCard.informacaoFixar)
      })

      // Validar valor recebido
      cy.get(locDashboardContrato.spanValorRecebido).eq(i).should(($el) => {
        expect($el).to.contain.text(dadosCard.valorRecebido)
      })

      // Validar quantidade entregue
      cy.get(locDashboardContrato.spanQuantidadeEntregue).eq(i).should(($el) => {
        expect($el).to.contain.text(dadosCard.quantidadeEntregue)
      })

      // Valida o tipo de negociação
      cy.get(locDashboardContrato.spanNegociacao).eq(i).should(($el) => {
        expect($el).to.contain.text(dadosCard.tipoNegociacao)
      })
    })
  }

  /**
 * Busca contratos de acordo com o ambiente em que o teste é executado (Dev ou QA)
 * @param {*} contratos 
 */
  getContratoPorAmbiente(contratos) {
    var contrato = []

    switch (Cypress.env('ambiente')) {
      case 'dev': contrato = contratos.contratoDev
        break
      case 'qa': contrato = contratos.contratoQA
        break
      default:
        throw new Error('Não foi possivel atribuir os contratos')
    }

    return contrato
  }
}

export default new ContratoUtils()
