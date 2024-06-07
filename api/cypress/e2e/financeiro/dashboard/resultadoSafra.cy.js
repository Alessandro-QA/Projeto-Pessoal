/// <reference types='Cypress' />

// Função para validar o response do Resultado da Safra
function validarResultadoSafra(responseBody) {
    // Verifica se o responseBody não é nulo ou undefined
    expect(responseBody).to.not.be.null;
    expect(responseBody).to.not.be.undefined;

    // Verifica se existem ciclos
    expect(responseBody).to.have.property('ciclos').that.is.an('array').and.has.lengthOf.at.least(1);

    // Verifica os campos e tipos dentro de cada ciclo
    responseBody.ciclos.forEach(ciclo => {
        expect(ciclo).to.have.property('id').that.is.a('string');
        expect(ciclo).to.have.property('descricao').that.is.a('string');
        
        // Verifica a receita
        expect(ciclo).to.have.property('receita').that.is.an('object');
        expect(ciclo.receita).to.have.property('ciclo').that.is.a('number');
        expect(ciclo.receita).to.have.property('hectare').that.is.a('number');
        expect(ciclo.receita).to.have.property('valor').that.is.a('number');
        
        // Verifica a despesa
        expect(ciclo).to.have.property('despesa').that.is.an('object');
        expect(ciclo.despesa).to.have.property('ciclo').that.is.a('number');
        expect(ciclo.despesa).to.have.property('hectare').that.is.a('number');
        expect(ciclo.despesa).to.have.property('valor').that.is.a('number');
        
        // Verifica a margem
        expect(ciclo).to.have.property('margem').that.is.an('object');
        expect(ciclo.margem).to.have.property('ciclo').that.is.a('number');
        expect(ciclo.margem).to.have.property('hectare').that.is.a('number');
        expect(ciclo.margem).to.have.property('valor').that.is.a('number');
    });

    // Verifica os campos fora dos ciclos
    expect(responseBody).to.have.property('margemLucro').that.is.a('number');
    expect(responseBody).to.have.property('despesaTotal').that.is.a('number');
    expect(responseBody).to.have.property('receitaTotal').that.is.a('number');
}

context('Financeiro', () => {
    context('Dashboard', () => {
        describe('POST - /api/financeiro/v1/Dashboard/ResultadoSafra - Resultado da Safra', () => {
            it('CT1 - Deve buscar Resultado da Safra - Com saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafra/payloadCt1.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafra(response.body);
                        });
                });
            });

            it('CT2 - Deve buscar Resultado da Safra - Sem saldo a Fixar de Colheitas', () => {
                cy.fixture('financeiro/dashboard/resultadoSafra/payloadCt2.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafra(response.body);
                        });
                });
            });

            it('CT3 - Deve buscar Resultado da Safra - Com documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafra/payloadCt3.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafra(response.body);
                        });
                });
            });

            it('CT4 - Deve buscar Resultado da Safra - Sem documentos Não Pagos e Recebidos', () => {
                cy.fixture('financeiro/dashboard/resultadoSafra/payloadCt4.json').then((payload) => {
                    cy.postRequest('/api/financeiro/v1/Dashboard/ResultadoSafra', payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            validarResultadoSafra(response.body);
                        });
                });
            });
        });
    });
});