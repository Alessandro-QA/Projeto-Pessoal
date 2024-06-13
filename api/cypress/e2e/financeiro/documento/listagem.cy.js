/// <reference types='Cypress' />

context('Financeiro', () => {
    context('Documento', () => {
        describe(`POST - ${Cypress.env('financeiro')}/Documento/Listagem - Obtém registros de Documentos`, () => {

            it('CT1 - Obter Registros de Documentos', () => {
                cy.fixture('financeiro/documento/listagem/payloadCt1.json').then((payload) => {
                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            // Verifica se o tamanho do array de documentos é 20 [No payload foi solicitado o tamanho 20]
                            expect(response.body).to.have.length(20)
                            
                            // Verifica os tipos dos campos do primeiro elemento do array [Sem necessidade de conferir todos]
                            const primeiroDocumento = response.body[0];
                            expect(primeiroDocumento).to.have.property('id').that.is.a('string')
                            expect(primeiroDocumento).to.have.property('categorias').that.is.an('array')
                            expect(primeiroDocumento.categorias[0]).to.have.property('id').that.is.a('string')
                            expect(primeiroDocumento.categorias[0]).to.have.property('descricao').that.is.a('string')
                            expect(primeiroDocumento).to.have.property('categoriasDescricao').that.is.a('string')
                            expect(primeiroDocumento).to.have.property('numeroDocumento').that.is.a('string')
                            expect(primeiroDocumento).to.have.property('operacao').that.is.an('object')
                            expect(primeiroDocumento.operacao).to.have.property('id').that.is.a('string')
                            expect(primeiroDocumento.operacao).to.have.property('descricao').that.is.a('string')
                            expect(primeiroDocumento).to.have.property('data').that.is.a('string')
                            expect(primeiroDocumento).to.have.property('dataRecebimento').that.is.a('string')
                            expect(primeiroDocumento).to.have.property('pessoa').that.is.an('object')
                            expect(primeiroDocumento.pessoa).to.have.property('pessoaTipo').that.is.a('number')
                            expect(primeiroDocumento.pessoa).to.have.property('numeroDocumento').that.is.a('string')
                            expect(primeiroDocumento.pessoa).to.have.property('id').that.is.a('string')
                            expect(primeiroDocumento.pessoa).to.have.property('descricao').that.is.a('string')
                            expect(primeiroDocumento).to.have.property('valor').that.is.a('number')
                            expect(primeiroDocumento).to.have.property('moeda').that.is.an('object')
                            expect(primeiroDocumento.moeda).to.have.property('id').that.is.a('string')
                            expect(primeiroDocumento.moeda).to.have.property('descricao').that.is.a('string')
                            expect(primeiroDocumento).to.have.property('tags').that.is.an('array')
                            expect(primeiroDocumento).to.have.property('conferido').that.is.a('boolean')
                        })
                })
            })

            it('CT2 - Obter Registros de Documentos com Filtro', () => {
                cy.fixture('financeiro/documento/listagem/payloadCt2.json').then((payload) => {

                    // Extrair PessoaId do payload
                    const pessoaId = payload.PessoaId;

                    cy.postRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Documento/Listagem`, payload)
                        .then((response) => {
                            expect(response.requestHeaders).to.have.property('x-tenant').to.be.equal(Cypress.env('tenant'))
                            expect(response.status).be.equal(200)
                            expect(response.body).be.not.null
                            expect(response.body).to.exist
                            
                            // Verificar se todos os documentos no response correspondem ao filtro
                            response.body.forEach((documento) => {
                                expect(documento.pessoa.id).to.equal(pessoaId);
                            });
                        
                        })
                })
            })
        })
    })
})
