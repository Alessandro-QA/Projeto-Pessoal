/// <reference types="cypress" />

import locConsultaExtrato from '../../../../locators/funcionalidades/suprimentos/consultas/locators-extrato-materiais.js'

class ExtratoMateriais {
  /**
   * Valida o dashboard de extrato de materiais
   * @param {} seedTest
   * */
  validarExtratoMateriais(seedTest) {
    const url = '/suprimentos/extrato'
    const locatorTituloPagina = locConsultaExtrato.titulo
    const tituloPagina = 'Extrato de Materiais'

    cy.intercept('POST', 'https://daas.dev.conexa.com.br/api/material/v1/material/ListView').as('listMateriais')

    // Navegar para cadastro de colheita
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.wait('@listMateriais')

    // // Selecionar material
    cy.getVisible(locConsultaExtrato.selectMaterial).click()
      .get(locConsultaExtrato.pesquisarMaterial).type(seedTest.material)
      .get(locConsultaExtrato.listaMateriais).contains(seedTest.material).click({ force: true })

    // // Selecionar unidade armazenamento
    cy.getVisible(locConsultaExtrato.selectUnidadadeArmazenamento).click()
      .contains(seedTest.unidadeArmazenamento).click({ force: true })

    // Filtrar por origem e tipo
    cy.get(locConsultaExtrato.btnFiltros).click().then(() => {
      cy.get(locConsultaExtrato.selectOrigem)
        .click().contains(seedTest.origemFiltro).click()
      cy.get(locConsultaExtrato.selectTipoMovimentacao)
        .click().contains(seedTest.tipoFiltro).click()
    })

    // Validar quantidade atual
    cy.get(locConsultaExtrato.spanQuantidadeAtual).should(($el) => {
      expect($el).to.contain.text(seedTest.quantidadeAtual)
    })

    // Validar que o campo dos cards esteja preenchido
    if (seedTest.cardVazio === true) {
      cy.getVisible(locConsultaExtrato.spanStatus).should(($el) => {
        expect($el).to.contain.text(seedTest.statusVazio)
      })
    } else {
      // Validar origem
      cy.get(locConsultaExtrato.spanOrigem).should(($el) => {
        expect($el).to.contain.text(seedTest.origem)
      })

      // Validar tipo
      cy.get(locConsultaExtrato.spanTipo).should(($el) => {
        expect($el).to.contain.text(seedTest.tipo)
      })

      // Validar quantidade
      cy.get(locConsultaExtrato.spanQuantidade).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidade)
      })

      // Validar quantidade estoque
      cy.get(locConsultaExtrato.spanQuantidadeEstoque).should(($el) => {
        expect($el).to.contain.text(seedTest.quantidadeEstoque)
      })

      // Validar valor unitario
      cy.get(locConsultaExtrato.spanValorUnitario).should(($el) => {
        expect($el).to.contain.text(seedTest.valorUnitario)
      })

      // Validar total
      cy.get(locConsultaExtrato.spanTotal).should(($el) => {
        expect($el).to.contain.text(seedTest.total)
      })

      // Validar valor estoque
      cy.get(locConsultaExtrato.spanValorEstoque).should(($el) => {
        expect($el).to.contain.text(seedTest.valorEstoque)
      })

      // Validar preco medio
      cy.get(locConsultaExtrato.spanPrecoMedio).should(($el) => {
        expect($el).to.contain.text(seedTest.precoMedio)
      })
    }
  }
}

export default new ExtratoMateriais()
