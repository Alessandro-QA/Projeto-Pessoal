/// <reference types="cypress" />

import seedTestEmpresa from '../../../fixtures/atividades-agricolas/cadastros/fixture-empresa.json'
import Empresa from '../../../support/commands/atividades-agricolas/cadastros/empresa/empresa.js'
import Authenticate from '../../../support/commands/login/login-logout.js'
import testDescription from './bdd-description/empresa.description.js'

describe('Atividades Agrícolas', { tags: '@atividadesAgricolas' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_cadastro')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Cadastros', { tags: '@cadastro' }, () => {
    context('Empresa', () => {
      describe('Jurídica', () => {
        it('Deve cadastrar empresa com Inscrição Estadual ativa', { retries: { runMode: 1, openMode: 1, }, }, function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.juridicaComIe)
        })

        it('Deve cadastrar empresa sem Inscrição Estadual', { retries: { runMode: 1, openMode: 1, }, }, function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.juridicaSemIe)
        })
      })

      describe('Física', () => {
        it('Deve cadastrar empresa com Inscrição Estadual ativa', { retries: { runMode: 1, openMode: 1, }, }, function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.fisicaComIe)
        })

        it('Deve cadastrar empresa com Inscrição Estadual inativa', { retries: { runMode: 1, openMode: 1, }, }, function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.fisicaComIeInativa)
        })

        it('Deve cadastrar empresa sem Inscrição Estadual', { retries: { runMode: 1, openMode: 1, }, }, function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.fisicaSemIe)
        })
      })
    })
  })
})
