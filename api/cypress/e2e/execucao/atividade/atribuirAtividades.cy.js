/// <reference types='Cypress' />

const description = require('../../../fixtures/execucao/atividade/atribuirAtividades/atribuirAtividades.description')

context('Execução', () => {
    context('Atividade', () => {

        // Usando Rotas Antigas devido a erros da Atual
        it.skip('CT1 - Deve Atrbiuir uma Atividade', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('execucao/atividade/atribuirAtividades/payloadCt1.json').then((payload) => {
                cy.putRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('execucao')}/Atividade/AtribuirAtividades`, payload)
                    .then((response) => {
                        // Verifica o status code da resposta
                        expect(response.status).to.equal(200)

                    })
            })
        })

        it.skip('CT2 - Deve Excluir Atividade Atribuída', () => {
            cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

            cy.fixture('execucao/atividade/atribuirAtividades/paramsCt2.json').then((params) => {
                cy.putRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('execucao')}/Atividade/ExcluirAtividadeAtribuida?id=${params.idAtividade}`)
                    .then((response) => {
                        // Verifica o status code da resposta
                        expect(response.status).to.equal(200)
                        // Verifica se o corpo da resposta existe e não é nulo
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null
                        expect(response.body).to.have.property('success', true)
                    })
            })
        })

        it('CT1 - Deve Atrbiuir uma Atividade', () => {
            cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

            cy.fixture('execucao/atividade/atribuirAtividades/payloadCt1.json').then((payload) => {
                cy.putRequest(`${Cypress.env('baseUrlDaas')}/api/atividades-agricolas/v1/Execucao/Atividade/AtribuirAtividades`, payload)
                    .then((response) => {
                        // Verifica o status code da resposta
                        expect(response.status).to.equal(200)

                        // Validar os tipos de campo da resposta
                        const responseBody = response.body;

                        // Validar o campo "success"
                        expect(responseBody).to.have.property('success').that.is.a('boolean');
                        expect(responseBody.success).to.equal(true);

                        const data = responseBody.data;

                        // Validar campo "atividadesAgricolas"
                        expect(data).to.have.property('atividadesAgricolas').that.is.an('array');
                        data.atividadesAgricolas.forEach((atividade) => {
                            expect(atividade).to.be.a('string');
                        });

                        // Validar campo "maquinas"
                        expect(data).to.have.property('maquinas').that.is.an('array');
                        data.maquinas.forEach((maquina) => {
                            expect(maquina).to.have.property('id').that.is.a('string');
                            expect(maquina).to.have.property('maquina').that.is.an('object');
                            expect(maquina.maquina).to.have.property('id').that.is.a('string');
                            expect(maquina.maquina).to.have.property('descricao').that.is.a('string');
                            expect(maquina).to.have.property('implemento').that.is.null;
                            expect(maquina).to.have.property('medidor').that.is.an('object');
                            expect(maquina.medidor).to.have.property('tipo').that.is.a('number');
                            expect(maquina.medidor).to.have.property('inicial').that.is.a('number');
                            expect(maquina.medidor).to.have.property('final').that.is.a('number');
                            expect(maquina).to.have.property('classificacaoBemId').that.is.a('string');
                        });

                        // Validar campo "responsaveis"
                        expect(data).to.have.property('responsaveis').that.is.an('array');
                        data.responsaveis.forEach((responsavel) => {
                            expect(responsavel).to.have.property('id').that.is.a('string');
                            expect(responsavel).to.have.property('responsavel').that.is.an('object');
                            expect(responsavel.responsavel).to.have.property('id').that.is.a('string');
                            expect(responsavel.responsavel).to.have.property('nome').that.is.a('string');
                            expect(responsavel.responsavel).to.have.property('urlImagem').that.is.null;
                            expect(responsavel).to.have.property('horasTrabalhadas').that.is.a('number');
                        });

                        // Validar campos de datas previstas
                        expect(data).to.have.property('dataPrevistaFinal').that.is.a('string');
                        expect(data).to.have.property('dataPrevistaInicial').that.is.a('string');

                        // Validar campo "unidadeArmazenamento"
                        expect(data).to.have.property('unidadeArmazenamento').that.is.an('object');
                        expect(data.unidadeArmazenamento).to.have.property('id').that.is.a('string');
                        expect(data.unidadeArmazenamento).to.have.property('descricao').that.is.a('string');


                    })
            })
        })

        it('CT2 - Deve Excluir Atividade Atribuída', () => {
            cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

            cy.fixture('execucao/atividade/atribuirAtividades/paramsCt2.json').then((params) => {
                cy.putRequest(`${Cypress.env('baseUrlDaas')}/api/atividades-agricolas/v1/Execucao/Atividade/ExcluirAtividadeAtribuida?id=${params.idAtividade}`)
                    .then((response) => {
                        // Verifica o status code da resposta
                        expect(response.status).to.equal(200)
                        // Verifica se o corpo da resposta existe e não é nulo
                        expect(response.body).to.exist
                        expect(response.body).to.not.be.null
                        expect(response.body).to.have.property('success', true)
                    })
            })
        })
    })
})