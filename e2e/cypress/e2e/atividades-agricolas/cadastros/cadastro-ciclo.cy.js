/// <reference types="cypress" />

const seedTestCiclo = require('../../../fixtures/atividades-agricolas/cadastros/fixture-ciclo.json');
const Ciclo = require('../../../support/commands/atividades-agricolas/cadastros/ciclo/ciclo.js');
const testDescription = require('./bdd-description/ciclo.description.js');

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {

  describe('Cadastros', { tags: '@cadastro' }, () => {
    context('Ciclo', () => {
      // Teste de cadastro de um novo ciclo de milho
      it('CT1 - Deve cadastrar um ciclo de milho', function () {

        cy.allureDescriptionHtml(testDescription.ciclo).allureSeverity('normal')

        Ciclo.cadastrar(seedTestCiclo)
      })

      // Validação da Pesquisade ciclo
      it('CT2 - Deve pesquisar o ciclo de milho cadastrado', function () {

        cy.allureDescriptionHtml(testDescription.ciclo).allureSeverity('normal')

        Ciclo.validarBusca(seedTestCiclo)
      })

      // Validação de Filtragem
      it('CT3 - Deve validar a filtragem de ciclo pela Safra', function () {

        cy.allureDescriptionHtml(testDescription.ciclo).allureSeverity('normal')

        Ciclo.validarFiltroSafra(seedTestCiclo)
      })

      // Validação de Filtragem
      it('CT4 - Deve validar a filtragem de ciclo pela Data', function () {

        cy.allureDescriptionHtml(testDescription.ciclo).allureSeverity('normal')

        Ciclo.validarFiltroData(seedTestCiclo)
      })

      // Validação de Inativos
      it('CT5 - Deve validar a filtragem de Situação', function () {

        cy.allureDescriptionHtml(testDescription.ciclo).allureSeverity('normal')

        Ciclo.validarInativos(seedTestCiclo)
      })

      // Editar Ciclo
      it('CT6 - Deve editar um Ciclo Criado', function () {

        cy.allureDescriptionHtml(testDescription.ciclo).allureSeverity('normal')

        Ciclo.editarCiclo(seedTestCiclo)
      })

      // Editar Ciclo
      it.only('CT7 - Deve Validar Campos Obrigatórios', function () {

        cy.allureDescriptionHtml(testDescription.ciclo).allureSeverity('normal')

        Ciclo.camposObrigatoriosCiclo(seedTestCiclo)
      })


    })
  })
})

