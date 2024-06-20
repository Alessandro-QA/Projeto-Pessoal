/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/agendamento/agendamentoPorId/agendamentoPorId.description');

context('Financeiro', () => {
    context('Agendamento', () => {
        describe(`GET - ${Cypress.env('financeiro')}/Agendamento/{id} - Obtém Agendamentos por ID`, () => {
            it('CT1 - Obtém Agendamentos por ID', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal');

                cy.getRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento/1e8aa9f0-a282-4d12-aa26-79b510c7c19b`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null


                        const agendamento = response.body;
                        expect(agendamento.dataAgendamento).to.be.a('string');
                        expect(agendamento.status).to.be.a('number');
                        expect(agendamento.anexos).to.be.an('array');
                        expect(agendamento.tags).to.be.an('array');
                        expect(agendamento.id).to.be.a('string');
                        expect(agendamento.tituloId).to.be.a('string');
                        expect(agendamento.contaBancariaId).to.be.a('string');
                        expect(agendamento.formaPagamento).to.be.an('object');
                        expect(agendamento.formaPagamento.id).to.be.a('string');
                        expect(agendamento.formaPagamento.descricao).to.be.a('string');
                        expect(agendamento.empresa).to.be.an('object');
                        expect(agendamento.empresa.id).to.be.a('string');
                        expect(agendamento.empresa.descricao).to.be.a('string');
                        expect(agendamento.juros).to.be.a('number');
                        expect(agendamento.multa).to.be.a('number');
                        expect(agendamento.desconto).to.be.a('number');
                        expect(agendamento.valor).to.be.a('number');
                        expect(agendamento.valorBaixa).to.be.a('number');
                        expect(agendamento.valorBaixaAlternativa).to.be.a('number');
                        expect(agendamento.valorTotal).to.be.a('number');
                        expect(agendamento.observacao).to.be.a('string');
                    });
            })
        })
    });
})