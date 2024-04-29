/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('POST - /api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos - Resultado da Safra Analítico Ciclos', () => {
            it('CT1 - Deve buscar Resultado da Safra Analítico Ciclos - Com saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar Resultado da Safra Analítico Ciclos - Sem saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT3 - Deve buscar Resultado da Safra Analítico Ciclos - Com documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/bodyCt3.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT4 - Deve buscar Resultado da Safra Analítico Ciclos - Sem documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/payloadCt4.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                            cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/bodyCt4.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
