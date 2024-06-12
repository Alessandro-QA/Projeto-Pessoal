/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Dashboard', () => {
        describe(`GET - ${Cypress.env('financeiro')}/v1/Dashboard/SaldoConta{params} - Saldo em Conta`, () => {
            it('CT1 - Deve buscar dados do Saldo em Conta', () => {
                cy.fixture('financeiro/dashboard/saldoConta/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}//Dashboard/SaldoConta`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                            
                            // Verificando os campos no response.body
                            expect(response.body).to.have.property('saldoTotal').that.is.a('number');
                            expect(response.body).to.have.property('saldoPrincipal').that.is.a('number');
                            expect(response.body).to.have.property('saldoSecundarias').that.is.a('number');
                            expect(response.body).to.have.property('saldoContasBancarias').that.is.an('array').and.not.empty;

                            // Verificando os campos dentro de saldoContasBancarias
                            const saldoContasBancarias = response.body.saldoContasBancarias;
                            saldoContasBancarias.forEach((conta) => {
                                expect(conta).to.have.property('saldo').that.is.a('number');
                                expect(conta).to.have.property('contaPrincipal').that.is.a('boolean');
                                expect(conta).to.have.property('nome').that.is.a('string');
                            });                          
                        });
                });
            });
        });
    });
});