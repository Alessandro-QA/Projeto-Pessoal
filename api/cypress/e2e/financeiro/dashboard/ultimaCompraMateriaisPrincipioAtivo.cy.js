/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/UltimaCompraMateriaisPrincipioAtivo{params} - Historico de Compra Material Listagem', () => {
            it('CT1 - Deve buscar Ultima Compra de Material com Mesmo Principio Ativo', () => {
                cy.fixture('financeiro/dashboard/ultimaCompraMateriaisPrincipioAtivo/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/UltimaCompraMateriaisPrincipioAtivo', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                           
                        })
                })
            })
        })
    })
})
