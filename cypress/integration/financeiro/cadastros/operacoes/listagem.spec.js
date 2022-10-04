/// <reference types="cypress" />

import seedTestOperacoes from '../../../../fixtures/funcionalidades/financeiro/cadastros/operacoes/listagem.json'
import Operacoes from '../../../../support/commands/funcionalidades/financeiro/cadastros/operacoes.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

context('Funcionalidade', () => {
  describe('Operações', { tags: '@operacoes' }, () => {

    var seedOperacao = Utils.getPayloadPorAmbiente(seedTestOperacoes)

    before(function () {
      const credenciais = Cypress.env('login_cadastro')
      Authenticate.login(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Listagem', () => {
      describe('Filtrar Filtrar por palavra chave', { tags: '@operacoes' }, () => {
        it('Por campo "Pesquisar"', function () {
          Operacoes.validarListagem(seedOperacao.campoPesquisar)
        })
      })

      describe('Filtrar por "Tipo de Operação"', { tags: '@operacoes' }, () => {
        //TODO: Aguardando correção do bug https://dev.azure.com/conexalabs/ProjetoX/_workitems/edit/25135
        it('Entrada', function () {
          Operacoes.validarListagem(seedOperacao.tipoDaOperacao.entrada)
        })

        it('Saída', function () {
          Operacoes.validarListagem(seedOperacao.tipoDaOperacao.saida)
        })
      })
    })
  })
})
