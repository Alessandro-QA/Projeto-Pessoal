/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Encontro Contas', () => {
        describe(`GET - ${Cypress.env('financeiro')}/EncontroContas/Titulos/ExisteTituloContrapartida - Verifica se existe título contrapartida`, () => {
            
            it('CT1 - Deve verificar se existe título contrapartida', () => {
                cy.fixture('financeiro/encontroContas/titulosExisteTituloContrapartida/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/EncontroContas/Titulos/ExisteTituloContrapartida`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).be.not.null;   
                
                            // Verifica se `data` é `true`
                            expect(response.body).to.have.property('data', true);
                            expect(response.body.data).to.be.true;
                        });
                });
            });
        });
    });
});