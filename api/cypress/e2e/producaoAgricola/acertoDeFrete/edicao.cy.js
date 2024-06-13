/// <reference types='Cypress' />

context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        context(`PUT - ${Cypress.env('producaoAgricola')}/AcertoFretes - Edição`, () => {
            describe('Pendente', () => {
                it('CT1 - Deve editar Acerto Com Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/edicao/pendente/payloadCt1.json').then((payload) => {
                        cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes`, payload)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)
                                expect(response.body.data).not.be.null
                                expect(response.body.success).to.equal(true)
                                expect(response.body.data.id).not.be.null
                                expect(response.body.data.id).to.equal('5c6ba425-b9ab-4e41-b76b-eeefc708b4eb')
                                expect(response.body.data.numero).to.equal(19)
                                expect(response.body.data.despesas).not.be.null
                            })
                    })
                })

                it('CT2 - Deve editar Acerto Sem Despesas vinculadas', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/edicao/pendente/payloadCt2.json').then((payload) => {
                        cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes`, payload)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).to.equal(200)
                                expect(response.body.data).not.be.null
                                expect(response.body.success).to.equal(true)
                                expect(response.body.data.id).not.be.null
                                expect(response.body.data.id).to.equal('9c43f216-d82c-460f-a9c3-1127abd9da55')
                                expect(response.body.data.numero).to.equal(17)
                                expect(response.body.data.despesas).be.empty
                            })
                    })
                })
            })
        })
    })
})