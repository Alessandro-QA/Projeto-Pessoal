/// <reference types="cypress" />

const locMenus = require('../../locators/homepage/locators-menus');

class Menus {

    validarDashboard() {
        const url = '/home'
        const locatorTituloPagina = locMenus.titulos.titulo
        const tituloPagina = 'Dashboard geral'
    
        // Navegar para cadastro de Ciclos
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
    
        // Iterar sobre cada chave (botão) dentro de locators.botoes
        Object.keys(locMenus.botoes).forEach((buttonKey) => {
          const buttonSelector = locMenus.botoes[buttonKey];
    
          // Verificar se o botão está presente na página
          cy.get(buttonSelector).should('exist');
        });
      }

      validarAtividadesAgricolas() {
   //dar click sobre o botão principal de atv agr (locators)
// verificar se cada botão dentro do menu de atv agricola existe
    //=
        // Iterar sobre cada chave (botão) dentro de locators.botoes
        Object.keys(locMenus.botoes).forEach((buttonKey) => {
          const buttonSelector = locMenus.botoes[buttonKey];
    
          // Verificar se o botão está presente na página
          cy.get(buttonSelector).should('exist');
        });

//passar o mouse sobre cada botao do sub-meu atv agricola
//validar a lista de rotinas

      }
}

export default new Menus();
