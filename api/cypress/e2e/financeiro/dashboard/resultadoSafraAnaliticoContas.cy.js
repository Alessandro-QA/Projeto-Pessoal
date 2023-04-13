/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('POST - /api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas - Resultado da Safra Analítico Contas', () => {
            it('CT1 - Deve buscar Resultado da Safra Analítico Contas - Com saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar Resultado da Safra Analítico Contas - Sem saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar Resultado da Safra Analítico Contas - Com documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/bodyCt3.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT4 - Deve buscar Resultado da Safra Analítico Contas - Sem documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/payloadCt4.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/bodyCt4.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
