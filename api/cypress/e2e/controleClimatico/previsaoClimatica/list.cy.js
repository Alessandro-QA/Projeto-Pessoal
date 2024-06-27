/// <reference types='Cypress' />

import dayjs from 'dayjs'

const description = require('../../../fixtures/controleClimatico/previsaoClimatica/list/list.description');

context('Controle Climático', () => {
    context('Previsão Climática', () => {
        describe(`GET - ${Cypress.env('controleClimatico')}/PrevisaoClimatica/List - Obtém a Previsão Climática do Dia passando a Localização`, () => {
            it('CT1 - Obtém a previsão climática de hoje para localização setada', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('controleClimatico/previsaoClimatica/list/paramsCt1.json').then((params) => {
                    // Formata a data de hoje no formato desejado
                    const hoje = dayjs().format('YYYY-MM-DDT00:00:00-03:00');

                    // Atualiza o parâmetro de data
                    params.data = hoje;

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('controleClimatico')}/PrevisaoClimatica/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            response.body.forEach((forecast) => {
                                expect(forecast).to.have.all.keys(
                                    'data',
                                    'id',
                                    'percentualProbabilidadeChuva',
                                    'precipitacao',
                                    'umidadeRelativa',
                                    'temperatura',
                                    'velocidadeVentoKmH',
                                    'nivelAlerta',
                                    'periodo',
                                    'localizacao'
                                );

                                expect(forecast.data).to.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2}$/);
                                expect(forecast.id).to.be.a('string');
                                expect(forecast.percentualProbabilidadeChuva).to.be.a('number');
                                expect(forecast.precipitacao).to.be.a('number');

                                expect(forecast.umidadeRelativa).to.have.all.keys('maxima', 'minima');
                                expect(forecast.umidadeRelativa.maxima).to.be.a('number');
                                expect(forecast.umidadeRelativa.minima).to.be.a('number');

                                expect(forecast.temperatura).to.have.all.keys('maxima', 'minima');
                                expect(forecast.temperatura.maxima).to.be.a('number');
                                expect(forecast.temperatura.minima).to.be.a('number');

                                expect(forecast.velocidadeVentoKmH).to.be.a('number');
                                expect(forecast.nivelAlerta).to.be.a('number');
                                expect(forecast.periodo).to.be.a('number');

                                expect(forecast.localizacao).to.have.all.keys('latitude', 'longitude');
                                expect(forecast.localizacao.latitude).to.be.a('number');
                                expect(forecast.localizacao.longitude).to.be.a('number');
                            })
                        })
                })
            })
        })
    })
})