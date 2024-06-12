/// <reference types="cypress" />

import seedTestDief000 from '../../../../fixtures/financeiro/documentos/cadastro/documento-com-dief/dief000.json'
import seedTestDief010 from '../../../../fixtures/financeiro/documentos/cadastro/documento-com-dief/dief010.json'
import seedTestDief020 from '../../../../fixtures/financeiro/documentos/cadastro/documento-com-dief/dief020.json'
import seedTestDief040 from '../../../../fixtures/financeiro/documentos/cadastro/documento-com-dief/dief040.json'
import seedTestDief041 from '../../../../fixtures/financeiro/documentos/cadastro/documento-com-dief/dief041.json'
import seedTestDief070 from '../../../../fixtures/financeiro/documentos/cadastro/documento-com-dief/dief070.json'
import seedTestDief090 from '../../../../fixtures/financeiro/documentos/cadastro/documento-com-dief/dief090.json'
import Documentos from '../../../../support/commands/financeiro/documentos/documentos.js'
// import testDescription from './bdd-description/cadastro-documento.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('Documentos', { tags: '@documentos' }, () => {
    context('Cadastro', () => {
      context('DIEF 000', () => {
        it('Deve cadastrar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief000.mesmoEstado.cadastro)
        })

        it('Deve editar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief000.mesmoEstado.edicao)
        })

        it('Deve cadastrar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief000.estadoDiferente.cadastro)
        })

        it('Deve editar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief000.estadoDiferente.edicao)
        })


        it('Deve cadastrar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief000.todosTodos.cadastro)
        })

        it('Deve editar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief000.todosTodos.edicao)
        })
      })

      context('DIEF 010', () => {
        it('Deve cadastrar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief010.mesmoEstado.cadastro)
        })

        it('Deve editar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief010.mesmoEstado.edicao)
        })

        it('Deve cadastrar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief010.estadoDiferente.cadastro)
        })

        it('Deve editar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief010.estadoDiferente.edicao)
        })

        it('Deve cadastrar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief010.todosTodos.cadastro)
        })

        it('Deve editar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief010.todosTodos.edicao)
        })
      })

      context('DIEF 020', () => {
        it('Deve cadastrar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief020.mesmoEstado.cadastro)
        })

        it('Deve editar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief020.mesmoEstado.edicao)
        })

        it('Deve cadastrar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief020.estadoDiferente.cadastro)
        })

        it('Deve editar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief020.estadoDiferente.edicao)
        })

        it('Deve cadastrar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief020.todosTodos.cadastro)
        })

        it('Deve editar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief020.todosTodos.edicao)
        })
      })

      context('DIEF 040', () => {
        it('Deve cadastrar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief040.mesmoEstado.cadastro)
        })

        it('Deve editar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief040.mesmoEstado.edicao)
        })

        it('Deve cadastrar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief040.estadoDiferente.cadastro)
        })

        it('Deve editar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief040.estadoDiferente.edicao)
        })

        it('Deve cadastrar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief040.todosTodos.cadastro)
        })

        it('Deve editar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief040.todosTodos.edicao)
        })
      })

      context('DIEF 041', () => {
        it('Deve cadastrar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief041.mesmoEstado.cadastro)
        })

        it('Deve editar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief041.mesmoEstado.edicao)
        })

        it('Deve cadastrar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief041.estadoDiferente.cadastro)
        })

        it('Deve editar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief041.estadoDiferente.edicao)
        })

        it('Deve cadastrar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief041.todosTodos.cadastro)
        })

        it('Deve editar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief041.todosTodos.edicao)
        })
      })

      context('DIEF 070', () => {
        it('Deve cadastrar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief070.mesmoEstado.cadastro)
        })

        it('Deve editar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief070.mesmoEstado.edicao)
        })

        it('Deve cadastrar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief070.estadoDiferente.cadastro)
        })

        it('Deve editar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief070.estadoDiferente.edicao)
        })

        it('Deve cadastrar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief070.todosTodos.cadastro)
        })

        it('Deve editar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief070.todosTodos.edicao)
        })
      })

      context('DIEF 090', () => {
        it('Deve cadastrar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief090.mesmoEstado.cadastro)
        })

        it('Deve editar documento - Mesmo Estado', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief090.mesmoEstado.edicao)
        })

        it('Deve cadastrar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief090.estadoDiferente.cadastro)
        })

        it('Deve editar documento - Estado Diferente', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief090.estadoDiferente.edicao)
        })

        it('Deve cadastrar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.cadastrar(seedTestDief090.todosTodos.cadastro)
        })

        it('Deve editar documento - Todos/Todos Estados', function () {
          // cy.allure().severity('critical').startStep('test content')

          Documentos.validarCamposEdicao(seedTestDief090.todosTodos.edicao)
        })
      })
    })
  })
})