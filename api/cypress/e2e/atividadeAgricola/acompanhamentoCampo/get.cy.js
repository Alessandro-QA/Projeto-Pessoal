/// <reference types='Cypress' />

const description = require('../../../fixtures/atividadeAgricola/acompanhamentoCampo/get/get.description')
import { validateAcompanhamento } from '../../../fixtures/atividadeAgricola/acompanhamentoCampo/validation'

context('Atividade Agrícola', () => {
    context('Acompanhamento de Campo', () => {
        describe(`POST - ${Cypress.env('atividadeAgricola')}/AcompanhamentoCampo/Get - Obtém a Lista de Talhões Por Fazenda`, () => {
            it('CT1 - Obter Lista filtrada por Fazenda/Safra/Ciclo (Filtros Obrigatórios)', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')
                
                cy.fixture('atividadeAgricola/acompanhamentoCampo/get/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('atividadeAgricola')}/AcompanhamentoCampo/Get`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            response.body.data.forEach(acompanhamento => {
                                // Chama a função de validação importada
                                validateAcompanhamento(acompanhamento)
                              })
                        })
                })
            })
        })
    })
})
