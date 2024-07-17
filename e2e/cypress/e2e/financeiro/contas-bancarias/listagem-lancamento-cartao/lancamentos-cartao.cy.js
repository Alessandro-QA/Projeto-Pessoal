/// <reference types="cypress" />

import payLoadDocumentos from '../../../../fixtures/financeiro/contas-bancarias/listagem-lancamentos-cartao/pay-load-documentos.json'
import categoriasPagamento from '../../../../fixtures/financeiro/contas-bancarias/listagem-lancamentos-cartao/categoriasPagamento.json'
import categoriasRecebimento from '../../../../fixtures/financeiro/contas-bancarias/listagem-lancamentos-cartao/categoriasRecebimento.json'
import seedTestLancamentoCartao from '../../../../fixtures/financeiro/contas-bancarias/listagem-lancamentos-cartao/lançamentos.json'
import testDescription from './bdd-description/lancamentos-cartao.description.js'
import ContasBancarias from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import Utils from '../../../../support/utils/utils.js'

const dayjs = require('dayjs');

describe('Financeiro', { tags: '@financeiro' }, () => {
  var documento = Utils.getPayloadPorAmbiente(payLoadDocumentos)

  // Obter a data e hora atual no formato desejado
  const dataAtual = dayjs().format('YYYY-MM-DDTHH:mm:ssZ');

  var documentoPago = Utils.replacer('dataSubstituicao', dataAtual, documento.Pagamento)
  var documentoRecebido = Utils.replacer('dataSubstituicao', dataAtual, documento.Recebimento)

  //Obter valor aletório para pagamento e recebimento
  const valorPagamento = (Math.random() * 999 + 1).toFixed(2);
  const valorRecebimento = (Math.random() * 999 + 1).toFixed(2);

  documentoPago.valor = valorPagamento
  documentoRecebido.valor = valorRecebimento
  
  // Gerar um índice aleatório para selecionar uma categoria aleatória do array categoriasPagamento
  const indiceAleatorio = Math.floor(Math.random() * categoriasPagamento.length);
  const categoriaPagamento = categoriasPagamento[indiceAleatorio];

  // Gerar um índice aleatório para selecionar uma categoria aleatória do array categoriasPagamento
  const indiceAleatorio2 = Math.floor(Math.random() * categoriasRecebimento.length);
  const categoriaRecebmento = categoriasRecebimento[indiceAleatorio2];

  // Substituir categoria aleatória no documento de Pagamento
  documentoPago.categoria = {
    codigo: categoriaPagamento.codigo,
    descricao: categoriaPagamento.descricao
  };

  // Substituir categoria aleatória no documento de Recebimento
  documentoRecebido.categoria = {
    codigo: categoriaRecebmento.codigo,
    descricao: categoriaRecebmento.descricao
  };


  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Listagem de Cartão de Crédito', () => {
      it('Deve registrar novos valores pro Cartão via API', function () {

        cy.allureDescriptionHtml(testDescription.gerarViaAPi).allureSeverity('normal')

        cy.log(documentoPago)
        cy.log(documentoRecebido)
        Utils.requestApi('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Pagamento/Recebimento`, documentoPago, 'login_cadastro')
        Utils.requestApi('POST', `${Cypress.env('baseUrl')}${Cypress.env('financeiro')}/Movimentacao/Pagamento/Recebimento`, documentoRecebido, 'login_cadastro')
      })

      it('Deve validar lançamentos no cartão - Sem filtro', function () {

        cy.allureDescriptionHtml(testDescription.semFiltro).allureSeverity('normal')
       
        ContasBancarias.validarCartao(seedTestLancamentoCartao.semFiltro)
      })

      it('Deve validar lançamentos no cartão - Filtrando por período', function () {
        
        cy.allureDescriptionHtml(testDescription.filtrarPeriodo).allureSeverity('normal')

        const doisMesesAnterior = dayjs().subtract(2, 'month').format('DD/MM/YYYY')
        const mesAnterior = dayjs().subtract(1, 'month').format('DD/MM/YYYY')
        seedTestLancamentoCartao.filtrarPeriodo.dataInicio = doisMesesAnterior
        seedTestLancamentoCartao.filtrarPeriodo.dataFim = mesAnterior
        ContasBancarias.validarCartao(seedTestLancamentoCartao.filtrarPeriodo)
      })
    })
  })
})
