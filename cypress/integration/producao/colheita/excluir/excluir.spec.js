/// <reference types="cypress" />

import payloadColheita from '../../../../fixtures/producao/colheita/editar-colheita/cadastro-colheita.json'
import seedTestDashboard from '../../../../fixtures/producao/colheita/excluir-colheita/dashboard-colheita.json'
import testDescription from './bdd-description/excluir.description.js'
import { excluir, validarListagem } from '../../../../support/commands/producao/colheita.js'
import { getDate, replacer, setAccessTokenToEnv, requestApi, getPayloadPorAmbiente } from '../../../../support/utils/utils.js'
import { login, logout } from '../../../../support/commands/login/login-logout.js'

describe('Produção', { tags: '@producao' }, () => {
  var bodyColheita = replacer('dataSubstituicao', getDate(), getPayloadPorAmbiente(payloadColheita))

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    login(credenciais)
    setAccessTokenToEnv(credenciais)
  })

  after(() => {
    logout()
  })
  describe('Colheita', { tags: '@colheita' }, () => {
    describe('Exclusão', { tags: '@exclusao' }, () => {

      context('Exclusão de colheita externa', () => {
        it('Deve cadastrar colheita por API', function () {
          cy.allure().severity('normal').startStep('test content')

          requestApi('POST', '/api/producao-agricola/v1/colheitas', bodyColheita, 'login_cenarios')
        })

        it('Deve excluir colheita', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.excluir)

          excluir(seedTestDashboard.dashboard)
        })

        it('Deve validar exclusão na listagem de Colheita', { retries: { runMode: 1, openMode: 1, }, }, function () {
          cy.allure().severity('normal').startStep('test content')

          validarListagem(seedTestDashboard.dashboarAposExclusao)
        })
      })
    })
  })
})
