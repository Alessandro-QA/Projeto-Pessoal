/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe('GET - /api/financeiro/v1/ContaBancaria/{id} - Obtém uma conta bancária por ID', () => {
            it('CT1 - Deve obter contas bancária por ID', () => {
                cy.getRequest('/api/financeiro/v1/ContaBancaria/745a3fa9-87f5-4dce-9732-966c30d44186')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        cy.fixture('financeiro/contaBancaria/contaBancariaId/bodyCt1.json').then((body) => {
                            expect(response.body).to.deep.equal(body)
                        })
                    })
            })
        })

        describe('DELETE - /api/financeiro/v1/ContaBancaria/{id} - Exclui uma conta bancária por ID', () => {
            it('CT1 - Deve excluir Conta Bancária', () => {
                cy.fixture('financeiro/contaBancaria/contaBancariaId/payloadCt2.json').then((payload) => {
                    cy.section('Cadastrar conta bancária para exclusão')
                    cy.postRequest('/api/financeiro/v1/ContaBancaria', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body.success).to.equal(true)
                            expect(response.body.data).to.be.not.null
                            expect(response.body.data.id).to.be.not.null

                            cy.section('Deletar conta cadastrada')
                            const id = response.body.data.id
                            const assertResponse = { "success": true, "data": true }

                            cy.deleteRequest('/api/financeiro/v1/ContaBancaria', id).then((response) => {
                                expect(response.body).to.deep.equal(assertResponse)
                            })
                        })
                })
            })
        })
    })
})
