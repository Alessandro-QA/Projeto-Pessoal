/// <reference types='Cypress' />resultadoSafra

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('POST - /api/financeiro/v1/Dashboard/DetalhesResultadoAnaliticoSafra - Detalhes do Resultado Analítico da Safra', () => {
            it('CT1 - Deve buscar Detalhes - Com saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/detalhesResultadoAnaliticoSafra/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/DetalhesResultadoAnaliticoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/detalhesResultadoAnaliticoSafra/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar Detalhes - Sem saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/detalhesResultadoAnaliticoSafra/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/DetalhesResultadoAnaliticoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/detalhesResultadoAnaliticoSafra/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar Detalhes - Com documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/detalhesResultadoAnaliticoSafra/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/DetalhesResultadoAnaliticoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/detalhesResultadoAnaliticoSafra/bodyCt3.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT4 - Deve buscar Detalhes - Sem documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/detalhesResultadoAnaliticoSafra/payloadCt4.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/DetalhesResultadoAnaliticoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/detalhesResultadoAnaliticoSafra/bodyCt4.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
