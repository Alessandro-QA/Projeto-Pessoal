/// <reference types='Cypress' />

// Função para verificar os campos esperados no response.body de recebimentos ou pagamentos pendentes
function verificarCamposRecebimentosPagamentos(response) {
    // Verificando se os campos esperados estão presentes no response.body
    expect(response.body).to.have.property('pagamento');
    expect(response.body.pagamento).to.have.property('valor').that.is.a('number');
    expect(response.body.pagamento).to.have.property('quantidadeTitulos').that.is.a('number');
    expect(response.body.pagamento).to.have.property('proximosSeteDias').that.is.a('number');
    expect(response.body.pagamento).to.have.property('proximosQuinzeDias').that.is.a('number');

    // Verificando os campos dentro de 'recebimento'
    expect(response.body.recebimento).to.have.property('valor').that.is.a('number');
    expect(response.body.recebimento).to.have.property('quantidadeTitulos').that.is.a('number');
    expect(response.body.recebimento).to.have.property('proximosSeteDias').that.is.a('number');
    expect(response.body.recebimento).to.have.property('proximosQuinzeDias').that.is.a('number');
}

context('Financeiro', () => {
    context('Dashboard', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Dashboard/Pendentes - Recebimentos ou Pagamentos Pendentes`, () => {
            it('CT1 - Deve buscar recebimentos ou pagamentos pendentes por empresa e data', () => {
                cy.fixture('financeiro/dashboard/pendentes/paramsCt1.json').then((params) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/Pedentes`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.be.not.null;
                            
                            // Utilizando a função para verificar os campos
                            verificarCamposRecebimentosPagamentos(response);
                        });
                });
            });

            it('CT2 - Deve buscar recebimentos ou pagamentos pendentes por data', () => {
                cy.fixture('financeiro/dashboard/pendentes/paramsCt2.json').then((payload) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/Pedentes`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.be.not.null;

                            // Utilizando a função para verificar os campos
                            verificarCamposRecebimentosPagamentos(response);
                        });
                });
            });

            it('CT3 - Deve buscar recebimentos ou pagamentos pendentes por empresa', () => {
                cy.fixture('financeiro/dashboard/pendentes/paramsCt3.json').then((payload) => {
                    cy.getRequestWhitParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Dashboard/Pedentes`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.be.not.null;
                            
                            // Utilizando a função para verificar os campos
                            verificarCamposRecebimentosPagamentos(response);
                        });
                });
            });
        });
    });
});
