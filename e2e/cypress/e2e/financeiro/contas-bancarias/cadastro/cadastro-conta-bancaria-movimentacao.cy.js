/// <reference types="cypress" />

import seedTestContaBancaria from '../../../../fixtures/financeiro/contas-bancarias/cadastro/conta-bancaria-movimentacao.json'
import ContaBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import MovimentacaoBancaria from '../../../../support/commands/financeiro/movimentacoes-bancarias/movimentacao-bancaria.js'
import Utils from '../../../../support/utils/utils.js'
import dayjs from 'dayjs'
import testDescription from './bdd-description/cadastro-conta-bancaria.description.js'


describe('Financeiro', { tags: '@financeiro' }, () => {

  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Cadastro de Conta - Sem inclusão de saldo disponível', () => {
      const nomeConta = Utils.getNumeric(5)
      const today = dayjs().format('DD/MM/YYYY')
      const dataInicial = dayjs().subtract(1, 'day').format('DD/MM/YYYY')
      const dataFinal = dayjs().add(1, 'day').format('DD/MM/YYYY')
      const saldoInicial = Utils.getNumeric(7)
      const agencia = Utils.getNumeric(4)
      const agenciaDigito = Utils.getNumeric(1)
      const conta = Utils.getNumeric(5)
      const contaDigito = Utils.getNumeric(1)


      it('Deve cadastrar conta Bancária sem marcar o checkbox "Incluir no saldo disponível"', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.naoIncluirSaldoDisponivel)

        seedTestContaBancaria.contaBancaria.nomeConta = seedTestContaBancaria.contaBancaria.nomeConta + nomeConta
        seedTestContaBancaria.contaBancaria.dataSaldoInicial = today
        seedTestContaBancaria.contaBancaria.saldoInicial = saldoInicial
        seedTestContaBancaria.contaBancaria.saldoAtual = saldoInicial
        seedTestContaBancaria.contaBancaria.agencia = agencia
        seedTestContaBancaria.contaBancaria.agenciaDigito = agenciaDigito
        seedTestContaBancaria.contaBancaria.numeroConta = conta
        seedTestContaBancaria.contaBancaria.contaDigito = contaDigito

        ContaBancaria.cadastroEditar(seedTestContaBancaria.contaBancaria)
      })

      it('Deve validar movimentação financeira e validar lançamento de movimentação inicial', function () {
        cy.allureSeverity('normal').allureDescriptionHtml(testDescription.naoIncluirSaldoDisponivel)

        seedTestContaBancaria.listagemMovimentacao.contaBancaria = seedTestContaBancaria.listagemMovimentacao.contaBancaria + nomeConta
        seedTestContaBancaria.listagemMovimentacao.filtroDataInicio = dataInicial
        seedTestContaBancaria.listagemMovimentacao.filtroDataFim = dataFinal
        seedTestContaBancaria.listagemMovimentacao.cardMovimentacao.valor = saldoInicial
        seedTestContaBancaria.listagemMovimentacao.saldoDoDia = saldoInicial

        MovimentacaoBancaria.validarListagem(seedTestContaBancaria.listagemMovimentacao)

        cy.log('Deleta Conta Criada Para Evitar Acumulo de Registro')
        const idConta = Cypress.env('idConta') // Acessa o id armazenado
        cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/ContaBancaria`, idConta).then((responseDelete) => {
          expect(responseDelete.status).to.be.equal(200)
        })

        cy.hideApiView()
      })
    })
  })
})
