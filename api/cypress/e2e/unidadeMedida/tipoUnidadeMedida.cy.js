/// <reference types='Cypress' />

const { validate } = require('../../fixtures/unidadeMedida/tipoUnidadeMedida/validate')
const description = require('../../fixtures/unidadeMedida/tipoUnidadeMedida/tipoUnidadeMedida.description');

context('Unidade de Medida', () => {
    context('Tipo Unidade Medida', () => {
        describe(`GET - ${Cypress.env('unidadeMedida')}/UnidadeMedida/tipoUnidadeMedida - Lista as Unidade de Medidas filtradas pelo Tipo`, () => {

            it('CT1 - Filtrando unidade de Medida por um Tipo Específico', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                // Definindo os tipos disponíveis
                const tipos = ['Unitario', 'Volume', 'Comprimento', 'Massa', 'Area', 'Climatica'];

                // Selecionando um tipo aleatório
                const tipoAleatorio = tipos[Math.floor(Math.random() * tipos.length)];

                cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('unidadeMedida')}/UnidadeMedida/${tipoAleatorio}/Unidades`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist

                        // Itera sobre cada item na lista de resposta e aplica a função de validação
                        response.body.forEach((item) => {
                            validate(item);
                        });
                    });
            })
        })
    })
})

