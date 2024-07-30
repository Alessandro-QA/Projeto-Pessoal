/// <reference types='Cypress' />

const description = require('../../fixtures/conversorUnidadeMedida/converterUnidadeMedida/converterUnidadeMedida.description')

context('Conversor Unidade Medida', () => {
    context('Converter Unidade de Medida', () => {
        describe(`POST - ${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida/ConverterUnidade- Realiza Conversão de Unidades de Medida`, () => {
            it('CT1 - Realiza Conversão de Unidade de Medida', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('conversorUnidadeMedida/converterUnidadeMedida/payloadCt1.json').then((payload) => {

                    cy.postRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('conversorUnidadeMedida')}/ConversorUnidadeMedida/ConverterUnidade`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            const responseData = response.body.data
                            responseData.forEach(item => {
                                expect(item).to.have.property('codigoUnidadeOrigem').that.is.a('string')
                                expect(item).to.have.property('quantidadeUnidadeOrigem').that.is.a('number')
                                expect(item).to.have.property('codigoUnidadeDestino').that.is.a('string')
                                expect(item).to.have.property('quantidadeUnidadeDestino').that.is.a('number')
                            })
                        })
                })
            })
        })
    })
})