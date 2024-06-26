/// <reference types="cypress" />

//const description = require('');
const Menus = require('../../support/commands/homepage/menus');

context('Homepage', () => {
    context('Menus', () => {
        describe('Validar botões do Menu do sistema e a listagem de rotinas dentro do menu cada módulo', () => {

            it.only('CT1 - Menu Atividades Agrícolas', () => {

                //cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');
                Menus.validarDashboard();
                Menus.validarAtividadesAgricolas();
            })

        })
    })
})