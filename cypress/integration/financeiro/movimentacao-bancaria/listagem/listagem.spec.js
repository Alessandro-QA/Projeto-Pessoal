/// <reference types="cypress" />

import seedTestDocumento from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/listagem/documentos.json'
import seedTestListagemMovimentacao from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/listagem/validar-listagem.json'
import seedTestAgenda from '../../../../fixtures/funcionalidades/financeiro/movimentaca-bancaria/listagem/pagar-pela-agenda.json'
import AgendaFinanceira from '../../../../support/commands/funcionalidades/financeiro/agenda-financeira/agenda-financeira.js'
import testDescritpion from './bdd-description/listagem.description.js'
import Movimentacao from '../../../../support/commands/funcionalidades/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import Utils from '../../../../support/utils/utils.js'
import Authenticate from '../../../../support/commands/funcionalidades/login/login-logout.js'

context('Funcionalidade', () => {
  describe('Movimentação Bancaria | Listagem da movimentação bancaria', { tags: '@movimentacaoBancaria' }, () => {
    var dataAtual = Utils.getDate()
    var bodyDocumento357753 = Utils.replacer('dataSubstituicao', dataAtual, seedTestDocumento.documento357753)
    var bodyDocumento987456 = Utils.replacer('dataSubstituicao', dataAtual, seedTestDocumento.documento987456)
    var bodyDocumento159753 = Utils.replacer('dataSubstituicao', dataAtual, seedTestDocumento.documento159753)

    before(function () {
      const credenciais = Cypress.env('login_cenarios')
      Authenticate.login(credenciais)
      Utils.setAccessTokenToEnv(credenciais)
    })

    after(() => {
      Authenticate.logout()
    })

    context('Cadastro dos documentos e pagamento/recebimento via agenda financeira', () => {
      it('Cadastro dos documentso via API', function () {
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento357753, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento987456, 'login_cenarios')
        Utils.requestApi('POST', '/api/financeiro/v1/Documento', bodyDocumento159753, 'login_cenarios')
      })

      it('Pagar via agenda', function () {
        AgendaFinanceira.pagarPelaAgenda(seedTestAgenda.documento357753)
        AgendaFinanceira.pagarPelaAgenda(seedTestAgenda.documento987456)
        AgendaFinanceira.pagarReceberTitulo(seedTestAgenda.documento159753)
      })
    })

    context('Validar filtros da listagens de movimentações', () => {
      it('Filtrar por Empresa/Pessoa', function () {
        cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescritpion.filtroEmpresa)

        Movimentacao.validarListagem(seedTestListagemMovimentacao.movimentacaoEmpresa)
      })

      it('Filtrar por Conta', function () {
        cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescritpion.filtroConta)

        Movimentacao.validarListagem(seedTestListagemMovimentacao.movimentacaoContaBancaria)
      })

      it('Filtrar por Data', function () {
        cy.allure().severity('normal').startStep('test content')
        .descriptionHtml(testDescritpion.filtroData)

        Movimentacao.validarListagem(seedTestListagemMovimentacao.movimentacaoData)
      })
    })
  })
})
