/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {
        describe('POST - /api/financeiro/v1/Agenda/Listagem - Listagem da agenda Financeira', () => {

            it('CT1 Deve Obter Listagem da agenda Financeira', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt1.json').then((payload) => {
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

            it('CT2 Deve Obter listagem de Titulos a Pagar', () => {
                cy.fixture('financeiro/agenda/listagem/payloadCt2.json').then((payload) => {
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
                });
            })
        })

        it('CT3 Deve Obter listagem de Titulos Pagos', () => {
            cy.fixture('financeiro/agenda/listagem/payloadCt3.json').then((payload) => {
                cy.postRequest('/api/financeiro/v1/Agenda/Listagem', payload)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                        expect(response.status).to.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null
                        expect(response.body.data).to.exist
                        expect(response.body.data).to.not.be.null
                        //expect(response.body.totalItems).to.equal(response.body.data.length)
                    })
            })
        })
    })

    it('CT4 Deve Obter listagem de Titulos Recebidos', () => {
        cy.fixture('financeiro/agenda/listagem/payloadCt4.json').then((payload) => {
            cy.postRequest('/api/financeiro/v1/Agenda/Listagem', payload)
                .then((response) => {
                    expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))
                    expect(response.status).to.equal(200)
                    expect(response.body).to.exist
                    expect(response.body).to.not.be.null
                    expect(response.body.data).to.exist
                    expect(response.body.data).to.not.be.null
                    //expect(response.body.totalItems).to.equal(response.body.data.length)
                })
        })
    })

    it('CT5 Deve Obter listagem de Titulos por Pessoa', () => {
        cy.fixture('financeiro/agenda/listagem/payloadCt5.json').then((payload) => {
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
