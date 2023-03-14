/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('Resultado da Safra - POST - /api/financeiro/v1/Dashboard/ResultadoSafra', () => {
            it('CT1 - Deve buscar Resultado da Safra - Com saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafra/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/resultadoSafra/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar Resultado da Safra - Sem saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafra/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/resultadoSafra/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar Resultado da Safra - Com documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafra/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/resultadoSafra/bodyCt3.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT4 - Deve buscar Resultado da Safra - Sem documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafra/payloadCt4.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/resultadoSafra/bodyCt4.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
