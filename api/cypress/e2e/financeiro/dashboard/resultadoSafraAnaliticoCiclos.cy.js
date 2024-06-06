/// <reference types='Cypress' />

// Função para validar o response do Resultado da Safra Analítico Ciclos
function validarResultadoSafraAnaliticoCiclos(responseBody) {
    // Verifica se o responseBody não é nulo ou undefined
    expect(responseBody).to.not.be.null;
    expect(responseBody).to.not.be.undefined;

    // Verifica se é um array e que não está vazio
    expect(responseBody).to.be.an('array').that.is.not.empty;

    // Verifica os campos de cada objeto no array
    responseBody.forEach(item => {
        expect(item).to.have.property('id').that.is.a('string');
        expect(item).to.have.property('descricao').that.is.a('string');
        expect(item).to.have.property('hectares').that.is.a('number');
        expect(item).to.have.property('quantidadeProducao').that.is.a('number');
        expect(item).to.have.property('mediaProducao').that.is.a('number');
    });
}

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('POST - /api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos - Resultado da Safra Analítico Ciclos', () => {
            it('CT1 - Deve buscar Resultado da Safra Analítico Ciclos - Com saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafraAnaliticoCiclos(response.body);
                        });
                });
            });

            it('CT2 - Deve buscar Resultado da Safra Analítico Ciclos - Sem saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafraAnaliticoCiclos(response.body);
                        });
                });
            });

            it('CT3 - Deve buscar Resultado da Safra Analítico Ciclos - Com documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafraAnaliticoCiclos(response.body);
                        });
                });
            });

            it('CT4 - Deve buscar Resultado da Safra Analítico Ciclos - Sem documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafraAnaliticoCiclos/payloadCt4.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafraAnaliticoCiclos', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafraAnaliticoCiclos(response.body);
                        });
                });
            });
        });
    });
});