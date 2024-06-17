/// <reference types='Cypress' />

const description = require('../../../fixtures/agendarJob/agendarJobReprocessarLivroCaixa/agendarJobReprocessarLivroCaixaEmpresaDeSaoPauloVinculadoAoProdutor.description');

context('Financeiro', () => {
    context('AgendarJob', () => {
        describe(`POST - ${Cypress.env('financeiro')}/AgendarJob//v{version}/AgendarJob/AgendarJobReprocessarLivroCaixaEmpresaDeSaoPauloVinculadoAoProdutor - Agenda o reprocessamento do livro caixa de acordo com o vínculo de uma empresa de SP com um produtor. Esse reprocessamento é para produtores de SP que possuiam uma empresa no sistema com o CNPJ do mesmo.`, () => {

            it('CT1 - Agenda o reprocessamento do livro caixa de acordo com o vínculo de uma empresa de SP com um produtor. Esse reprocessamento é para produtores de SP que possuiam uma empresa no sistema com o CNPJ do mesmo', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.fixture('financeiro/agendarJob/agendarJobReprocessarLivroCaixaEmpresaDeSaoPauloVinculadoAoProdutor/paramsCt1.json').then((params) => {
                    cy.postRequestWithParams(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/AgendarJob/AgendarJobReprocessarLivroCaixaEmpresaDeSaoPauloVinculadoAoProdutor`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.exist;
                            expect(response.body).to.not.be.null;
                            expect(response.body).be.equal("O job foi agendado com sucesso!");
                        })
                })
            })
        })
    })
})