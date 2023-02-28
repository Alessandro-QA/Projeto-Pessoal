/// <reference types='Cypress' />

context('Acerto de Frete', () => {
    context('Exclusão - DELETE /api/producao-agricola/v1/AcertoFretes', () => {
        describe('Pendente', () => {
            it('CT1 - Deve deletar acerto pendente', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/exclusao/payloadCt1.json').then((payload) => {
                    cy.step('Cadastrar Acerto para deleção')
                    cy.executeRequest('POST', '/api/producao-agricola/v1/AcertoFretes', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal('273276e0-7cc1-4891-94de-55e9ced2aad2')
                            expect(response.status).to.equal(200)
                            expect(response.body.data).to.be.not.null
                            expect(response.body.data.id).to.be.not.null
                            expect(response.body.success).to.equal(true)

                            cy.step('Deletar Acerto Criado')
                            const id = response.body.data.id
                            cy.section('Deletar acerto cadastrado')
                            cy.executeRequest('DELETE', '/api/producao-agricola/v1/AcertoFretes', '', id)
                        })
                })
            })
        })
    })
})