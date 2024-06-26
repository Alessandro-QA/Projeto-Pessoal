/// <reference types="cypress" />

const locCiclo = require('../../../../locators/atividades-agricolas/cadastros/locators-cadastro-ciclo.js');

class Ciclo {
  /**
   * Método para cadastrar um novo ciclo
   * @param {} seedTestCiclo
   */
  cadastrar(seedTestCiclo) {
    const url = '/atividade-agricola/ciclo'
    const locatorTituloPagina = locCiclo.dashboard.titulo
    const tituloPagina = 'Cadastro de ciclos de produção'

    // Navegar para cadastro de Ciclos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)
    
    cy.desabilitarPopUpNotificacao()

    cy.getVisible(locCiclo.dashboard.adicionarCiclo).click()

    // Selecionar safra
    cy.get(locCiclo.ciclo.safra).click()
      .contains(seedTestCiclo.safra).click()

    // Selecionar cultura
    cy.getVisible(locCiclo.ciclo.cultura).click()
      .contains(seedTestCiclo.cultura).click()

    // nome da safra
    cy.getVisible(locCiclo.ciclo.nome).clear().type(seedTestCiclo.nomeSafra)

    // valorizacao
    cy.getVisible(locCiclo.ciclo.valorizacao).clear().type(seedTestCiclo.valorizacao)

    // botao salvar
    cy.getVisible(locCiclo.ciclo.btnAdicionar).click()

    cy.get(locCiclo.ciclo.btnAdicionar)
      .should('not.exist')

    cy.get(locCiclo.dashboard.titleCardCiclo).contains(seedTestCiclo.nomeSafra)
    
  }

  /**
   * Metodo para realizar a pesquisa de um ciclo
   * @param {} seedTestCiclo
   */
  validarDashboard(seedTestCiclo) {
    const url = '/atividade-agricola/ciclo'
    const locatorTituloPagina = locCiclo.dashboard.titulo
    const tituloPagina = 'Cadastro de ciclos de produção'

    // Navegar para cadastro de Ciclos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // input pesquisar
    cy.getVisible(locCiclo.dashboard.pesquisarCiclo).clear().type(seedTestCiclo.nomeSafra)

    // card safra
    cy.get(locCiclo.dashboard.titleCardCiclo).contains(seedTestCiclo.nomeSafra)
  }
}

export default new Ciclo()
