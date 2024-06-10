/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Enum', () => {
        describe('GET - /api/financeiro/v1/Enum/FilterOrigemLivroCaixa - Obtém todos os registros do Enum FilterOrigemLivroCaixa', () => {

            it('CT1 - Obtém todos os registros do Enum FilterOrigemLivroCaixa', () => {
                cy.getRequest('/api/financeiro/v1/enum/filterOrigemLivroCaixa')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body).to.be.an('array').that.is.not.empty
                        cy.fixture('financeiro/enum/origemLivroCaixa/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })
        })
    })
})