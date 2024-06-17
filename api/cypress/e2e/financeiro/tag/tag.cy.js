/// <reference types='Cypress' />

const description = require('../../../fixtures/financeiro/tag/tag/tag.description');

context('Financeiro', () => {
    context('TAG', () => {
        describe(`GET - ${Cypress.env('financeiroBackoffice')}/Tag - Recupera Lista Geral de Tags`, () => {
           
            let randomNumber
            let tagID
            let tagDescricao
            let tagCodigo
            let tagStatus

            it('CT1 - Recupera Todas as Tags', () => {

                cy.allureDescriptionHtml(description.Ct1).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('financeiroBackoffice')}/Tag`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.success).to.be.a('boolean')
                      
                        // Verificar os primeiros quatro elementos, se existirem. Evitando testar de todos caso haja 100+ Tags
                        for (let i = 0; i < Math.min(4, response.body.data.length); i++) {
                            const item = response.body.data[i]
                            expect(item).to.have.property('id').and.to.be.a('string')
                            expect(item).to.have.property('descricao').and.to.be.a('string')
                            expect(item).to.have.property('codigo').and.to.be.a('number')
                            expect(item).to.have.property('active').and.to.be.a('boolean')
                        }

                    })
            })

            it('CT2 - Deve criar uma nova TAG', () => {

                cy.allureDescriptionHtml(description.Ct2).allureSeverity('normal')

                cy.fixture('financeiro/tag/tag/payloadCt2.json').then((payload) => {

                    // Gerar um novo número aleatório, para não criar TAG com mesmo nome
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.descricao = `${payload.descricao} ${randomNumber}`;; // Atualiza o campo 'descricao' no payload

                    cy.postRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('financeiroBackoffice')}/Tag`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            const responseData = response.body.data;
                            // Armazena os valores criados para Testar a recuperação dos mesmo no CT4
                            tagID = responseData.id
                            tagDescricao = responseData.descricao
                            tagCodigo = responseData.codigo
                            tagStatus = responseData.active

                            expect(responseData).to.have.property('id').and.to.be.a('string');
                            expect(responseData).to.have.property('descricao', payload.descricao);
                            expect(responseData).to.have.property('codigo').and.to.be.a('number');
                            expect(responseData).to.have.property('active', true).and.to.be.a('boolean');
                        });
                });
            });

            it('CT3 - Deve Editar uma TAG existente', () => {
                cy.fixture('financeiro/tag/tag/payloadCt3.json').then((payload) => {

                    cy.allureDescriptionHtml(description.Ct3).allureSeverity('normal')

                    // Gerar um novo número aleatório, para não editar uma TAG com mesmo nome
                    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
                    payload.descricao = `${payload.descricao} ${randomNumber}`;; // Atualiza o campo 'descricao' no payload

                    if(randomNumber > 50000) {
                        payload.active = true;
                    }
        
                    cy.putRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('financeiroBackoffice')}/Tag`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'));
                            expect(response.status).to.be.equal(200);
                            expect(response.body).to.not.be.null;
                            expect(response.body).to.exist;

                            const responseData = response.body.data;
                            expect(responseData).to.have.property('id').and.to.be.a('string');
                            expect(responseData).to.have.property('descricao', payload.descricao);
                            expect(responseData).to.have.property('codigo').and.to.be.a('number').and.to.be.equal(payload.codigo);
                            expect(responseData).to.have.property('active', true).and.to.be.a('boolean').and.to.be.equal(payload.active);
                        });
                });
            });

            it('CT4 - Recupera Somente uma Tag pelo seu ID', () => {

                cy.allureDescriptionHtml(description.Ct4).allureSeverity('normal')

                cy.getRequest(`${Cypress.env('baseUrlBackoffice')}${Cypress.env('financeiroBackoffice')}/Tag/${tagID}`)
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.success).to.be.a('boolean')
                    
                        const responseData = response.body.data;
                        expect(responseData).to.have.property('id').and.to.be.a('string').and.to.be.equal(tagID);
                        expect(responseData).to.have.property('descricao').and.to.be.a('string').and.to.be.equal(tagDescricao);
                        expect(responseData).to.have.property('codigo').and.to.be.a('number').and.to.be.equal(tagCodigo);
                        expect(responseData).to.have.property('active', true).and.to.be.a('boolean').and.to.be.equal(tagStatus);

                    })
            })


        })
    })
})
