/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/Pendentes{params} - Pendentes', () => {
            it('CT1 - Deve buscar recebimentos ou pagamentos pendentes por empresa e data', () => {
                cy.fixture('financeiro/dashboard/pendentes/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/Pedentes', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
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
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            // Verificando se os campos esperados estão presentes no response.body
                            expect(response.body).to.have.property('pagamento')
                            expect(response.body).to.have.property('recebimento')

                            // Verificando os campos dentro de 'pagamento'
                            expect(response.body.pagamento).to.have.property('valor')
                            expect(response.body.pagamento).to.have.property('quantidadeTitulos')
                            expect(response.body.pagamento).to.have.property('proximosSeteDias')
                            expect(response.body.pagamento).to.have.property('proximosQuinzeDias')

                            // Verificando os campos dentro de 'recebimento'
                            expect(response.body.recebimento).to.have.property('valor')
                            expect(response.body.recebimento).to.have.property('quantidadeTitulos')
                            expect(response.body.recebimento).to.have.property('proximosSeteDias')
                            expect(response.body.recebimento).to.have.property('proximosQuinzeDias')

                            // Verificando o tipo dos campos em 'pagamento'
                            expect(response.body.pagamento.valor).to.be.a('number')
                            expect(response.body.pagamento.quantidadeTitulos).to.be.a('number')
                            expect(response.body.pagamento.proximosSeteDias).to.be.a('number')
                            expect(response.body.pagamento.proximosQuinzeDias).to.be.a('number')

                            // Verificando o tipo dos campos em 'recebimento'
                            expect(response.body.recebimento.valor).to.be.a('number')
                            expect(response.body.recebimento.quantidadeTitulos).to.be.a('number')
                            expect(response.body.recebimento.proximosSeteDias).to.be.a('number')
                            expect(response.body.recebimento.proximosQuinzeDias).to.be.a('number')
 
                        })
                })
            })

            it('CT3 - Deve buscar recebimentos ou pagamentos pendentes por empresa', () => {
                cy.fixture('financeiro/dashboard/pendentes/paramsCt3.json').then((payload) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/Pedentes', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
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
