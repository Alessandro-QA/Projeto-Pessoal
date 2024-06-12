/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Livro Caixa', () => {
        describe(`GET - \${Cypress.env('financeiro')}/LivroCaixa/Simulador - Obtém simulação anual de Registro do Livro Caixa`, () => {
            it('CT1 - Deve simular registro do Livro Caixa', () => {
                cy.fixture('financeiro/livroCaixa/simulador/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/LivroCaixa/Simulador`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).be.not.null;

                            // Verificando se os campos esperados estão presentes no response.body.data
                            expect(response.body.data).to.have.property('estimativaIr');
                            expect(response.body.data).to.have.property('totalEntrada');
                            expect(response.body.data).to.have.property('totalSaida');
                            expect(response.body.data).to.have.property('livroCaixaMensal');
                            
                            // Verificando o tipo dos campos
                            expect(response.body.data.estimativaIr).to.be.a('number');
                            expect(response.body.data.totalEntrada).to.be.a('number');
                            expect(response.body.data.totalSaida).to.be.a('number');
                            expect(response.body.data.livroCaixaMensal).to.be.an('array');
                        });
                });
            });
        });
    });
});