/// <reference types="Cypress" />

const description = require('../../../fixtures/financeiro/titulo/efetuarbaixatitulosagendados/efetuarbaixatitulosagendados.description');

const dayjs = require('dayjs'); // Importando a biblioteca dayjs

context('Financeiro', () => {
    context('Titulo', () => {
        describe(`POST - ${Cypress.env('financeiro')}Titulo/EfetuarBaixaTitulosAgendados - Baixa no título Agendado`, () => {

            it('CT1 - Deve dar baixo no título Agendado', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('critical');

                // Obter a data de amanhã no formato desejado (YYYY-MM-DDTHH:mm:ssZ)
                const today = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');
                const tomorrowDate = dayjs().add(1, 'day').format('YYYY-MM-DDTHH:mm:ssZ');
                const aftertomorrowDate = dayjs().add(2, 'day').format('YYYY-MM-DDTHH:mm:ssZ');

                cy.fixture('financeiro/titulo/efetuarbaixatitulosagendados/payloaddoc.json').then((payloaddoc) => {

                    // Coloca o documento para amanhã
                    payloaddoc.dataRecebimento = tomorrowDate
                    payloaddoc.dataPagamento = tomorrowDate
                    payloaddoc.financeiro.parcelas[0].vencimento = tomorrowDate

                    // Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
                    const randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payloaddoc.numero = randomNumber.toString(); // Atualiza o campo 'numero' no payload

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento`, payloaddoc)
                        .then((responsedoc) => {

                            expect(responsedoc.status).to.be.equal(200);

                            cy.fixture('financeiro/titulo/efetuarbaixatitulosagendados/payloadlist.json').then((payloadlist) => {

                                // Determina data do filtro de agenda para pegar o documento criado
                                payloadlist.dataInicial = today
                                payloadlist.dataFinal = aftertomorrowDate

                                // Lista os títulos que estão pendentes para amanhã
                                cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agenda/Listagem`, payloadlist)
                                    .then((responselist) => {
                                        expect(responselist.status).to.be.equal(200);

                                        cy.log(randomNumber)
                                        let idTitulo
                                        // Procurar o titulo do documento que acabei de criar
                                        responselist.body.data.titulos.forEach((titulo) => {
                                            if (titulo.numero === randomNumber.toString()) {
                                                idTitulo = titulo.id;
                                            }
                                        })

                                        cy.log(idTitulo)


                                        cy.fixture('financeiro/titulo/efetuarbaixatitulosagendados/payloadagendamento.json').then((payloadagendamento) => {

                                            // Ao fazer um agendamento  o horário é sempre 00:00
                                            const tomorrowAtMidnight = dayjs().add(1, 'day').startOf('day').format('YYYY-MM-DDTHH:mm:ssZ');

                                            // Determina a Data para qual será Agendada - Armazena o ID do titulo que será agendado
                                            payloadagendamento.dataAgendamento = tomorrowAtMidnight
                                            payloadagendamento.dataPagamentp = tomorrowDate
                                            payloadagendamento.tituloId = idTitulo

                                            // Agendando para o dia de amanhã o título criado
                                            cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Agendamento`, payloadagendamento)
                                                .then((responseagendamento) => {
                                                    expect(responseagendamento.status).to.be.equal(200);

                                                    cy.fixture('financeiro/titulo/efetuarbaixatitulosagendados/payloadCt1.json').then((payload) => {

                                                        payload.dataAgendamento = tomorrowDate

                                                        cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Titulo/EfetuarBaixaTitulosAgendados`, payload)
                                                            .then((response) => {
                                                                expect(response.status).to.be.equal(200);

                                                                let resultado = 0
                                                                // Procurar o titulo do documento criado se foi pago ao pagar os agendados
                                                                response.body.data.forEach((data) => {
                                                                    if (data.tituloId === idTitulo) {
                                                                        resultado = 1;
                                                                    }
                                                                })
                                                                expect(resultado).to.be.equal(1)

                                                            })

                                                    });
                                                });
                                        });
                                    });
                            });
                        })
                })
            })

        })
    })
})
