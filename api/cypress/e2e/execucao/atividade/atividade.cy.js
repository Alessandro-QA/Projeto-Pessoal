/// <reference types='Cypress' />

const description = require('../../../fixtures/execucao/atividade/atividade/atividade.description')
const { validateAtividade } = require('../../../fixtures/execucao/atividade/atividade/validate')
const dayjs = require('dayjs')

context('Execução', () => {
    context('Atividade', () => {

        let idAtividade
        // Obter a datas no formato desejado
        const dataHoje = dayjs().format('YYYY-MM-DDT00:00:00-03:00');
        const dataDaqui5Dias = dayjs().add(5, 'day').format('YYYY-MM-DDT00:00:00-03:00')

        describe(`POST/PUT/GET/DELETE - ${Cypress.env('execucao')}/Atividade - Criar e Modificar Atividades`, () => {

            it('CT1 - Criação de Atividade', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('Critical')

                cy.fixture('execucao/atividade/atividade/payloadCt1.json').then((payload) => {

                    payload.dataPrevistaInicial = dataHoje
                    payload.dataPrevistaFinal = dataDaqui5Dias

                    cy.postRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('execucao')}/Atividade`, payload)
                        .then((response) => {
                            // Verifica o status code da resposta
                            expect(response.status).to.equal(200)
                            // Armazenar o ID do pedido criado
                            idAtividade = response.body.data.id
                            const data = response.body.data

                            validateAtividade(response)
                            expect(data).to.have.property('dataExecucaoInicial').that.is.null
                            expect(data).to.have.property('dataExecucaoFinal').that.is.null
                            expect(data.dataPrevistaInicial).to.equal(dataHoje)
                            expect(data.dataPrevistaFinal).to.equal(dataDaqui5Dias)
                        })
                })
            })

            it('CT2 - Editar Atividade', () => {
                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')


                cy.fixture('execucao/atividade/atividade/payloadCt2.json').then((payload) => {

                    payload.id = idAtividade
                    payload.dataPrevistaInicial = dataHoje
                    payload.dataPrevistaFinal = dataDaqui5Dias
                    payload.dataExecucaoInicial = dataHoje

                    cy.putRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('execucao')}/Atividade`, payload).then((response) => {

                        // Verifica o status code da resposta
                        expect(response.status).to.equal(200)

                        const data = response.body.data

                        validateAtividade(response)
                        expect(data).to.have.property('dataExecucaoInicial').to.be.equal(dataHoje)
                        expect(data).to.have.property('status').to.be.equal("EmAndamento")
                        expect(data).to.have.property('atividadeExecutada').to.be.true
                        expect(data).to.have.property('dataExecucaoFinal').that.is.null
                    })
                })
            })

            // Erro de Consulta pelo ID
            it.skip('CT3 - Obter Atividade Pelo ID', () => {
                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('execucao')}/Atividade/${idAtividade}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).to.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null

                        validateAtividade(response)
                    })
            })

            // Erro na exclusão - Usando rota antiga para excluir
            it.skip('CT4 - Excluir Atividade', () => {
                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.deleteRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('execucao')}/Atividade`, idAtividade).then((response) => {
                    // Verifica o status code da resposta
                    expect(response.status).to.equal(200)
                    // Verifica o corpo da resposta
                    expect(response.body).to.have.property('success', true)
                    expect(response.body).to.have.property('data', true)
                })
            })

            it('CT4 - Excluir Atividade (Antigo)', () => {
                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.deleteRequest(`${Cypress.env('baseUrlDaas')}/api/atividades-agricolas/v1/Execucao/Atividade`, idAtividade).then((response) => {
                    // Verifica o status code da resposta
                    expect(response.status).to.equal(200)
                    // Verifica o corpo da resposta
                    expect(response.body).to.have.property('success', true)
                    expect(response.body).to.have.property('data', true)
                })
            })
        })
    })
})