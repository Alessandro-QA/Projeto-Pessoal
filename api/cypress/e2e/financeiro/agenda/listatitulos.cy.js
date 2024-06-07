/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {

        describe('POST - / api/financeiro/v1/Agenda/ListTitulos - Listagem da agenda Financeira', () => {
            it('CT1 Deve Obter Listagem de Titulos', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCT1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/ListTitulos', payload)
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
            it('CT2 Deve Obter Listagem de Titulos a Pagar', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCT1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/ListTitulos', payload)
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
            it('CT3 Deve Obter Listagem de Titulos Pagos', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCT1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/ListTitulos', payload)
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
            it('CT4 Deve Obter Listagem de Titulos Recebidos', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCT1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/ListTitulos', payload)
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
            it('CT5 Deve Obter Listagem de Titulos por Pessoas', () => {
                cy.fixture('financeiro/agenda/listatitulos/payloadCT1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/ListTitulos', payload)
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
