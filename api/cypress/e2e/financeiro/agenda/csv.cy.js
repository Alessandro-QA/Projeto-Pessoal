/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {
        describe('POST - /api/financeiro/v1/Agenda/CSV - CSV', () => {

            it('CT1 Deve haver CSV de Todas as Empresas', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCT1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/Listagem', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            expect(response.body.data).to.exist
                            expect(response.body.data).to.not.be.null
                            // expect(response.body.totalItems).to.equal(response.body.data.length)
                        })
                })
            })

            it('CT2 Deve haver CSV de Todos os Titulos Pagos', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCT1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/Listagem', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            expect(response.body.data).to.exist
                            expect(response.body.data).to.not.be.null
                        })
                })
            })
        })
    })
})
