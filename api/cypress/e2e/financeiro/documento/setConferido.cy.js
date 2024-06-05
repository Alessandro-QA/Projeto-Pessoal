/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe('GET - /api/financeiro/v1/Documento/{id}/setConferido/{conferido} - Define um Documento Como Conferido ou Não', () => {

            let idDocumento
            let setConferido

            it('CT1 - Deve marcar um documento como "SIM" Conferido', () => {
                cy.fixture('financeiro/documento/setConferido/paramsCt1.json').then((payload) => {
                    idDocumento = payload.id
                    setConferido = payload.conferido
                    cy.putRequest(`/api/financeiro/v1/Documento/${idDocumento}/setConferido/${setConferido}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body.data).to.be.a('boolean');
                            expect(response.body.data).to.be.true;
                        })
                })
            })

            it('CT2 - Deve marcar um documento como "NÃO" Conferido', () => {
                cy.fixture('financeiro/documento/setConferido/paramsCt2.json').then((payload) => {
                    idDocumento = payload.id
                    setConferido = payload.conferido
                    cy.putRequest(`/api/financeiro/v1/Documento/${idDocumento}/setConferido/${setConferido}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).be.not.null
                            expect(response.body.data).to.be.a('boolean');
                            expect(response.body.data).to.be.false;
                        })
                })
            })
        })

    })
})

