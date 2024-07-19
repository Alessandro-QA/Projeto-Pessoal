/// <reference types="cypress" />

import seedTestDocumento1 from '../../../../fixtures/financeiro/documentos/cadastro/documento1.json'
import seedTestDocumento2 from '../../../../fixtures/financeiro/documentos/cadastro/documento2.json'
import seedTestDocumento3 from '../../../../fixtures/financeiro/documentos/cadastro/documento3.json'
import seedTestDocumento4 from '../../../../fixtures/financeiro/documentos/cadastro/documento4.json'
import seedTestDocumento5 from '../../../../fixtures/financeiro/documentos/cadastro/documento5.json'
import seedTestDocumento6 from '../../../../fixtures/financeiro/documentos/cadastro/documento6.json'
import Documentos from '../../../../support/commands/financeiro/documentos/documentos.js'
import testDescription from './bdd-description/cadastro-documento.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

const dayjs = require('dayjs')

describe('Financeiro', { tags: '@financeiro' }, () => {

  describe('Documentos', { tags: '@documentos' }, () => {
    context('Cadastro', () => {

      context('Dedutivel, com tag, observação, já pago, boleto', () => {

        seedTestDocumento1.numeroDocumento = Utils.getAlphaNumeric(10)
        seedTestDocumento1.valorTotal = (Math.random() * 9999 + 1).toFixed(2)

        it('Deve cadastrar documento', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes1).allureSeverity('normal')

          cy.log(seedTestDocumento1)

          Documentos.cadastrar(seedTestDocumento1)
        })
        it('Deve validar os detalhes do documento', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes1).allureSeverity('normal')

          Documentos.validarDetalhes(seedTestDocumento1)
        })
      })

      context('Dedutivel, já pago, dinheiro, com rateio de ciclos e categoria', () => {

        seedTestDocumento2.numeroDocumento = Utils.getAlphaNumeric(10)

        // Gerar um valor aleatório para valorTotal
        seedTestDocumento2.valorTotal = (Math.random() * 9999 + 1).toFixed(2)

        // Converter valorTotal para número
        const valorTotal = parseFloat(seedTestDocumento2.valorTotal.replace(',', '.'))

        // Dividir o valor total em duas partes para ciclos de forma que os valores estejam corretos
        const valorCiclo1 = (Math.random() * valorTotal).toFixed(2)
        const valorCiclo2 = (valorTotal - valorCiclo1).toFixed(2)

        seedTestDocumento2.ciclos[0].valor = valorCiclo1
        seedTestDocumento2.ciclos[1].valor = valorCiclo2

        // Gerar um valor aleatório para a primeira categoria
        const valorCategoria1 = (Math.random() * valorTotal).toFixed(2);

        // Garantir que o valor da segunda categoria não seja negativo
        const valorCategoria2 = (valorTotal - valorCategoria1).toFixed(2);

        // Calcular as porcentagens
        const percentage1 = ((valorCategoria1 / valorTotal) * 100).toFixed(2);
        const percentage2 = ((valorCategoria2 / valorTotal) * 100).toFixed(2);

        // Atualizar os objetos com valores e porcentagens
        seedTestDocumento2.categorias[0].valor = valorCategoria1;
        seedTestDocumento2.categorias[0].porcentagem = percentage1 + "%";

        seedTestDocumento2.categorias[1].valor = valorCategoria2;
        seedTestDocumento2.categorias[1].porcentagem = percentage2 + "%";

        seedTestDocumento2.parcelas[0].valorParcela = seedTestDocumento2.valorTotal

        it('Deve cadastrar documento', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes2).allureSeverity('critical')

          cy.log(seedTestDocumento2)

          Documentos.cadastrar(seedTestDocumento2)
        })
        it('Deve validar os detalhes do documento', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes2).allureSeverity('critical')

          Documentos.validarDetalhes(seedTestDocumento2)
        })
      })

      context('Dedutivel, observação, parcelado, duas parcelas, boleto, com rateio de ciclos', () => {

        seedTestDocumento3.numeroDocumento = Utils.getAlphaNumeric(10)
        // Gerar um valor aleatório para valorTotal
        seedTestDocumento3.valorTotal = (Math.random() * 9999 + 1).toFixed(2)

        // Converter valorTotal para número
        const valorTotal = parseFloat(seedTestDocumento3.valorTotal.replace(',', '.'))

        // Gerar um valor aleatório para o ciclo 1
        const valorCiclo1 = (Math.random() * valorTotal).toFixed(2)

        // Gerar um valor aleatório para o ciclo 2, limitando para que não ultrapasse o valor restante após o ciclo 1
        const valorRestante1 = valorTotal - valorCiclo1
        const valorCiclo2 = (Math.random() * valorRestante1).toFixed(2)

        // Calcular o valor para o ciclo 3
        const valorCiclo3 = (valorTotal - valorCiclo1 - valorCiclo2).toFixed(2)

        // Definir os valores nos ciclos do seedTestDocumento3
        seedTestDocumento3.ciclos[0].valor = valorCiclo1
        seedTestDocumento3.ciclos[1].valor = valorCiclo2
        seedTestDocumento3.ciclos[2].valor = valorCiclo3

        //Valor categoria
        seedTestDocumento3.categorias[0].valor = valorTotal


        it('Deve cadastrar documento', function () {

          cy.allureDescriptionHtml(testDescription.testes3).allureSeverity('normal')

          cy.log(seedTestDocumento3)

          Documentos.cadastrar(seedTestDocumento3)
        })
        it('Deve validar os detalhes do documento', function () {

          cy.allureDescriptionHtml(testDescription.testes3).allureSeverity('normal')

          Documentos.validarDetalhes(seedTestDocumento3)
        })
      })

      context('Não dedutivel, com tag, cartão de débito, com rateio de categoria', () => {

        seedTestDocumento4.numeroDocumento = Utils.getAlphaNumeric(10)

        // Gerar um valor aleatório para valorTotal
        const valorTotal = (Math.random() * 9999 + 1).toFixed(2)

        seedTestDocumento4.valorTotal = valorTotal
        seedTestDocumento4.parcelas[0].valorParcela = valorTotal
        seedTestDocumento4.parcelas[0].saldoParcela = valorTotal

        let valor1, valor2, valor3
        let percentage1, percentage2, percentage3
        let somaValores

        // Loop até que a soma dos valores corresponda ao valorTotal
        do {
          // Dividir o valor total em três partes aleatórias
          valor1 = (Math.random() * valorTotal).toFixed(2);
          valor2 = (Math.random() * (valorTotal - Number(valor1))).toFixed(2);
          valor3 = (Number(valorTotal) - Number(valor1) - Number(valor2)).toFixed(2);

          // Garantir que todos os valores são positivos e que a soma não ultrapasse o valorTotal
          if (Number(valor1) < 0 || Number(valor2) < 0 || Number(valor3) < 0) {
            continue;
          }

          // Verificar a soma dos valores
          somaValores = (Number(valor1) + Number(valor2) + Number(valor3)).toFixed(2);

        } while (somaValores !== valorTotal);

        // Calcular as porcentagens baseadas nos valores
        percentage1 = ((Number(valor1) / Number(valorTotal)) * 100).toFixed(4);
        percentage2 = ((Number(valor2) / Number(valorTotal)) * 100).toFixed(4);
        percentage3 = ((Number(valor3) / Number(valorTotal)) * 100).toFixed(4);
        
        // Atribuir valores e porcentagens a categorias em seedTestDocumento4
        seedTestDocumento4.categorias[0].porcentagem = percentage1 + "%"
        seedTestDocumento4.categorias[1].porcentagem = percentage2 + "%"
        seedTestDocumento4.categorias[2].porcentagem = percentage3 + "%"

        seedTestDocumento4.categorias[0].valor = valor1
        seedTestDocumento4.categorias[1].valor = valor2
        seedTestDocumento4.categorias[2].valor = valor3

        it('Deve cadastrar documento', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes4).allureSeverity('critical')

          cy.log(seedTestDocumento4)

          Documentos.cadastrar(seedTestDocumento4)
        })

        it('Deve validar os detalhes do documento', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes4).allureSeverity('critical')

          Documentos.validarDetalhes(seedTestDocumento4)
        })
      })

      context('Não dedutivel, pago, cartão de crédito, com rateio de ciclos e com rateio de categoria', () => {

        seedTestDocumento5.numeroDocumento = Utils.getAlphaNumeric(10)

        // Gerar um valor aleatório para valorTotal
        const valorTotal = (Math.random() * 9999 + 1).toFixed(2)

        seedTestDocumento5.valorTotal = valorTotal

        let valor1, valor2;
        let percentage1, percentage2;
        let somaValores;

        // Loop até que a soma dos valores corresponda ao valorTotal
        do {
          // Calcular porcentagens aleatórias para duas categorias
          percentage1 = (Math.random() * 100).toFixed(4);
          percentage2 = (100 - Number(percentage1)).toFixed(4); // O restante da porcentagem para a segunda categoria

          // Dividir o valor total em duas partes para categorias
          valor1 = (Number(percentage1) / 100 * Number(valorTotal)).toFixed(2);
          valor2 = (Number(percentage2) / 100 * Number(valorTotal)).toFixed(2);

          // Verificar a soma dos valores
          somaValores = (Number(valor1) + Number(valor2)).toFixed(2);
        } while (somaValores !== valorTotal);

        // Atribuir valores e porcentagens a categorias em seedTestDocumento4
        seedTestDocumento5.categorias[0].porcentagem = percentage1 + "%"
        seedTestDocumento5.categorias[1].porcentagem = percentage2 + "%"

        seedTestDocumento5.categorias[0].valor = valor1
        seedTestDocumento5.categorias[1].valor = valor2

        // Gerar um valor aleatório para o ciclo 1
        const valorCiclo1 = (Math.random() * valorTotal).toFixed(2);

        // Gerar um valor aleatório para o ciclo 2, limitando para que não ultrapasse o valor restante após o ciclo 1
        const valorRestante1 = valorTotal - Number(valorCiclo1);
        const valorCiclo2 = valorRestante1.toFixed(2); // O restante do valor total é atribuído ao ciclo 2

        // Definir os valores nos ciclos do seedTestDocumento3
        seedTestDocumento5.ciclos[0].valor = valorCiclo1;
        seedTestDocumento5.ciclos[1].valor = valorCiclo2;

        it('Deve cadastrar documento - ', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes5).allureSeverity('critical')

          cy.log(seedTestDocumento5)

          Documentos.cadastrar(seedTestDocumento5)
        })

        it('Deve validar os detalhes do documento', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes5).allureSeverity('critical')

          Documentos.validarDetalhes(seedTestDocumento5)
        })
      })

      context('Não dedutivel, com observação, transferência bancaria, parcelado, com anexo', () => {

        seedTestDocumento6.numeroDocumento = Utils.getAlphaNumeric(10)

        // Gerar um valor aleatório para valorTotal
        let valorTotal = (Math.random() * 9999 + 1).toFixed(2)
        seedTestDocumento6.valorTotal = valorTotal
        seedTestDocumento6.categorias[0].valor = valorTotal

        // Calcular o valor base de cada parcela e a sobra
        const numeroParcelas = 4
        const valorBaseParcela = Math.floor(valorTotal / numeroParcelas)
        const sobra = (valorTotal - valorBaseParcela * numeroParcelas).toFixed(2)

        // Distribuir o valor entre as parcelas
        seedTestDocumento6.parcelas.forEach((parcela, index) => {
          const valorParcela = index === 0 ? (valorBaseParcela + parseFloat(sobra)).toFixed(2) : valorBaseParcela.toFixed(2)
          parcela.valorParcela = valorParcela
          parcela.saldoParcela = valorParcela
        })

        const hoje = dayjs() // Data de hoje

        // Gerar as datas de vencimento para as parcelas
        seedTestDocumento6.parcelas.forEach((parcela, index) => {
          // Adiciona 'index' meses à data de hoje
          const vencimento = hoje.add(index + 1, 'month').format('DD/MM/YYYY')
          parcela.vencimentoParcela = vencimento
        })

        it('Deve cadastrar documento', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes6).allureSeverity('critical')

          cy.log(seedTestDocumento6)

          Documentos.cadastrar(seedTestDocumento6)
        })

        it('Deve validar os detalhes do documento', { retries: { runMode: 1, openMode: 1, }, }, function () {

          cy.allureDescriptionHtml(testDescription.testes6).allureSeverity('critical')

          Documentos.validarDetalhes(seedTestDocumento6)
        })
      })
    })
  })
})
