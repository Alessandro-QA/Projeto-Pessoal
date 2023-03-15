/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/RelatorioCategoria{params} - Relatório de Movimentações por Categoria', () => {
            it('CT1 - Deve buscar Relatório de Movimentações por Categoria - Pagamento', () => {
                cy.fixture('financeiro/dashboard/relatorioCategoria/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/RelatorioCategoria', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/relatorioCategoria/bodyCt1.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })

            it('CT2 - Deve buscar Relatório de Movimentações por Categoria - Recebimento', () => {
                cy.fixture('financeiro/dashboard/relatorioCategoria/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/RelatorioCategoria', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            cy.fixture('financeiro/dashboard/relatorioCategoria/bodyCt2.json').then((body) => {
                                expect(response.body).to.be.eql(body)
                            })
                        })
                })
            })
        })
    })
})
