/// <reference types="cypress" />

import seedTestOperacoes from '../../../../fixtures/funcionalidades/financeiro/cadastros/operacoes/listagem.json'
import Operacoes from '../../../../support/commands/funcionalidades/financeiro/cadastros/operacoes.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Operações | Listagem de Operações', { tags: '@operacoes' }, () => {
    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Validar listagem das operações de acordo com o filtro aplicado', () => {
      //TODO: Aguardando correção do bug https://dev.azure.com/conexalabs/ProjetoX/_workitems/edit/25135
      // it.skip('Sem filtro', function () {
      //   Operacoes.listagem()
      // })

      // it('Tipo de operação: Entrada', function () {
      //   Operacoes.listagem(seedTestOperacoes.tipoOperacao.entrada)
      // })

      it('Tipo de operação: Saída', function () {
        Operacoes.listagem(seedTestOperacoes.tipoOperacao.saida)
      })
    })
  })
})
