/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe('GET - /api/financeiro/v1/ContaBancaria/Principal - Obtém a Conta Bancária Principal', () => {
            it('CT1 - Deve obter a conta principal', () => {
                cy.getRequest('/api/financeiro/v1/ContaBancaria/Principal')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        cy.fixture('financeiro/contaBancaria/principal/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })
        })
    })
})
