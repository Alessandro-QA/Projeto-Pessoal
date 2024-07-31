/// <reference types='Cypress' />

//const description = require('../../../fixtures/controleClimatico/previsaoClimatica/list/list.description');
import { validateAcompanhamento } from '../../../fixtures/atividadeAgricola/acompanhamentoCampo/validation'

context('Atividade Agrícola', () => {
    context('Acompanhamento de Campo', () => {
        describe(`GET/PUT - ${Cypress.env('atividadeAgricola')}/AcompanhamentoCampo - Ver Detalhes e Atualizar Dados de Acompanhamento do Talhão`, () => {
            it('CT1 - Recuperar dados de Acompanhamento de Campo de Talhão Específico', () => {

                //cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')
                
                cy.fixture('atividadeAgricola/acompanhamentoCampo/acompanhamentoCampo/payloadCt1.json').then((payload) => {
                    cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('atividadeAgricola')}/AcompanhamentoCampo/${payload.id}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validateAcompanhamento(response.body.data)

                        })
                })
            })

            it('CT2 - Atualizar Dados Talhão Expecífico', () => {

                //cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')
                
                cy.fixture('atividadeAgricola/acompanhamentoCampo/acompanhamentoCampo/payloadCt1.json').then((payload) => {
                    cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('atividadeAgricola')}/AcompanhamentoCampo/${payload.id}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            //validateAcompanhamento(response.body.data)

                        })
                })
            })
        })
    })
})