/// <reference types='Cypress' />

const description = require('../../../fixtures/fazenda/fazendaOnboarding/fazendaOnboarding.description')

context('Fazenda', () => {
    context('Fazenda Onboarding', () => {
        describe(`POST/PUT/DELETE - ${Cypress.env('fazenda')}/FazendaOnboarding - Criação de Fazenda`, () => {

            it('CT1 - Criar e deletar fazenda', () => {
                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.fixture('fazenda/fazendaOnboarding/payloadCt1.json').then((payload) => {
                    // Gerar número aleatório de 5 dígitos
                    const numeroAleatorio = Math.floor(Math.random() * 100000)
                    
                    payload.id = payload.id + numeroAleatorio

                    // Gerar um nome aleatório com base no número aleatório
                    payload.nome = `Fazenda_${numeroAleatorio}`

                    // Teste de criação de fazenda
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/FazendaOnboarding`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)

                            // Validar o corpo da resposta
                            expect(response.body).to.have.property('success', true);
                            expect(response.body).to.have.property('data');
                            expect(response.body.data).to.have.property('id').that.is.a('string');
                            expect(response.body.data).to.have.property('nome').that.is.a('string');
                            expect(response.body.data).to.have.property('latitude').that.is.a('number');
                            expect(response.body.data).to.have.property('longitude').that.is.a('number');
                            expect(response.body.data).to.have.property('codigo').that.is.a('number');

                            // Salvar o ID da fazenda criada para uso posterior
                            const fazendaId = response.body.data.id

                            // Teste de exclusão após a criação
                            cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/Fazenda`, fazendaId)
                                .then((deleteResponse) => {
                                    expect(deleteResponse.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                                    expect(deleteResponse.status).to.equal(200)
                                    expect(deleteResponse.body).to.have.property('success', true)

                                })
                        })
                })
            })
            it('CT2 - Editar fazenda', () => {
                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('fazenda/fazendaOnboarding/payloadCt2.json').then((payload) => {
                    cy.putRequest(`${Cypress.env('baseUrl')}${Cypress.env('fazenda')}/FazendaOnboarding`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.equal(Cypress.env('tenant'))
                            expect(response.status).to.equal(200)

                            // Verifica o cabeçalho da solicitação
                            expect(response.requestHeaders).to.have.property('x-tenant', Cypress.env('tenant'))

                            expect(response.body).to.have.property('success', true)
                            expect(response.body).to.have.property('data').that.is.an('object')

                            const data = response.body.data

                            // Valida as propriedades de 'data'
                            expect(data).to.have.property('id', payload.id)
                            expect(data).to.have.property('nome', payload.nome)
                            expect(data).to.have.property('latitude', payload.latitude)
                            expect(data).to.have.property('longitude', payload.longitude)
                            expect(data).to.have.property('codigo', payload.codigo)
                        })
                })
            })
        })
    })
})
