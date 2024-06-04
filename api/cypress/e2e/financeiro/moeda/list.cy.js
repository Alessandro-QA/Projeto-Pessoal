/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Moeda', () => {
        describe('POST - /api/financeiro/v1/Moeda/List - Obtém moedas ativas', () => {

            it('CT1 - Obter todas as moedas ativas', () => {
                cy.postRequest('/api/financeiro/v1/Moeda/List', {})
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.data).to.be.an('array').that.is.not.empty
                        cy.fixture('financeiro/moeda/list/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })

            it('CT2 - Verificar se todas as moedas estão ativas', () => {
                cy.postRequest('/api/financeiro/v1/Moeda/List', {})
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.data).to.be.an('array').that.is.not.empty

                        response.body.data.forEach((moeda) => {
                            expect(moeda.ativo).to.be.true
                        })
                    })
            })
        })
    })
})



