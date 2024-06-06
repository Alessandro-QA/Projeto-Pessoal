/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('PUT - /v1/Documento/{id}/tags - Adiciona uma TAG para um Documento', () => {

            let idDocumento

            it('CT1 - Deve adicionar uma TAG ao documento', () => {
                cy.fixture('financeiro/documento/tags/paramsCt1.json').then((params) => {
                    idDocumento = params.id

                    cy.fixture('financeiro/documento/tags/payloadCt1.json').then((payload) => {
                        cy.putRequest(`/api/financeiro/v1/Documento/${idDocumento}/tags`, payload)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).be.equal(200)
                                expect(response.body).to.exist
                                expect(response.body).be.not.null

                                // Verifique se a resposta contém os campos esperados
                                expect(response.body.success).to.be.true
                                expect(response.body.data).to.have.length(1)

                                // Verifica se o Response salvo está iugla o Payload Passado
                                const responseData = response.body.data[0]
                                expect(responseData).to.have.property('id', payload[0].id)
                                expect(responseData).to.have.property('descricao', payload[0].descricao)

                            })

                        // Validar se a TAG ficou salva no Documento
                        cy.getRequest(`/api/financeiro/v1/Documento/${idDocumento}`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).be.equal(200)
                                expect(response.body).to.exist
                                expect(response.body).be.not.null

                                // Acessar e verificar a TAG do response
                                const tag = response.body.tags[0]
                                expect(tag).to.have.property('id', payload[0].id)
                                expect(tag).to.have.property('descricao', payload[0].descricao)
                            })
                    })
                })
            })

            it('CT2 - Deve adicionar duas TAGs ao documento', () => {
                cy.fixture('financeiro/documento/tags/paramsCt1.json').then((params) => {
                    idDocumento = params.id

                    cy.fixture('financeiro/documento/tags/payloadCt2.json').then((payload) => {
                        cy.putRequest(`/api/financeiro/v1/Documento/${idDocumento}/tags`, payload)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).be.equal(200)
                                expect(response.body).to.exist
                                expect(response.body).be.not.null

                                // Verifique se a resposta contém os campos esperados
                                expect(response.body.success).to.be.true
                                expect(response.body.data).to.have.length(2)

                                // Verifica se o Response salvo está iugla o Payload Passado
                                const responseData = response.body.data[0]
                                expect(responseData).to.have.property('id', payload[0].id)
                                expect(responseData).to.have.property('descricao', payload[0].descricao)

                                const responseData1 = response.body.data[1]
                                expect(responseData1).to.have.property('id', payload[1].id)
                                expect(responseData1).to.have.property('descricao', payload[1].descricao)

                            })

                        // Validar se as TAGs ficaram salva no Documento
                        cy.getRequest(`/api/financeiro/v1/Documento/${idDocumento}`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                                expect(response.status).be.equal(200)
                                expect(response.body).to.exist
                                expect(response.body).be.not.null

                                // Acessar e verificar as TAGs do response
                                const tag = response.body.tags[0]
                                expect(tag).to.have.property('id', payload[1].id)
                                expect(tag).to.have.property('descricao', payload[1].descricao)

                                const tag1 = response.body.tags[1]
                                expect(tag1).to.have.property('id', payload[0].id)
                                expect(tag1).to.have.property('descricao', payload[0].descricao)
                            })
                    })
                })

            })

        })

    })
})
