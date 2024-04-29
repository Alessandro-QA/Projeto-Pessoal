/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('POST - /api/financeiro/v1/Dashboard/ExportarResultadoAnaliticoSafraCSV - Obtém o arquivo CSV do Resultado Analítico da Safra', () => {
            it('CT1 - Deve exportar arquivo CSV', () => {
                cy.fixture('financeiro/dashboard/exportarResultadoAnaliticoSafraCSV/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ExportarResultadoAnaliticoSafraCSV', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/exportarResultadoAnaliticoSafraCSV/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
