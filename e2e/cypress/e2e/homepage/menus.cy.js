/// <reference types="cypress" />

const description = require('../../fixtures/homepage/menus.description')
const Menus = require('../../support/commands/homepage/menus')

context('Homepage', () => {
    context('Menus', () => {
        describe('Validar botões do Menu do sistema e a listagem de rotinas dentro do menu cada módulo', () => {

            it('CT1 - Menu Homepage', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.acessarHome()
                Menus.validarDashboard()
            })

            it('CT2 - Menu Atividades Agrícolas', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarAtividadesAgricolas()
                
            })

            it('CT3 - Menu Maquinários', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarMaquinarios()
               
            })

            it('CT4 - Menu Suprimentos', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarSuprimentos()
               
            })

            it('CT5 - Menu Produção', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarProducao()
                
            })

            it('CT6 - Menu Financeiro', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarFinanceiro()
             
            })

            it('CT7 - Menu Resultados', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarResultados()
                
            })

            it('CT8 - Menu NF-e', () => {

                Menus.voltarHome()
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarNfe()
            
            })
        })
    })
})