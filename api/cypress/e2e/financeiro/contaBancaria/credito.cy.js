/// <reference types='Cypress' />

function validarContaBancariaCredito(response) {
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
            'bandeira',
            'numeroCartao',
            'empresaTitular',
            'diaVencimentoCartao',
            'limiteCartao',
            'limiteInicialCartao',
            'ativo'
        );

        // Verificação dos tipos dos campos
        expect(conta.id).to.be.a('string');
        expect(conta.nomeConta).to.be.a('string');
        expect(conta.bandeira).to.be.a('number');
        expect(conta.numeroCartao).to.be.a('number');
        expect(conta.empresaTitular).to.be.a('string');
        expect(conta.diaVencimentoCartao).to.be.a('number');
        expect(conta.limiteCartao).to.be.a('number');
        expect(conta.limiteInicialCartao).to.be.a('number');
        expect(conta.ativo).to.be.a('boolean');
    });
}

context('Financeiro', () => {
    context('Conta Bancaria', () => {
        describe(`GET - ${Cypress.env('financeiro')}/ContaBancaria/Credito - Obtém Contas Bancárias de Crédito`, () => {
            it('CT1 - Deve obter todas as contas de crédito (cartão)', () => {
                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Credito`)
                    .then((response) => {
                        validarContaBancariaCredito(response);
                    });
            });

            it('CT2 - Deve obter conta de crédito por ContaBancariaId', () => {
                cy.fixture('financeiro/contaBancaria/credito/paramsCt2.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Credito`, params)
                        .then((response) => {
                            validarContaBancariaCredito(response);
                        });
                });
            });

            it('CT3 - Deve obter conta de crédito por EmpresaId', () => {
                cy.fixture('financeiro/contaBancaria/credito/paramsCt3.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Credito`, params)
                        .then((response) => {
                            validarContaBancariaCredito(response);
                        });
                });
            });

            it('CT4 - Deve obter contas de crédito ativas', () => {
                cy.fixture('financeiro/contaBancaria/credito/paramsCt4.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Credito`, params)
                        .then((response) => {
                            validarContaBancariaCredito(response);
                        });
                });
            });

            it('CT5 - Deve obter contas de crédito inativas', () => {
                cy.fixture('financeiro/contaBancaria/credito/paramsCt5.json').then((params) => {
                    cy.getRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria/Credito`, params)
                        .then((response) => {
                            validarContaBancariaCredito(response);
                        });
                });
            });
        });
    });
});
