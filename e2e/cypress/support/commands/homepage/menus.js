/// <reference types="cypress" />

const locMenus = require('../../locators/homepage/locators-menus')

class Menus {

  validarDashboard() {
    const url = '/home'
    const locatorTituloPagina = locMenus.titulos.titulo
    const tituloPagina = 'Dashboard geral'

    // Navega para página de dashboard geral (home)
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Itera sobre cada chave (botão) dentro de locators.botoes
    Object.keys(locMenus.botoes).forEach((buttonKey) => {
      const buttonSelector = locMenus.botoes[buttonKey]

      // Verifica se o botão está presente na página
      cy.get(buttonSelector)
        .should('be.visible')
    });
  }

  validarAtividadesAgricolas() {
    // Clica no botão de Atividades Agrícolas para abrir o sub-menu
    cy.get(locMenus.botoes.atividadeAgricola).click()

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get(locMenus.menu.menuAtivo).within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperados.botoesAtividadesAgricolas;

      // Itera sobre cada elemento <a> dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains('a', valor)
          .should('be.visible')
          .should('have.text', valor); // Verifica se o valor está presente e visível
      })
    })

    cy.desabilitarPopUpNotificacao()

    // Simula o hover ao passar sobre o botão "Painéis" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Painéis')
      .should('be.visible')
      .trigger('mouseenter')

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get('div.submenu-holder').within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperados.listaPaineis

      // Itera sobre cada elemento <a> dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains('a', valor).should('be.visible'); // Verifica se o valor está presente e visível
      })
    })

    // Simula o hover ao passar sobre o botão "Cadastros" e aguarda até que o menu de opções esteja visível 
    cy.get(locMenus.menu.menuAtivo).contains('Cadastros')
      .should('be.visible')
      .trigger('mouseenter')

    // Localiza o elemento pai que contém todos os elementos <a> do submenu
    cy.get('div.submenu-holder').within(() => {

      // Pega os textos esperados do arquivo de locators
      const valoresEsperados = locMenus.textosEsperados.listaCadastros

      // Itera sobre cada elemento <a> dentro do submenu e verifica se contém o texto esperado
      valoresEsperados.forEach(valor => {
        cy.contains('a', valor).should('be.visible'); // Verifica se o valor está presente e visível
      })
    })
  }
}

export default new Menus()
