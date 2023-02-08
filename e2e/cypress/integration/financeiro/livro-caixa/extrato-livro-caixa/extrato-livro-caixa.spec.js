/// <reference types="cypress"/>

import payLoadLivroCaixa from '../../../../fixtures/financeiro/livro-caixa/extrato-livro-caixa/pay-load.json'
import seedTestLivroCaixa from '../../../../fixtures/financeiro/livro-caixa/extrato-livro-caixa/extrato-livro-caixa.json'
import Fazenda from '../../../../support/commands/atividades-agricolas/cadastros/fazenda/fazenda.js'
import LivroCaixa from '../../../../support/commands/financeiro/livro-caixa/livro-caixa.js'
import testDescription from './bdd-description/extrato-livro-caixa.description.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var lancamento = Utils.getPayloadPorAmbiente(payLoadLivroCaixa)

  before(function () {
    const credenciais = Cypress.env('login_cenarios')
    Authenticate.login(credenciais)
    Utils.setAccessTokenToEnv(credenciais)
    Utils.deleteDownloadsFolder()

    Fazenda.matricula(seedTestLivroCaixa.exportar.matriculaFazenda)
  })

  after(() => {
    Fazenda.deletarMatricula(seedTestLivroCaixa.exportar.matriculaFazenda)

    Authenticate.logout()
  })

  describe('Livro Caixa', { tags: '@livroCaixa' }, () => {
    context('Extrato do Livro Caixa', () => {
      context('Filtragem', () => {
        it('Cadastrar Lançamentos por API', function () {
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.entradaDedutivel1, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.entradaDedutivel2, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.entradaDedutivel3, 'login_cenarios')
          Utils.requestApi('POST', '/api/financeiro/v1/LivroCaixa', lancamento.saidaDedutivel, 'login_cenarios')
        })

        it('Deve Filtrar por produtor', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroProdutor)

          LivroCaixa.validarExtrato(seedTestLivroCaixa.filtroProdutor)
        })

        it('Deve filtrar por ano', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroAno)

          LivroCaixa.validarExtrato(seedTestLivroCaixa.filtroAno)
        })

        it('Deve filtrar por todos (Ativo e Inativo)', function () {
          cy.allure().severity('normal').startStep('test content')
            .descriptionHtml(testDescription.filtroTodos)

          cy.log('Inativar lancamento no livro caixa')
          LivroCaixa.inativarLancamento(seedTestLivroCaixa.filtroStatus)

          cy.log('Validar detalhes do extrato')
          LivroCaixa.validarExtrato(seedTestLivroCaixa.filtroStatus)
        })

      })

      context('Exportação do Livro Caixa', () => {
        it('Deve exportar extrato do Livro Caixa', function () {
          cy.allure().severity('critical').startStep('test content')
            .descriptionHtml(testDescription.exportar)

          LivroCaixa.validarExtrato(seedTestLivroCaixa.exportar)
        })
      })
    })
  })
})
