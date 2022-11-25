/// <reference types="cypress" />

import Mdfe from '../../../../support/commands/nfe/mdfe/mdfe.js'
import seedTestMdfe from '../../../../fixtures/nfe/mdfe/emissao/emissao-mdfe-sem-reboque.json'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('MDF-e', { tags: '@mdfe' }, () => {
  before(function () {
    const credenciais = Cypress.env('login_nfe')
    Authenticate.login(credenciais)
  })

  after(() => {
    Authenticate.logout()
  })

  describe('MDF-e', { tags: '@mdfe' }, () => {
    describe('Emissão', () => {
      context('MDF-e com carregamento e descarregamento no mesmo estado (Sem Reboque)', () => {
        it('Deve autorizar MDF-e', function () {
          Mdfe.encerrar(seedTestMdfe)
          Mdfe.cadastrar(seedTestMdfe)
        })

        it('Deve validar MDF-e autorizado na listagem', function () {
          Mdfe.validarListagem(seedTestMdfe)
        })

        it('Deve encerrar MDF-e', { retries: { runMode: 2, openMode: 2, }, }, function () {
          Mdfe.encerrar(seedTestMdfe)
        })
      })
    })
  })
})
