/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {

        let documentoID;
        let randomNumber

        describe('POST/PUT/DELETE - /api/financeiro/v1/Documento - Criar Documento', () => {
            
            it('CT1 - Deve criar um novo documento', () => {
                cy.fixture('financeiro/documento/criarDocumento/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.numero = randomNumber.toString(); // Atualiza o campo 'numero' no payload

                    cy.postRequest('/api/financeiro/v1/Documento', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            documentoID = response.body.data.id;
                            expect(documentoID).to.not.be.undefined;
                            cy.fixture('financeiro/documento/criarDocumento/bodyCt1.json').then((body) => {
                                // Passando o Response do que foi cadastrado para o Body, pois precisará ser usado na edição
                                body = response.body.data
                                // Verificando se o response foi copiado corretamente
                                expect(response.body.data).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT3 - Deve Deletar Documento', () => {
                cy.deleteRequest('/api/financeiro/v1/Documento', documentoID).then((response) => {
                    expect(response.status).be.equal(200)
                })
            })

        })
    })
})