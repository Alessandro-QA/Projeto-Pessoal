/// <reference types="cypress" />

import seedTestEmpresa from '../../../fixtures/funcionalidades/atividades-agricolas/cadastros/fixture-empresa.json'
import Empresa from '../../../support/commands/funcionalidades/atividades-agricolas/cadastros/empresa/empresa.js'
import Authenticate from '../../../support/commands/funcionalidades/login/login-logout.js'
import testDescription from './bdd-description/empresa.description.js'

context('Funcionalidade', () => {
  context('Atividades Agricolas', () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Cadastro de Empresa', () => {

      describe('Jurídica', { tags: '@cadastro' }, () => {
        it('Com Inscrição Estadual ativa', function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.juridicaComIe)
        })

        it('Sem Inscrição Estadual', function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.juridicaSemIe)
        })
      })

      describe('Física', { tags: '@cadastro' }, () => {
        it('Com Inscrição Estadual ativa', function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.fisicaComIe)
        })

        it('Com Inscrição Estadual inativa', function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.fisicaComIeInativa)
        })

        it('Sem Inscrição Estadual', function () {
          cy.allure().severity('critical').startStep('test content').descriptionHtml(testDescription.empresa)

          Empresa.cadastro(seedTestEmpresa.fisicaSemIe)
        })
      })
    })
  })
})
