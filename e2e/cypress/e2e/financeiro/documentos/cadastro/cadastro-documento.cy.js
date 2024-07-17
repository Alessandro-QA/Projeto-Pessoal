/// <reference types="cypress" />

import seedTestDocumento1 from '../../../../fixtures/financeiro/documentos/cadastro/documento123.json'
import seedTestDocumento2 from '../../../../fixtures/financeiro/documentos/cadastro/documento3315.json'
import seedTestDocumento3 from '../../../../fixtures/financeiro/documentos/cadastro/documento1533.json'
import seedTestDocumento4 from '../../../../fixtures/financeiro/documentos/cadastro/documento7553.json'
import seedTestDocumento5 from '../../../../fixtures/financeiro/documentos/cadastro/documento3557.json'
import seedTestDocumento6 from '../../../../fixtures/financeiro/documentos/cadastro/documento5537.json'
import Documentos from '../../../../support/commands/financeiro/documentos/documentos.js'
import testDescription from './bdd-description/cadastro-documento.description.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {

  describe('Documentos', { tags: '@documentos' }, () => {
    context('Cadastro', () => {

      context('Dedutivel, com tag, observação, já pago, boleto', () => {

        seedTestDocumento1.numeroDocumento = Utils.getAlphaNumeric(10)
        seedTestDocumento1.valorTotal = (Math.random() * 9999 + 1).toFixed(2);

        it('Deve cadastrar documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes1)

          Documentos.cadastrar(seedTestDocumento1)
        })
        it('Deve validar os detalhes do documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes1)

          Documentos.validarDetalhes(seedTestDocumento1)
        })
      })

      context('Dedutivel, já pago, dinheiro, com rateio de ciclos e categoria', () => {

        seedTestDocumento2.numeroDocumento = Utils.getAlphaNumeric(10)
        // Gerar um valor aleatório para valorTotal
        seedTestDocumento2.valorTotal = (Math.random() * 9999 + 1).toFixed(2);

        // Converter valorTotal para número
        const valorTotal = parseFloat(seedTestDocumento2.valorTotal.replace(',', '.'));

        // Dividir o valor total em duas partes para ciclos de forma que os valores estejam corretos
        const valorCiclo1 = parseFloat((Math.random() * valorTotal).toFixed(2));
        const valorCiclo2 = parseFloat((valorTotal - valorCiclo1).toFixed(2));

        seedTestDocumento2.ciclos[0].valor = valorCiclo1;
        seedTestDocumento2.ciclos[1].valor = valorCiclo2;

        // Calcular porcentagens aleatórias para categorias
        const percentage1 = Math.random() * 100;
        const percentage2 = 100 - percentage1;

        // Dividir o valor total em duas partes para categorias
        seedTestDocumento2.categorias[0].porcentagem = percentage1.toFixed(2) + "%",
          seedTestDocumento2.categorias[1].porcentagem = percentage2.toFixed(2) + "%",

          seedTestDocumento2.categorias[0].valor = ((percentage1 / 100) * valorTotal).toFixed(2)
        seedTestDocumento2.categorias[1].valor = ((percentage2 / 100) * valorTotal).toFixed(2)

        seedTestDocumento2.parcelas[0].valorParcela = valorTotal

        it('Deve cadastrar documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes2)
          
         Documentos.cadastrar(seedTestDocumento2)
        })
        it.only('Deve validar os detalhes do documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes1)

          //Validação de valor da parcela travado
          Documentos.validarDetalhes(seedTestDocumento2)
        })
      })

      context('Dedutivel, observação, parcelado, duas parcelas, boleto, com rateio de ciclos', () => {
        it('Deve cadastrar documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes3)

          Documentos.cadastrar(seedTestDocumento3.documento)
        })
        it('Deve validar os detalhes do documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes3)

          Documentos.validarDetalhes(seedTestDocumento3.detalhes)
        })
      })

      context('Não dedutivel, com tag, cartão de débito, com rateio de categoria', () => {
        it('Deve cadastrar documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes4)

          Documentos.cadastrar(seedTestDocumento4.documento)
        })

        it('Deve validar os detalhes do documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes3)

          Documentos.validarDetalhes(seedTestDocumento4.detalhes)
        })
      })

      context('Não dedutivel, pago, cartão de crédito, com rateio de ciclos e com rateio de categoria', () => {

        it('Deve cadastrar documento - ', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes5)

          Documentos.cadastrar(seedTestDocumento5.documento)
        })

        it('Deve validar os detalhes do documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes3)

          Documentos.validarDetalhes(seedTestDocumento5.detalhes)
        })
      })

      context('Não dedutivel, com observação, transferência bancaria, parcelado, com anexo', () => {
        it('Deve cadastrar documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes6)

          Documentos.cadastrar(seedTestDocumento6.documento)
        })

        it('Deve validar os detalhes do documento', function () {
          // cy.allure().severity('critical').startStep('test content')
          //.descriptionHtml(testDescription.testes3)

          Documentos.validarDetalhes(seedTestDocumento6.detalhes)
        })
      })
    })
  })
})
