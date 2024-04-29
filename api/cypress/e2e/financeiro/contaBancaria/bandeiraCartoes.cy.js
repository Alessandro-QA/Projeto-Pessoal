/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe('GET - /api/financeiro/v1/ContaBancaria/BandeiraCartoes - Obtém as Bandeiras de Cartões', () => {
            it('CT1 - Deve obter as Bandeiras de Cartões', () => {
                cy.getRequest('/api/financeiro/v1/ContaBancaria/BandeiraCartoes')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        cy.fixture('financeiro/contaBancaria/bandeiraCartoes/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })
        })
    })
})
