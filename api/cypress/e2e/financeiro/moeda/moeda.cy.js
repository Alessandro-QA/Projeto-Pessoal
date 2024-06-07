/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Moeda', () => {
        describe('GET - /api/financeiro/v1/Moeda - Obtém todos os registros de Moeda sem filtro', () => {

            it('CT1 - Obtém Todos os Registros de Moeda sem filtro', () => {
                cy.getRequest('/api/financeiro/v1/Moeda')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.data).to.be.an('array').that.is.not.empty

                        response.body.data.forEach((moeda) => {
                            expect(moeda.id).to.be.a('string');
                            expect(moeda.descricao).to.be.a('string');
                            expect(moeda.codigo).to.be.a('number');
                            expect(moeda.sigla).to.be.a('string');
                            expect(moeda.simbolo).to.be.a('string');
                            expect(moeda.ativo).to.be.a('boolean');
                        })
                    })
            })

            it('CT2 - Obtém um Registro de Moeda específico pelo ID', () => {
                cy.getRequest('/api/financeiro/v1/Moeda/f7869132-3eb0-4bfc-b416-754b040c98ff')
                    .then((response) => {
                        expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                        expect(response.status).be.equal(200)
                        expect(response.body).to.exist
                        expect(response.body).be.not.null
                        expect(response.body.data.id).to.equal('f7869132-3eb0-4bfc-b416-754b040c98ff');
                        expect(response.body.data.descricao).to.be.a('string');
                        expect(response.body.data.codigo).to.be.a('number');
                        expect(response.body.data.sigla).to.be.a('string');
                        expect(response.body.data.simbolo).to.be.a('string');
                        expect(response.body.data.ativo).to.be.a('boolean');
                    });
            })
        })
    })
})