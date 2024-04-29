/// <reference types='Cypress' />

context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        describe('GET - /api/producao-agricola/v1/AcertoFretes/ListRomaneios?{params} - Listagem de Romaneios', () => {
            it('CT1 - Deve listar romaneios por motorista', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagemRomaneio/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/producao-agricola/v1/AcertoFretes/ListRomaneios', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                        })
                })
            })

            it('CT2 - Deve listar romaneios por motorista e placa', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagemRomaneio/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams('/api/producao-agricola/v1/AcertoFretes/ListRomaneios', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array').that.is.not.empty
                        })
                })
            })
        })
    })
})