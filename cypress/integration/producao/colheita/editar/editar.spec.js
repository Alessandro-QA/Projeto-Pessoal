/// <reference types="cypress" />

import payloadColheita from '../../../../fixtures/producao/colheita/editar-colheita/cadastro-colheita.json'
import seedTestEditar from '../../../../fixtures/producao/colheita/editar-colheita/editar.json'
import seedTestDashboard from '../../../../fixtures/producao/colheita/editar-colheita/dashboar-colheita.json'
import testDescription from './bdd-description/editar.description.js'
import { cadastrarEditar, validarListagem } from '../../../../support/commands/producao/colheita.js'
import { getDate, replacer, setAccessTokenToEnv, requestApi, getPayloadPorAmbiente } from '../../../../support/utils/utils.js'
import { login, logout } from '../../../../support/commands/login/login-logout.js'

// TODO: Bug 41593: Conversão de unidade está divergente entre as bases de Dev, QA e Produção
// Os teste de cadastro de colheita no Ambiente de QA estão em pausa devido a divergência nos ambiente, onde
// será necessário aguardar a resolução do bug descrito para a reativação do mesmo
if ((Cypress.env('ambiente') === 'dev')) {
  describe('Produção', { tags: '@producao' }, () => {
    var colheita = getPayloadPorAmbiente(payloadColheita)

    var dataAtual = getDate()
    var bodyColheita = replacer('dataSubstituicao', dataAtual, colheita)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      login(credenciais)
      setAccessTokenToEnv(credenciais)
    })

    after(() => {
      logout()
    })

    describe('Colheita', { tags: '@colheita' }, () => {
      describe('Edição', { tags: '@edicao' }, () => {

        context('Edição de colheita externa', () => {
          it('Deve cadastrar colheita por API', function () {
            cy.allure().severity('normal').startStep('test content')

            requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
          })

          it('Deve editar colheita', { retries: { runMode: 1, openMode: 1, }, }, function () {
            cy.allure().severity('critical').startStep('test content')
              .descriptionHtml(testDescription.editar)

            cadastrarEditar(seedTestEditar)
          })

          it('Deve validar listagem de colheita após edição', { retries: { runMode: 1, openMode: 1, }, }, function () {
            cy.allure().severity('normal').startStep('test content')

            validarListagem(seedTestDashboard)
          })
        })
      })
    })
  })
}
