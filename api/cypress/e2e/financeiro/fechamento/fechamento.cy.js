/// <reference types="Cypress" />

const description = require('../../../fixtures/financeiro/fechamento/fechamento/fechamento.description');

context('Financeiro', () => {
    context('Fechamento', () => {
        describe(`POST/GET/PUT/PATCH/DELETE - ${Cypress.env('financeiro')}/Fechamento/{id} - Fechamento por id`, () => {

            let fechamentoid

            it('CT1 - Criação de Fechamento e Validação da Resposta', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.fixture('financeiro/fechamento/fechamento/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Fechamento`, payload)
                        .then((response) => {
                            expect(response.status).to.equal(200);
                            expect(response.body.success).to.be.true;
                            expect(response.body.data).to.have.property('id').that.is.a('string');
                            expect(response.body.data.empresa).to.deep.equal(payload.empresa);
                            expect(response.body.data.tipo).to.equal(payload.tipo);
                            expect(response.body.data.data).to.equal(payload.data);

                            fechamentoid = response.body.data.id
                        });
                });
            });

            it('CT2 - Atualizar Dados do Fechamento', () => {
                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal');

                cy.fixture('financeiro/fechamento/fechamento/payloadCt2.json').then((payload) => {

                    payload.id = fechamentoid

                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Fechamento`, payload)
                        .then((response) => {
                            expect(response.status).to.equal(200)

                            // Validar dados do fechamento atualizado
                            const data = response.body.data;
                            expect(data).to.have.property('id', fechamentoid);
                            expect(data.empresa).to.deep.equal(payload.empresa);
                            expect(data.tipo).to.equal(payload.tipo);
                            expect(data.data).to.equal(payload.data);
                            expect(data.excecoes).to.be.an('array').that.is.not.empty;

                            // Validar exceções
                            const excecao = data.excecoes[0];
                            expect(excecao).to.have.property('id', payload.excecoes[0].id);
                            expect(excecao.perfil).to.deep.equal(payload.excecoes[0].perfil);

                        });
                });
            });

            it('CT3 - Atualizar dados de um fechamento existente', () => {
                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal');

                cy.fixture('financeiro/fechamento/fechamento/payloadCt3.json').then((payload) => {
                    cy.patchRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Fechamento/${fechamentoid}`, payload)
                        .then((response) => {
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            expect(response.body.success).to.be.true;
                        });
                });
            });

            it('CT4 - Obter Dados do Fechamento por ID', () => {
                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal');

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Fechamento/${fechamentoid}`)
                    .then((response) => {
                        expect(response.status).to.equal(200);

                        cy.fixture('financeiro/fechamento/fechamento/payloadCt3.json').then((payload) => {
                            // Formatar a data do payload para o mesmo formato da resposta
                            const expectedDate = new Date(payload[0].value).toISOString(); // Convertendo para formato ISO

                        });
                    });
            });

            it('CT5 - Deletar Fechamento', () => {
                cy.allureDescriptionHtml(description.Ct5).allureSeverity('normal');

                cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Fechamento`, fechamentoid)
                    .then((response) => {
                        expect(response.status).to.equal(200);
                    });
            });
        });

    });
});
