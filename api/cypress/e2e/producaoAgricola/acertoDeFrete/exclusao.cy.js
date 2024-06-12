/// <reference types='Cypress' />

context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        context(`DELETE - ${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes - Exclusão`, () => {
            describe('Pendente', () => {
                it('CT1 - Deve deletar acerto pendente', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/exclusao/payloadCt1.json').then((payload) => {
                        cy.step('Cadastrar Acerto para deleção')
                        cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes`, payload)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)
                                expect(response.body.data).to.be.not.null
                                expect(response.body.data.id).to.be.not.null
                                expect(response.body.success).to.equal(true)

                                cy.step('Deletar Acerto Criado')
                                const id = response.body.data.id
                                const assertResponse = { "success": true, "data": true }

                                cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes`, id).then((response) => {
                                    expect(response.body).to.deep.equal(assertResponse)
                                })
                            })
                    })
                })
            })
        })
    })
})