/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {
        describe('POST - api/financeiro/v1/Agenda/ExportarAgendaFinanceiraTituloCiclosCsv- Titulo Ciclos Csv', () => {

            it.only('CT1 Deve Exportar Agenda de Titulos entre Ciclos', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/exportarAgendaFinanceiraTituloCiclosCsv', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null
                            //expect(response.body.data).to.exist
                            expect(response.body.data).to.not.be.null
                        })
                })
            })
        })
    })
})
