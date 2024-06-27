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
                Menus.voltarHome()
            })

            it('CT3 - Menu Maquinários', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarMaquinarios()
                Menus.voltarHome()
            })

            it('CT4 - Menu Suprimentos', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarSuprimentos()
                Menus.voltarHome()
            })

            it('CT5 - Menu Produção', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarProducao()
                Menus.voltarHome()
            })

            it('CT6 - Menu Financeiro', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarFinanceiro()
                Menus.voltarHome()
            })

            it('CT7 - Menu Resultados', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarResultados()
                Menus.voltarHome()
            })

            it('CT8 - Menu NF-e', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical')
                Menus.validarNfe()
                Menus.voltarHome()
            })
        })
    })
})