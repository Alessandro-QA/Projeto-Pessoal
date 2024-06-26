/// <reference types="cypress" />

const locMenus = require('../../locators/homepage/locators-menus')

class Menus {

  validarDashboard() {
    const url = '/home'
    const locatorTituloPagina = locMenus.titulos.titulo
    const tituloPagina = 'Dashboard geral'

    // Navegar para página de dashboard geral (home)
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Iterar sobre cada chave (botão) dentro de locators.botoes
    Object.keys(locMenus.botoes).forEach((buttonKey) => {
      const buttonSelector = locMenus.botoes[buttonKey]

      // Verificar se o botão está presente na página
      cy.get(buttonSelector).should('be.visible')
    });
  }

  validarAtividadesAgricolas() {
    // Clicar no botão de Atividades Agrícolas para abrir o sub-menu
    cy.get(locMenus.botoes.atividadeAgricola).click()
    cy.wait(1500)

    // Iterar sobre cada chave (botão) dentro de locators.botoesAtividadesAgricolas
    Object.keys(locMenus.botoesAtividadesAgricolas).forEach((buttonKey) => {
      const buttonSelector = locMenus.botoesAtividadesAgricolas[buttonKey]

      // Verificar se o botão está presente na página
      cy.get(buttonSelector).should('be.visible');
    });

    // Simula o hover ao passar sobre o botão "Painéis" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Painéis')
    .trigger('mouseover')
    .should('be.visible')
    .within(() => {
      // Validar as opções dentro do menu
      cy.get('.submenu-holder a').contains('Atividades do Campo').should('be.visible')
    });

    /*// Simula o hover ao passar sobre o botão "Cadastros"
    cy.get('div.el-tooltip:contains("Cadastros")').trigger('mouseover');

    // Aguarda até que o menu de opções esteja visível
    cy.get('div.el-tooltip__popper').should('be.visible').within(() => {
      // Validar as opções dentro do menu
      
    }); */
  }
}

export default new Menus()
