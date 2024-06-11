/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Agenda', () => {

        describe('POST - api/financeiro/v1/Agenda/Relatorio - Relatorio', () => {
            it('CT1 Deve Haver relatorio com todos os Titulos', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/relatorio', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                        })
                })
            })

            it('CT2 Deve Haver relatorio de Titulos a pagar', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/relatorio', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                        })
                })
            })

            it('CT3 Deve Haver relatorio de Titulos recebidos', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/relatorio', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                        })
                })
            })

            it('CT4 Deve Haver relatorio de Titulos Parcialmente Recebido', () => {
                cy.fixture('financeiro/agenda/relatorio/payloadCt4.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Agenda/relatorio', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'));
                            expect(response.status).to.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.have.property('success', true);

                        })
                })
            })
        })
    })
})
