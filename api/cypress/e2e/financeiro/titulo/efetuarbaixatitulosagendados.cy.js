/// <reference types="Cypress" />

//const description = require('../../../fixtures/financeiro/titulo/alterarvencimento/alterarvencimento.description');
const dayjs = require('dayjs'); // Importando a biblioteca dayjs
context('Financeiro', () => {
    context('Titulo', () => {
        describe(`POST - ${Cypress.env('financeiro')}Titulo/EfetuarBaixaTitulosAgendados - alterar o Vencimento`, () => {

            it('CT1 - Alterar o Vencimento', () => {

                // Obter a data de amanhã no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                const tomorrowDate = dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm:ssZ');
            

                cy.fixture('financeiro/titulo/efetuarbaixatitulosagendados/payloaddoc.json').then((payloaddoc) => {
                payloaddoc.dataRecebimento = tomorrowDate

                    // Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.numero = randomNumber.toString(); // Atualiza o campo 'numero' no payload

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento`, payloaddoc)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            
                        });
                });
            });


                cy.fixture('financeiro/titulo/efetuarbaixatitulosagendados/payloadCt1.json').then((payload) => {

                    //cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento/AgendamentoLote`, payload)
                       // .then((response) => {
                           // expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                           // expect(response.status).to.be.equal(200);
                           cy.fixture('financeiro/titulo/efetuarbaixatitulosagendados/payload2Ct1.json').then((payload2) => {

                            cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Titulo/EfetuarBaixaTitulosAgendados`, payload2)
                                .then((response) => {
                                    expect(response.status).to.be.equal(200);


                                })


                            // Obter a data de amanhã no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                            const tomorrowDate = dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm:ssZ');

                            // Passando sempre a data de amanhã pra cada dataAgendamento do payload pois não podemos agendar um recebimento para data menor que a atual.
                            // payload.agendamentos.forEach((agendamento) => {
                            //agendamento.dataAgendamento = tomorrowDate;
                            // });



                        })
                })
            })
        })
    })
})
