/// <reference types="cypress" />

const locDashboard = require('../../locators/homepage/locators-homepage.js');

class Homepage {

  validarDashboard() {
    const url = '/home'
    const locatorTituloPagina = locDashboard.titulos.titulo
    const tituloPagina = 'Dashboard geral'

    // Navegar para cadastro de Ciclos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Iterar sobre cada chave (botão) dentro de locators.botoes
    Object.keys(locDashboard.botoes).forEach((buttonKey) => {
      const buttonSelector = locDashboard.botoes[buttonKey];

      // Verificar se o botão está presente na página
      cy.get(buttonSelector).should('exist');
    });
  }
}

export default new Homepage()
