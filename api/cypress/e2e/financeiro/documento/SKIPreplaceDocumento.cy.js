/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {

        // Passos para esse teste: Criar um Documento - Editar o seu ID - Validar que ID antigo não existe e que novo é existente - Apagar docuemento criado
        let documentoID;
        let randomNumber
        let bodyedit

        // Testes com Ajustes Backend para serem feitos
        describe.skip('PUTS - /api/financeiro/v1/Documento/ReplaceDocumento - Recriar o mesmo documento porém atualizando o ID', () => {
            
            it('CT1 - Deve criar um novo documento', () => {
                cy.fixture('financeiro/documento/replaceDocumento/payloadCt1.json').then((payload) => {

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
                                // Passando o mesmo response para uma varíavel global para teste em novo cenário
                                bodyedit = response.body.data
                                // Verificando se o response foi copiado corretamente
                                expect(response.body.data).to.deep.equal(body)
                            })
                        })
                })
            })

            it('CT2 - Deve Editar o Documento Criado Atualizando o ID', () => {
                cy.fixture('financeiro/documento/replaceDocumento/bodyCt1.json').then((payload) => {
                    
                    //Copiando o body do cenário anterior
                    payload = bodyedit
                    
                    //Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.numero = randomNumber.toString(); // Atualiza o campo 'numero' no payload
                    
                    cy.putRequest('/api/financeiro/v1/Documento/ReplaceDocumento', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            // Verificando se o response está como foi editado
                            expect(response.body.data).to.deep.equal(payload)
                            //documentoID = response.body.data.id;
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