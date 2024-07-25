/// <reference types='Cypress' />

const description = require('../../../fixtures/safra/safra/safra.description')

context('Safra', () => {
    context('Cadastro de Safra', () => {

        let safraID
        let randomNumber

        describe(`POST/PUT/DELETE - ${Cypress.env('safra')}/Safra - Criar/Editar/Apagar Safra`, () => {

            it('CT1 - Deve criar uma nova Safra', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('safra/safra/payloadCt1.json').then((payload) => {

                    // Gerar um novo número aleatório, pois o documento não pode possuir o mesmo número
                    randomNumber = Math.floor(Math.random() * 1000000) // Gera um número aleatório entre 0 e 999999
                    payload.descricao = "Teste Edição " + randomNumber.toString() // Atualiza o campo 'numero' no payload

                    cy.postRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('safra')}/Safra`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.not.be.null
                            expect(response.body).to.exist

                            // Verificando o campo data
                            expect(response.body).to.have.property('data').that.is.an('object')
                            // Verificando os campos dentro de data
                            expect(response.body.data).to.have.property('id').that.is.a('string')
                            expect(response.body.data).to.have.property('descricao').that.is.a('string').to.be.equal(payload.descricao)
                            expect(response.body.data).to.have.property('dataInicial').that.is.a('string').to.be.equal(payload.dataInicial)
                            expect(response.body.data).to.have.property('dataFinal').that.is.a('string').to.be.equal(payload.dataFinal)
                            expect(response.body.data).to.have.property('ativo').to.be.true

                            safraID = response.body.data.id

                        })
                })
            })

            it('CT2 - Deve Editar a Safra Criada', () => {
                cy.fixture('safra/safra/payloadCt2.json').then((payload) => {

                    payload.id = safraID
                    payload.descricao = "Teste Edição " +  randomNumber.toString()
                    cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                    cy.putRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('safra')}/Safra`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.not.be.null
                            expect(response.body).to.exist

                            // Verificando o campo data
                            expect(response.body).to.have.property('data').that.is.an('object')
                            // Verificando os campos dentro de data
                            expect(response.body.data).to.have.property('id').that.is.a('string')
                            expect(response.body.data).to.have.property('descricao').that.is.a('string').to.be.equal(payload.descricao)
                            expect(response.body.data).to.have.property('dataInicial').that.is.a('string').to.be.equal(payload.dataInicial)
                            expect(response.body.data).to.have.property('dataFinal').that.is.a('string').to.be.equal(payload.dataFinal)
                            expect(response.body.data).to.have.property('ativo').to.be.false

                        })
                })
            })

            it('CT3 - Deve Deletar a Safra Criada', () => {
                cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')
                cy.deleteRequest(`${Cypress.env('baseUrlDaas')}${Cypress.env('safra')}/Safra`, safraID).then((response) => {
                    expect(response.status).to.be.equal(200)
                })
            })

        })
    })
})
