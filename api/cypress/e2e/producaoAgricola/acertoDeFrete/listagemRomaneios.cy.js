/// <reference types='Cypress' />

context('Produção Agrícola', () => {
    context('Acerto de Frete', () => {
        describe('GET - Listagem de Romaneios', () => {
            it('CT1 - Deve listar romaneios por motorista', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagemRomaneio/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/ListRomaneios`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            // Aqui você pode adicionar as validações específicas para o CT1, se necessário
                        })
                })
            })

            it('CT2 - Deve listar romaneios por motorista e placa', () => {
                cy.fixture('producaoAgricola/acertoDeFrete/listagemRomaneio/paramsCt2.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('producaoAgricola')}/AcertoFretes/ListRomaneios`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.be.an('array');
                            // Aqui você pode adicionar as validações específicas para o CT2, se necessário
                        })
                })
            })
        })
    })
})