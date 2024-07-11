/// <reference types="cypress" />

const description = require('../../fixtures/homepage/menus.description')
const Menus = require('../../support/commands/homepage/menus')

context('Homepage', () => {
    context('Menus', () => {
        describe('Validar botões do Menu do sistema e a listagem de rotinas dentro do menu cada módulo', () => {

            it('CT1 - Menu Homepage', { retries: { runMode: 3, openMode: 3, }, }, function () {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.acessarHome()
                Menus.validarDashboard()
            })

            it('CT2 - Menu Atividades Agrícolas', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('critical')
                Menus.validarAtividadesAgricolas()
                
            })

            it('CT3 - Menu Maquinários', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct3).allureSeverity('critical')
                Menus.validarMaquinarios()
               
            })

            it('CT4 - Menu Suprimentos', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct4).allureSeverity('critical')
                Menus.validarSuprimentos()
               
            })

            it('CT5 - Menu Produção', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct5).allureSeverity('critical')
                Menus.validarProducao()
                
            })

            it('CT6 - Menu Financeiro', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct6).allureSeverity('critical')
                Menus.validarFinanceiro()
             
            })

            it('CT7 - Menu Resultados', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct7).allureSeverity('critical')
                Menus.validarResultados()
                
            })

            it('CT8 - Menu NF-e', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct8).allureSeverity('critical')
                Menus.validarNfe()
            
            })
        })
    })
})