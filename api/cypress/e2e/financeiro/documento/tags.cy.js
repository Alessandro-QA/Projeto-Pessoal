/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`PUT - ${Cypress.env('financeiro')}/v1/Documento/{id}/tags - Adiciona uma TAG para um Documento`, () => {

            let idDocumento;

            it('CT1 - Deve adicionar uma TAG ao documento', () => {
                cy.fixture('financeiro/documento/tags/paramsCt1.json').then((params) => {
                    idDocumento = params.id;

                    cy.fixture('financeiro/documento/tags/payloadCt1.json').then((payload) => {
                        cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/${idDocumento}/tags`, payload)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                expect(response.status).be.equal(200);
                                expect(response.body).to.exist;
                                expect(response.body).be.not.null;

                                // Verifique se a resposta contém os campos esperados
                                expect(response.body.success).to.be.true;
                                expect(response.body.data).to.have.length(1);

                                // Verifica se o Response salvo está igual ao Payload Passado
                                const responseData = response.body.data[0];
                                expect(responseData).to.have.property('id', payload[0].id);
                                expect(responseData).to.have.property('descricao', payload[0].descricao);

                            });

                        // Validar se a TAG ficou salva no Documento
                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/${idDocumento}`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                expect(response.status).be.equal(200);
                                expect(response.body).to.exist;
                                expect(response.body).be.not.null;

                                // Acessar e verificar a TAG do response
                                const tag = response.body.tags[0];
                                expect(tag).to.have.property('id', payload[0].id);
                                expect(tag).to.have.property('descricao', payload[0].descricao);
                            });
                    });
                });
            });

            it('CT2 - Deve adicionar duas TAGs ao documento', () => {
                cy.fixture('financeiro/documento/tags/paramsCt1.json').then((params) => {
                    idDocumento = params.id;

                    cy.fixture('financeiro/documento/tags/payloadCt2.json').then((payload) => {
                        cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/${idDocumento}/tags`, payload)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                expect(response.status).be.equal(200);
                                expect(response.body).to.exist;
                                expect(response.body).be.not.null;

                                // Verifique se a resposta contém os campos esperados
                                expect(response.body.success).to.be.true;
                                expect(response.body.data).to.have.length(2);

                                // Verifica se os Responses salvos estão iguais aos Payloads Passados
                                const responseData1 = response.body.data[0];
                                expect(responseData1).to.have.property('id', payload[0].id);
                                expect(responseData1).to.have.property('descricao', payload[0].descricao);

                                const responseData2 = response.body.data[1];
                                expect(responseData2).to.have.property('id', payload[1].id);
                                expect(responseData2).to.have.property('descricao', payload[1].descricao);

                            });

                        // Validar se as TAGs ficaram salvas no Documento
                        cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/${idDocumento}`)
                            .then((response) => {
                                expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                                expect(response.status).be.equal(200);
                                expect(response.body).to.exist;
                                expect(response.body).be.not.null;

                                // Define as tags esperadas
                                const expectedTags = [
                                    { id: payload[1].id, descricao: payload[1].descricao },
                                    { id: payload[0].id, descricao: payload[0].descricao }
                                ];

                                // Acessar e verificar as TAGs do response
                                const responseTags = response.body.tags;
                                expectedTags.forEach(expectedTag => {
                                    const foundTag = responseTags.find(tag => tag.id === expectedTag.id && tag.descricao === expectedTag.descricao);
                                    expect(foundTag).to.exist;
                                });
                                
                            });
                    });
                });

            });

        });

    });
});
