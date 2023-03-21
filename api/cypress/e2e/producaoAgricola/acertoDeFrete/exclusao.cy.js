/// <reference types='Cypress' />

context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        context('DELETE - /api/producao-agricola/v1/AcertoFretes - Exclusão', () => {
            describe('Pendente', () => {
                it('CT1 - Deve deletar acerto pendente', () => {
                    cy.fixture('producaoAgricola/acertoDeFrete/exclusao/payloadCt1.json').then((payload) => {
                        cy.step('Cadastrar Acerto para deleção')
                        cy.postRequest('/api/producao-agricola/v1/AcertoFretes', payload)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                                expect(response.status).to.equal(200)
                                expect(response.body.data).to.be.not.null
                                expect(response.body.data.id).to.be.not.null
                                expect(response.body.success).to.equal(true)

                                cy.step('Deletar Acerto Criado')
                                const id = response.body.data.id
                                cy.section('Deletar acerto cadastrado')
                                cy.deleteRequest('/api/producao-agricola/v1/AcertoFretes', id)
                            })
                    })
                })
            })
        })
    })
})