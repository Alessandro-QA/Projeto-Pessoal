/// <reference types='Cypress' />

const { validate } = require('../../fixtures/unidadeMedida/unidadeMedida/validate')
const description = require('../../fixtures/unidadeMedida/unidadeMedida/unidadeMedida.description');

context('Unidade de Medida', () => {
    context('UnidadeMedida', () => {
        describe(`POST/PUT/GET/DELETE - ${Cypress.env('unidadeMedida')}/UnidadeMedida - Realiza a Criação/Manutenção/Exclusão das Unidades de Medida`, () => {

            let unidadeID
            let randomNumber
            let descricaoEdit
            let codigoEdit

            it('CT1 - Cria uma Nova Unidade de Medida', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('unidadeMedida/unidadeMedida/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório, pois a Unidade Medida não pode possuir o mesmo número
                    randomNumber = Math.floor(Math.random() * 1000); // Gera um número aleatório entre 0 e 1000

                    payload.descricao = payload.descricao + randomNumber
                    payload.codigo = payload.codigo + randomNumber

                    cy.postRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('unidadeMedida')}/UnidadeMedida`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist

                            validate(response.body.data);

                            unidadeID = response.body.data.id
                        });
                })
            })

            it('CT2 - Atualiza a Unidade de Medida Cadastrada', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('unidadeMedida/unidadeMedida/payloadCt2.json').then((payload) => {

                    payload.id = unidadeID

                    // Gerar um novo número aleatório, pois a Unidade Medida não pode possuir o mesmo número
                    randomNumber = Math.floor(Math.random() * 1000); // Gera um número aleatório entre 0 e 1000

                    payload.descricao = payload.descricao + randomNumber
                    payload.codigo = payload.codigo + randomNumber

                    // Salvando valores que foram editados para conferir posteriormente
                    descricaoEdit = payload.descricao
                    codigoEdit = payload.codigo 

                    cy.putRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('unidadeMedida')}/UnidadeMedida`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist

                            validate(response.body.data);

                        });
                })
            })

            it('CT3 - Recupera a Unidade de Medida Cadastrada', () => {

                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                cy.fixture('unidadeMedida/unidadeMedida/payloadCt2.json').then((payload) => {

                    payload.id = unidadeID

                    cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('unidadeMedida')}/UnidadeMedida/${unidadeID}`)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).to.exist

                            validate(response.body);

                            //Valida edição anterior
                            expect(response.body.descricao).to.be.equal(descricaoEdit)
                            expect(response.body.codigo).to.be.equal(codigoEdit)

                        });
                })
            })

            it('CT4 - Apaga a Unidade de Medida', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.deleteRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('unidadeMedida')}/UnidadeMedida`, unidadeID)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)


                    });
            })

        })
    })
})

