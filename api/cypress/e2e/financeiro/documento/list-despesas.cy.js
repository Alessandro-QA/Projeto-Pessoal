/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Documento/List/Despesas - Obtém registros de Despesas`, () => {

            it('CT1 - Obter Listagem de Despesas dos Documentos', () => {
                cy.fixture('financeiro/documento/list-despesa/payloadCt1.json').then((payload) => {

                    // Extrair PessoaId do payload
                    const pessoaId = payload.PessoaId;

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/List/Despesas`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            // Verificar se todos as despesas no response correspondem ao filtro
                            response.body.data.forEach((documento) => {
                                expect(documento.pessoa.id).to.equal(pessoaId);
                            });
                        })
                })
            })

            it('CT2 - Obter Listagem de Despesas dos Documentos com Filtro', () => {
                cy.fixture('financeiro/documento/list-despesa/payloadCt2.json').then((payload) => {

                    // Extrair PessoaId, FazendaId e SafraIds do payload
                    const pessoaId = payload.PessoaId;
                    const fazendaId = payload.FazendaId;

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/List/Despesas`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            // Verificar se todos as despesas no response correspondem ao filtro
                            response.body.data.forEach((documento) => {
                                expect(documento.pessoa.id).to.equal(pessoaId);
                                expect(documento.fazenda.id).to.equal(fazendaId);
                            });
                        })
                })
            })
        })
    })
})
