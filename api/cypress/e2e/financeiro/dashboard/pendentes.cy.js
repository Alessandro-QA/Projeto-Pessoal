/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/Pendentes{params} - Pendentes', () => {
            it('CT1 - Deve buscar recebimentos ou pagamentos pendentes por empresa e data', () => {
                cy.fixture('financeiro/dashboard/pendentes/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/Pedentes', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/pendentes/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar recebimentos ou pagamentos pendentes por data', () => {
                cy.fixture('financeiro/dashboard/pendentes/paramsCt2.json').then((payload) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/Pedentes', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/pendentes/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar recebimentos ou pagamentos pendentes por empresa', () => {
                cy.fixture('financeiro/dashboard/pendentes/paramsCt3.json').then((payload) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/Pedentes', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/pendentes/bodyCt3.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
