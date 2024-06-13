/// <reference types='Cypress' />

function validarContaBancariaCorrente(response) {
    expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
    expect(response.status).to.be.equal(200);
    expect(response.body).to.exist;
    expect(response.body).to.not.be.null;
    expect(response.body).to.be.an('array').that.is.not.empty;

    response.body.forEach(conta => {
        // Verificação dos campos esperados
        expect(conta).to.have.all.keys(
            'id',
            'nomeConta',
            'numeroConta',
            'digitoConta',
            'agenciaConta',
            'digitoAgencia',
            'saldoConta',
            'empresaTitular',
            'ativo'
        );

        // Verificação dos tipos dos campos
        expect(conta.id).to.be.a('string');
        expect(conta.nomeConta).to.be.a('string');
        expect(conta.numeroConta).to.be.a('string');
        expect(conta.digitoConta).to.be.a('string');
        expect(conta.agenciaConta).to.be.a('string');
        expect(conta.digitoAgencia).to.be.a('string');
        expect(conta.saldoConta).to.be.a('number');
        expect(conta.empresaTitular).to.be.a('string');
        expect(conta.ativo).to.be.a('boolean');
    });
}

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe(`GET - ${Cypress.env('financeiro')}/ContaBancaria/Corrente - Obtém Contas Bancárias Correntes`, () => {
            it('CT1 - Deve obter todas as contas correntes', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Corrente`)
                    .then((response) => {
                        validarContaBancariaCorrente(response);
                    });
            });

            it('CT2 - Deve obter conta corrente por ContaBancariaId', () => {
                cy.fixture('financeiro/contaBancaria/corrente/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Corrente`, params)
                        .then((response) => {
                            validarContaBancariaCorrente(response);
                        });
                });
            });

            it('CT3 - Deve obter conta corrente por EmpresaId', () => {
                cy.fixture('financeiro/contaBancaria/corrente/paramsCt3.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Corrente`, params)
                        .then((response) => {
                            validarContaBancariaCorrente(response);
                        });
                });
            });

            it('CT4 - Deve obter contas correntes ativas', () => {
                cy.fixture('financeiro/contaBancaria/corrente/paramsCt4.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Corrente`, params)
                        .then((response) => {
                            validarContaBancariaCorrente(response);
                        });
                });
            });

            it('CT5 - Deve obter contas correntes inativas', () => {
                cy.fixture('financeiro/contaBancaria/corrente/paramsCt5.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Corrente`, params)
                        .then((response) => {
                            validarContaBancariaCorrente(response);
                        });
                });
            });
        });
    });
});
