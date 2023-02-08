/// <reference types="cypress" />

import locSafra from '../../../../locators/atividades-agricolas/cadastros/locators-cadastro-safra.js'

class Safra {
  /**
   * Metodo para cadastrar uma safra
   * @param {*} seddTestSafra
   */
  cadastro(seddTestSafra) {
    const url = '/atividade-agricola/safra'
    const locatorTituloPagina = locSafra.dashboard.titulo
    const tituloPagina = 'Cadastro de safras'

    // Navegar para cadastro de Safra
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // botao adicionar safra
    cy.getVisible(locSafra.dashboard.btnNovaSafra).click()

    // descricao safra
    cy.getVisible(locSafra.cadastroSafra.descricaoSafra)
      .type(seddTestSafra.descricao)

    // periodo inicial
    cy.getVisible(locSafra.cadastroSafra.periodoInicial)
      .clear().type(seddTestSafra.periodoInicial)

    // periodo final
    cy.getVisible(locSafra.cadastroSafra.periodoFinal)
      .clear().type(seddTestSafra.periodoFinal)

    // botao adicionar
    cy.getVisible(locSafra.cadastroSafra.btnSalvar).click()
    cy.get(locSafra.cadastroSafra.btnSalvar)
      .should('not.exist')

    // titulo do card
    cy.get(locSafra.dashboard.nomeSafra)
      .and('contain', seddTestSafra.descricao)
  }

  /**
   * Metodo para realizar a pesquisa por uma safra
   * @param {*} seddTestSafra
   */
  validarDashboard(seddTestSafra) {
    const url = '/atividade-agricola/safra'
    const locatorTituloPagina = locSafra.dashboard.titulo
    const tituloPagina = 'Cadastro de safras'

    // Navegar para cadastro de Safra
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // input pesquisar
    cy.get(locSafra.dashboard.pesquisarSafra)
      .clear().type(seddTestSafra.descricao)

    // card safra
    cy.get(locSafra.dashboard.nomeSafra)
      .and('contain', seddTestSafra.descricao)
  }
}

export default new Safra()
