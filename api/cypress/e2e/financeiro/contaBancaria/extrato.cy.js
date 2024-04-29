/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe('GET - /api/financeiro/v1/ContaBancaria/Extrato - Obtém extrato da Conta Bancária', () => {
            it('CT1 - Deve obter extrato por empresa e data', () => {
                cy.fixture('financeiro/contaBancaria/extrato/paramsCt1.json').then((params) => {
                    cy.postRequestWhitParams('/api/financeiro/v1/ContaBancaria/Extrato', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            cy.fixture('financeiro/contaBancaria/extrato/bodyCt1.json').then((body) => {
                                expect(response.body).to.deep.equal(body)
                            })
                        })
                })
            })
        })
    })
})