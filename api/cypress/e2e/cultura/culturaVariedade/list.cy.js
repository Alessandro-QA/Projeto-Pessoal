/// <reference types='Cypress' />

const description = require('../../../fixtures/cultura/culturaVariedade/list/list.description')

context('Cultura', () => {
    context('CulturaVariedade', () => {
        describe(`GET - ${Cypress.env('cultura')}/CulturaVariedade/List - Obtém a Listagem de Variedades`, () => {
            it('CT1 - Deve obter uma listagem com todas as variedades na primeira página, tamanho 10', () => {

                cy.fixture('cultura/culturaVariedade/list/paramsCt1.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validarResponse(response.body)
                        })
                })
            })

            it('CT2 - Deve listar as variedades pelo ID da Cultura', () => {
                cy.fixture('cultura/culturaVariedade/list/paramsCt2.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validarResponse(response.body)

                        })
                })

            })

            it('CT3 - Deve listar as variedades pela descrição', () => {
                cy.fixture('cultura/culturaVariedade/list/paramsCt3.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validarResponse(response.body)

                        })
                })

            })

            it('CT4 - Deve listar as variedades pelo Nome Científico', () => {
                cy.fixture('cultura/culturaVariedade/list/paramsCt4.json').then((params) => {

                    cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                    cy.getRequestWithParams(`${Cypress.env('baseUrlDaas')}${Cypress.env('cultura')}/CulturaVariedade/List`, params)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).to.be.equal(200)
                            expect(response.body).to.exist
                            expect(response.body).to.not.be.null

                            validarResponse(response.body)

                        })
                })

            })
        })
    })
})


function validarResponse(data) {
    data.forEach(item => {
      // Validar o tipo de cada propriedade do objeto
      expect(item).to.be.an('object');
      
      expect(item.id).to.be.a('string');
      expect(item.descricao).to.be.a('string');
      expect(item.nomeCientifico).to.be.a('string');
      
      // Validar o tipo da propriedade 'detentoras', que é um array de objetos
      expect(item.detentoras).to.be.an('array');
      item.detentoras.forEach(detentora => {
        expect(detentora).to.be.an('object');
        expect(detentora.id).to.be.a('string');
        
        // Validar o tipo da propriedade 'detentora', que é um objeto
        expect(detentora.detentora).to.be.an('object');
        expect(detentora.detentora.id).to.be.a('string');
        expect(detentora.detentora.descricao).to.be.a('string');
      });
      
      expect(item.rnc).to.be.a('string');
      expect(item.diasParaColheita).to.be.a('number');
      expect(item.producaoEstimada).to.be.a('number');
      expect(item.ativo).to.be.a('boolean');
      expect(item.culturaId).to.be.a('string');
      expect(item.culturaDescricao).to.be.a('string');
      
      // Validar o tipo da propriedade 'material', que é um objeto
      expect(item.material).to.be.an('object');
      expect(item.material.id).to.be.a('string');
      expect(item.material.descricao).to.be.a('string');
    });
  }