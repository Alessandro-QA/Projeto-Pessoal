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

    // Iterar sobre cada chave (botão) dentro de locators.botoesAtividadesAgricolas
    Object.keys(locMenus.botoesAtividadesAgricolas).forEach((buttonKey) => {
      const buttonSelector = locMenus.botoesAtividadesAgricolas[buttonKey]

      // Verificar se o botão está presente na página
      cy.get(buttonSelector).should('be.visible');
    });

    cy.desabilitarPopUpNotificacao()

    // Simula o hover ao passar sobre o botão "Painéis" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Cadastro')
      .should('be.visible')
      .trigger('mouseenter')

    // Aguarde até que o elemento <a> dentro do div submenu-holder esteja visível
    //cy.get('div.submenu-holder a')
     // .should('be.visible'); // Verifica se o link <a> dentro do div submenu-holder está visível na tela

    // Localize o elemento pai que contém todos os elementos <a> do submenu
    cy.get('div.submenu-holder').within(() => {
      // Lista dos valores esperados dentro dos elementos <a>
      const valoresEsperados = [
        'Ciclo', 'Conta Contábil', 'Conversões de unidade', 'Cultura', 'Detentora',
        'Empresas', 'Fazendas', 'Material', 'Perfis', 'Pessoas', 'Safra', 'Talhão',
        'Und. de Armazenamento', 'Und. de Medida', 'Usuários', 'Variedade'
      ];

      // Itera sobre cada elemento <a> dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains('a', valor).should('be.visible'); // Verifica se o valor está presente e visível
      });
    });

      cy.get(locMenus.menu.menuAtivo).within(() => {
        // Lista dos valores esperados dentro dos elementos <a>
        const valoresEsperados = [
          'Dashboard ', 'Planejamento'
        ];
  
        // Itera sobre cada elemento <a> dentro do submenu e verifica se contém o texto esperado
        valoresEsperados.forEach(valor => {
          cy.contains(valor).should('be.visible').should('have.text', valor); // Verifica se o valor está presente e visível
        });
    });

  }
}

export default new Menus()
