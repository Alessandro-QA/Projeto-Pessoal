/// <reference types='Cypress' />

// Função para validar o response do Resultado da Safra Analítico Contas
function validarResultadoSafraAnaliticoContas(responseBody) {
    // Verifica se o responseBody não é nulo ou undefined
    expect(responseBody).to.not.be.null;
    expect(responseBody).to.not.be.undefined;

    // Verifica o array de receitas
    expect(responseBody).to.have.property('receitas').that.is.an('array').and.has.lengthOf.at.least(1);
    responseBody.receitas.forEach(receita => {
        expect(receita).to.have.property('conta').that.is.a('string');
        expect(receita).to.have.property('codigo').that.is.a('string');
        expect(receita).to.have.property('valor').that.is.a('number');
        expect(receita).to.have.property('percentual').that.is.a('number');
    });

    // Verifica o array de despesas
    expect(responseBody).to.have.property('despesas').that.is.an('array').and.has.lengthOf.at.least(1);
    responseBody.despesas.forEach(despesa => {
        expect(despesa).to.have.property('conta').that.is.a('string');
        expect(despesa).to.have.property('codigo').that.is.a('string');
        expect(despesa).to.have.property('valor').that.is.a('number');
        expect(despesa).to.have.property('percentual').that.is.a('number');
    });

    // Verifica os campos fora dos arrays
    expect(responseBody).to.have.property('margemLucro').that.is.a('number');
    expect(responseBody).to.have.property('despesaTotal').that.is.a('number');
    expect(responseBody).to.have.property('receitaTotal').that.is.a('number');
}

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('POST - /api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas - Resultado da Safra Analítico Contas', () => {
            it('CT1 - Deve buscar Resultado da Safra Analítico Contas - Com saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafraAnaliticoContas(response.body);
                        });
                });
            });

            it('CT2 - Deve buscar Resultado da Safra Analítico Contas - Sem saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafraAnaliticoContas(response.body);
                        });
                });
            });

            it('CT3 - Deve buscar Resultado da Safra Analítico Contas - Com documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafraAnaliticoContas(response.body);
                        });
                });
            });

            it('CT4 - Deve buscar Resultado da Safra Analítico Contas - Sem documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoContas/payloadCt4.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoContas', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafraAnaliticoContas(response.body);
                        });
                });
            });
        });
    });
});