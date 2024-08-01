/// <reference types="cypress" />

const seedTestPessoa = require('../../../fixtures/atividades-agricolas/cadastros/fixture-pessoa.json')
const Pessoa = require('../../../support/commands/atividades-agricolas/cadastros/pessoa/pessoa.js')
//const testDescription = require('./bdd-description/pessoa.description.js')

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {
  describe('Cadastros', { tags: '@cadastro' }, () => {
    context('Pessoa', () => {
      it('CT1 - Deve cadastrar uma pessoa', function () {
        //cy.allureDescriptionHtml(testDescription.Ct1).allureSeverity('normal')

        Pessoa.cadastro(seedTestPessoa)
      })

      it('CT2 - Deve validar o cadastro no Dashboard de Cadastro de pessoas', function () {
        //cy.allureDescriptionHtml(testDescription.Ct1).allureSeverity('normal')

        Pessoa.validarDashboard(seedTestPessoa)
      })
    })
  })
})