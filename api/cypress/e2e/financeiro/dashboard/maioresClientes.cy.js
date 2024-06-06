/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('GET - /api/financeiro/v1/Dashboard/MaioresClientes{params} - Maiores Clientes', () => {
            it('CT1 - Deve buscar dados dos Maiores Clientes', () => {
                cy.fixture('financeiro/dashboard/maioresClientes/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams('/api/financeiro/v1/Dashboard/MaioresClientes', params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist

                            // Validar campo 'total'
                            expect(response.body).to.have.property('total').that.is.a('number');

                            // Validar campo 'pessoas'
                            expect(response.body).to.have.property('pessoas').that.is.an('array').and.not.empty;

                            // Validar cada item do array 'pessoas'
                            response.body.pessoas.forEach(pessoa => {
                                // Validar campo 'valor'
                                expect(pessoa).to.have.property('valor').that.is.a('number');

                                // Validar campo 'pessoa'
                                expect(pessoa).to.have.property('pessoa').that.is.an('object').and.not.empty;

                                // Validar campos dentro de 'pessoa'
                                expect(pessoa.pessoa).to.have.property('pessoaTipo').that.is.a('number');
                                expect(pessoa.pessoa).to.have.property('numeroDocumento').that.is.a('string');
                                expect(pessoa.pessoa).to.have.property('id').that.is.a('string');
                                expect(pessoa.pessoa).to.have.property('descricao').that.is.a('string');
                            });

                        })
                })
            })
        })
    })
})
