/// <reference types='Cypress' />

const description = require('../../../fixtures/atividadeAgricola/acompanhamentoCampo/acompanhamentoCampo/acompanhamentoCampo.description')
import { validateAcompanhamento } from '../../../fixtures/atividadeAgricola/acompanhamentoCampo/validation'
const dayjs = require('dayjs')

context('Atividade Agrícola', () => {
    context('Acompanhamento de Campo', () => {
        // Alterações DEV
        describe.skip(`GET/PUT - ${Cypress.env('atividadeAgricola')}/AcompanhamentoCampo - Ver Detalhes e Atualizar Dados de Acompanhamento do Talhão`, () => {
            it('CT1 - Recuperar dados de Acompanhamento de Campo de Talhão Específico', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')
                
                cy.fixture('atividadeAgricola/acompanhamentoCampo/acompanhamentoCampo/payloadCt1.json').then((payload) => {
                    cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('atividadeAgricola')}/AcompanhamentoCampo/${payload.id}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validateAcompanhamento(response.body.data)

                        })
                })
            })

            it('CT2 - Atualizar Dados Talhão Expecífico', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')
                
                cy.fixture('atividadeAgricola/acompanhamentoCampo/acompanhamentoCampo/payloadCt2.json').then((payload) => {

                    payload.contagemPrevistaStand = Math.floor(Math.random() * 101)
                    payload.contagemRealizadaStand = Math.floor(Math.random() * 101)
                    payload.espacamento = Math.floor(Math.random() * 101)

                    const value = Math.random() * 1000
                    payload.pms = Math.round(value * 1000) / 1000

                    payload.dataEmergencia = dayjs().add(5, 'day').format('YYYY-MM-DDTHH:mm:ss[+00:00]')
                    payload.dataFimPlantio = dayjs().add(30, 'day').format('YYYY-MM-DDTHH:mm:ss[+00:00]')

                    cy.putRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('atividadeAgricola')}/AcompanhamentoCampo`,payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validateAcompanhamento(response.body.data)

                        })
                })
            })
        })
    })
})