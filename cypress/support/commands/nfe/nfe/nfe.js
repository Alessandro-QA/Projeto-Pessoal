/* eslint no-console: ["error", { allow: ["log", "error"] }] */
/// <reference types="cypress" />

import locNfe from '../../../locators/nfe/nfe/locators-add-editar-nfe.js'
import locGerenciadorNfe from '../../../locators/nfe/nfe/locators-gerenciador-nfe.js'
import locMaterial from '../../../locators/nfe/nfe/locators-add-editar-material.js'

const url = '/fiscal/nfe'
const locatorTituloPagina = locGerenciadorNfe.titulo
const tituloPagina = 'Gerenciador NF-e'

class Nfe {
  /**
 * Adicionar material a NFe
 * @param {*} seedTestMateriais
 */
  adicionarMaterial(seedTestMateriais) {
    cy.log('Adicionar material')
    cy.getVisible(locNfe.materiais.buttonNovoMateiral).click()

    cy.wait(7000)

    cy.log('Pesquisar e selecionar material')
    cy.getVisible(locMaterial.informacoesProduto.selectMaterial).click()
    cy.getVisible(locMaterial.informacoesProduto.pesquisarMaterial)
      .type(seedTestMateriais.produto.material)
      .getVisible(locMaterial.informacoesProduto.selecionarMaterial)
      .contains(seedTestMateriais.produto.material).click()

    cy.log('Quantidade')
    cy.getVisible(locMaterial.informacoesProduto.inputQuantidade).clear()
      .type(`{movetoend}${seedTestMateriais.produto.quantidade}`)

    cy.log('Valor unitario')
    cy.getVisible(locMaterial.informacoesProduto.inputValorUnitario).clear()
      .type(`{movetoend}${seedTestMateriais.produto.valorUnitario}`)

    cy.log('Desconto')
    cy.getVisible(locMaterial.informacoesProduto.inputDesconto).clear()
      .type(`{movetoend}${seedTestMateriais.produto.desconto}`)

    cy.log('Total')
    cy.getVisible(locMaterial.informacoesProduto.spanTotal).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.produto.total)
    })

    cy.log('Selecionar CFOP')
    cy.getVisible(locMaterial.informacoesProduto.selectCfop).click()
      .get(locMaterial.informacoesProduto.selecionarCfop)
      .contains(seedTestMateriais.produto.cfop).click()

    cy.log('Ncm')
    cy.getVisible(locMaterial.informacoesProduto.spanNcm).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.produto.ncm)
    })

    cy.log('Unidade Medida')
    cy.getVisible(locMaterial.informacoesProduto.spanUnidadeMedida).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.produto.unidadeMedida)
    })

    cy.log('ICMS - Origem CST')
    if (seedTestMateriais.imposto === '0 - Nacional') {
      cy.getVisible(locMaterial.impostos.icms.origemSelecionada).should(($el) => {
        expect($el).to.contain.text(seedTestMateriais.imposto.icms.origemCst)
      })
    } else {
      cy.getVisible(locMaterial.impostos.icms.selectOrigem).click()
        .get(locMaterial.impostos.icms.selecionarOrigem)
        .contains(seedTestMateriais.imposto.icms.origemCst).click()
    }

    cy.log('ICMS - CST')
    cy.getVisible(locMaterial.impostos.icms.selectCst).click()
      .get(locMaterial.impostos.icms.selecionarCst)
      .contains(seedTestMateriais.imposto.icms.cst).click()

    cy.log('ICMS - Base Calculo')
    cy.getVisible(locMaterial.impostos.icms.inputBaseCalculo).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.icms.baseCalculo}`)

    cy.log('ICMS - Aliquota')
    cy.getVisible(locMaterial.impostos.icms.inputAliquota).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.icms.aliquota}`)

    cy.log('ICMS - Total')
    cy.getVisible(locMaterial.impostos.icms.spanValor).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.imposto.icms.valor)
    })

    cy.log('PIS - CST')
    cy.getVisible(locMaterial.impostos.pis.selectCst).click()
      .get(locMaterial.impostos.pis.selecionarCst)
      .contains(seedTestMateriais.imposto.pis.cst).click()

    cy.log('PIS - Base Calculo')
    cy.getVisible(locMaterial.impostos.pis.inputBaseCalculo).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.pis.baseCalculo}`)

    cy.log('PIS - Aliquota')
    cy.getVisible(locMaterial.impostos.pis.inputAliquota).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.pis.aliquota}`)

    cy.log('PIS - Total')
    cy.getVisible(locMaterial.impostos.pis.spanValor).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.imposto.pis.valor)
    })

    cy.log('COFINS - CST')
    cy.getVisible(locMaterial.impostos.cofins.selectCst).click()
      .get(locMaterial.impostos.cofins.selecionarCst)
      .contains(seedTestMateriais.imposto.cofins.cst).click()

    cy.log('COFINS - Base Calculo')
    cy.getVisible(locMaterial.impostos.cofins.inputBaseCalculo).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.cofins.baseCalculo}`)

    cy.log('COFINS - Aliquota')
    cy.getVisible(locMaterial.impostos.cofins.inputAliquota).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.cofins.aliquota}`)

    cy.log('COFINS - Total')
    cy.getVisible(locMaterial.impostos.cofins.spanValor).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.imposto.cofins.valor)
    })

    cy.log('FCP - Base Calculo')
    cy.getVisible(locMaterial.impostos.fcp.inputBaseCalculo).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.fcp.baseCalculo}`)

    cy.log('FCP - Aliquota')
    cy.getVisible(locMaterial.impostos.fcp.inputAliquota).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.fcp.aliquota}`)

    cy.log('FCP - Total')
    cy.getVisible(locMaterial.impostos.fcp.spanValor).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.imposto.fcp.valor)
    })

    cy.log('Retencao')
    if (seedTestMateriais.retencao.contemRetencao) {
      cy.log('Retencao')
      cy.getVisible(locMaterial.retencao.selectRetencao).click()
        .get(locMaterial.retencao.selecionarRetencao)
        .contains(seedTestMateriais.retencao.retencao).click()

      cy.log('Valor')
      cy.getVisible(locMaterial.retencao.inputValor).clear()
        .type(`{movetoend}${seedTestMateriais.retencao.valor}`)
    }

    cy.log('Informacoes complementares')
    if (seedTestMateriais.contemInformcacoesComp) {
      cy.getVisible(locMaterial.informacoesComplementares).clear()
        .type(`{movetoend}${seedTestMateriais.informacoesComplementares}`)
    }

    cy.getVisible(locMaterial.buttonAdicionar).click()
  }

  /**
   * Cadastro de NFe
   * @param {*} seedTestNfe
   */
  cadastrar(seedTestNfe) {
    cy.log('Navegar para Gerenciador de NFe')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('/api/nota-fiscal/v1/NotaFiscal/Listagem').as('listagemNfe')
    cy.intercept('POST', '/api/nota-fiscal/v1/NotaFiscal/Transmitir/**').as('transmitirNFe')

    cy.log('Selecionar emitente')
    cy.getVisible(locGerenciadorNfe.selectEmissor).click()
      .get(locGerenciadorNfe.selecionarEmissor)
      .contains(seedTestNfe.nfe.emitente.empresa).click()

    cy.log('Selecionar ambiente')
    cy.getVisible(locGerenciadorNfe.selectAmbiente).click()
      .get(locGerenciadorNfe.selecionarAmbiente)
      .contains('Homologação').click()

    cy.wait('@listagemNfe')

    cy.log('Botao nova NFe')
    cy.getVisible(locGerenciadorNfe.buttonNovaNfe).click()

    cy.log('Wait necessario para carregamento dos dados na tela')
    cy.wait(7000)

    cy.log('Empresa emitente selecionada')
    cy.getVisible(locNfe.emitente.empresaSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.emitente.empresa)
    })

    cy.log('IE emitente selecionada')
    cy.getVisible(locNfe.emitente.IESelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.emitente.inscricaoEstadual)
    })

    cy.log('CPF/CNPJ emitente')
    cy.getVisible(locNfe.emitente.cpfCnpj).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.emitente.cpfCnpj)
    })

    cy.log('Fazenda emitente selecionada')
    cy.getVisible(locNfe.emitente.fazendaSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.emitente.fazenda)
    })

    cy.log('Selecionar safra emitente')
    cy.getVisible(locNfe.emitente.selectSafra).click()
      .get(locNfe.emitente.selecionarSafra)
      .contains(seedTestNfe.nfe.emitente.safra).click()

    cy.log('Selecionar empresa destinatario')
    cy.getVisible(locNfe.destinatario.selectEmpresa).click()
      .get(locNfe.destinatario.selecionarEmpresa)
      .contains(seedTestNfe.nfe.destinatario.empresa).click()


    cy.log('Inscricao Estadual Destinatario')
    if (seedTestNfe.nfe.destinatario.tipoDestinatario === 'CNPJ') {
      cy.getVisible(locNfe.destinatario.IECnpj).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.destinatario.inscricaoEstadual)
      })
    } else {
      cy.log('IE destinatario selecionada')
      cy.getVisible(locNfe.destinatario.IESelecionada).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.destinatario.inscricaoEstadual)
      })
    }

    cy.log('CPF/CNPJ destinatario')
    cy.getVisible(locNfe.destinatario.cpfCnpj).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.destinatario.cpfCnpj)
    })

    cy.wait(3000)

    cy.log('NFe rascunho')
    if (seedTestNfe.nfe.informacoesNota.gerarNfeRascunho) {
      cy.getVisible(locNfe.informacoesNota.buttoGerarNFeRascunho).click()
    }

    cy.log('Finalidade NFe')
    if (seedTestNfe.nfe.informacoesNota.finalidade === 'NF-e Normal') {
      cy.getVisible(locNfe.informacoesNota.finalidadeSelecionada).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.informacoesNota.finalidade)
      })
    } else {
      cy.getVisible(locNfe.informacoesNota.selectFinalidade).click()
        .get(locNfe.informacoesNota.selecionarFinalidade)
        .contains(seedTestNfe.nfe.informacoesNota.finalidade).click()
    }

    cy.log('Operacao')
    cy.getVisible(locNfe.informacoesNota.selectOperacao).click()
      .get(locNfe.informacoesNota.selecionarOperacao)
      .findAllByText(seedTestNfe.nfe.informacoesNota.operacao).click()

    cy.log('Frete')
    if (seedTestNfe.nfe.informacoesNota.frete === 'Sem Frete') {
      cy.log('Tipo Frete')
      cy.getVisible(locNfe.informacoesNota.selectFrete).click()
        .get(locNfe.informacoesNota.selecionarFrete)
        .contains(seedTestNfe.nfe.informacoesNota.frete).click()
    } else {
      cy.log('Tipo Frete')
      cy.getVisible(locNfe.informacoesNota.selectFrete).click()
        .get(locNfe.informacoesNota.selecionarFrete)
        .contains(seedTestNfe.nfe.informacoesNota.frete).click()

      cy.log('Transportadora')
      cy.getVisible(locNfe.transportador.selectTransportador).click()
        .get(locNfe.transportador.selecionarTransportador)
        .contains(seedTestNfe.nfe.transportador.transportadora).click()

      cy.log('Veiculo')
      cy.getVisible(locNfe.transportador.selectVeiculo).click()
        .get(locNfe.transportador.selecionarVeiculo)
        .contains(seedTestNfe.nfe.transportador.veiculo).click()

      cy.log('Quantidade')
      cy.getVisible(locNfe.transportador.quantidade).clear()
        .type(seedTestNfe.nfe.transportador.quantidade)

      cy.log('Especie')
      cy.getVisible(locNfe.transportador.especie).clear()
        .type(seedTestNfe.nfe.transportador.especie)

      cy.log('Marca')
      cy.getVisible(locNfe.transportador.marca).clear()
        .type(seedTestNfe.nfe.transportador.marca)

      cy.log('Numeracao')
      cy.getVisible(locNfe.transportador.numeracao).clear()
        .type(seedTestNfe.nfe.transportador.numeracao)

      cy.log('Peso Bruto')
      cy.getVisible(locNfe.transportador.pesoBruto).clear()
        .type(seedTestNfe.nfe.transportador.pesoBruto)

      cy.log('Peso Liquido')
      cy.getVisible(locNfe.transportador.pesoLiquido).clear()
        .type(seedTestNfe.nfe.transportador.pesoLiquido)
    }


    cy.log('Adicionar e validar material')
    this.adicionarMaterial(seedTestNfe.nfe.materiais)
    cy.getVisible(locNfe.materiais.nomeMaterial).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.materiais.produto.material)
    })

    cy.log('Outros valores')
    if (seedTestNfe.nfe.outrosValores.contemOutrosValores) {
      cy.getVisible(locNfe.outrosValores.collapse).click()

      cy.log('Valor do frete')
      cy.getVisible(locNfe.outrosValores.inputValorFrete).clear()
        .type(`{movetoend}${seedTestNfe.nfe.outrosValores.valorFrete}`)

      cy.log('Valor do seguro')
      cy.getVisible(locNfe.outrosValores.inputValorSeguro).clear()
        .type(`{movetoend}${seedTestNfe.nfe.outrosValores.valorSeguro}`)

      cy.log('Outras despesas')
      cy.getVisible(locNfe.outrosValores.inputOutrasDespesas).clear()
        .type(`{movetoend}${seedTestNfe.nfe.outrosValores.outrasDespesas}`)
    }

    cy.log('Total impostos')
    cy.getVisible(locNfe.totalImpostos.collapse).click().then(() => {
      cy.log('ICMS')
      cy.getVisible(locNfe.totalImpostos.icms).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.icms)
      })

      cy.log('PIS')
      cy.getVisible(locNfe.totalImpostos.pis).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.pis)
      })

      cy.log('COFINS')
      cy.getVisible(locNfe.totalImpostos.cofins).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.cofins)
      })

      cy.log('Retencao')
      cy.getVisible(locNfe.totalImpostos.retencao).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.retencao)
      })

      cy.log('FCP')
      cy.getVisible(locNfe.totalImpostos.fcp).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.fcp)
      })
    })


    cy.log('Financeiro')
    if (seedTestNfe.nfe.financeiro) {
      cy.log('Expandir collapse')
      cy.getVisible(locNfe.financeiro.collapse).click()

      cy.log('Valor Total')
      cy.getVisible(locNfe.financeiro.inputValorTotal).should(($el) => {
        expect($el).to.have.value(seedTestNfe.nfe.financeiro.valorTotal)
      })

      if (seedTestNfe.nfe.financeiro.jaFoiPago) {
        cy.log('Checkbox Ja Foi Pago')
        cy.getVisible(locNfe.financeiro.checkboxFoiPago).click()

        cy.log('Conta Bancaria')
        cy.getVisible(locNfe.financeiro.selectContaBancaria).click()
          .get(locNfe.financeiro.selecionarContaBancaria)
          .contains(seedTestNfe.nfe.financeiro.contaBancaria).click()

        cy.log('Data do pagamento')
        // cy.getVisible(locNfe.financeiro.inputDataPagamento).clear()
        //   .type(`{movetoend}${seedTestNfe.nfe.financeiro.dataPagamento}{enter}`)
      }

      cy.log('Dedutível')
      if (seedTestNfe.nfe.financeiro.dedutivel) {
        cy.get(locNfe.financeiro.toggleDeducao).contains('Dedutível').click()
      } else {
        cy.get(locNfe.financeiro.toggleDeducao).contains('Não Dedutível').click()
      }

      cy.log('Forma de pagamento')
      cy.getVisible(locNfe.financeiro.selectFormaPagamento).click()
        .get(locNfe.financeiro.selecionarFormaPagamento)
        .contains(seedTestNfe.nfe.financeiro.formaPagamento).click()

      cy.log('Condicoes de pagamento')
      if (seedTestNfe.nfe.financeiro.quantidadeParcelas > 1) {
        const parcelas = seedTestNfe.nfe.financeiro.parcelas

        cy.log('Selecionar parcelado')
        cy.getVisible(locNfe.financeiro.toggleCondicaoPagamento).contains('Parcelado').click()

        cy.log('Quantidade de parcelas')
        cy.getVisible(locNfe.financeiro.inputQtdParcela).clear()
          .type(`{movetoend}${seedTestNfe.nfe.financeiro.quantidadeParcelas}`).blur()

        parcelas.forEach((parcela, index) => {
          cy.log('parcela')
          cy.get(locNfe.financeiro.inputValorParcela).eq(index)
            .clear().type(parcela.valorParcela)

          // vencimento
          // cy.get(locNfe.financeiro.inputVencimentoParcela).eq(index)
          //   .clear().type(`${parcela.vencimento}`)
        })
      } else {
        const parcelas = seedTestNfe.nfe.financeiro.parcelas

        cy.getVisible(locNfe.financeiro.toggleCondicaoPagamento).contains('À vista').click()

        cy.log('Quantidade Parcelas')
        cy.getVisible(locNfe.financeiro.inputValorParcela).should(($el) => {
          expect($el).to.have.value(parcelas[0].valorParcela)
        })

        // Vencimento
        // cy.get(locNfe.financeiro.inputVencimentoParcela)
        //   .clear().type(parcelas[0].vencimento).blur()
      }
    }

    cy.log('Rateio')
    if (seedTestNfe.nfe.rateio) {
      cy.log('Expandir collapse')
      cy.getVisible(locNfe.rateio.collapse).click()

      cy.log('Categoria')
      cy.getVisible(locNfe.rateio.selectCategoria).click()
        .get(locNfe.rateio.selecionarCategoria)
        .contains(seedTestNfe.nfe.rateio.categoria).click()

      cy.log('Porcentagem')
      cy.getVisible(locNfe.rateio.inputPorcentagem).should(($el) => {
        expect($el).to.have.value(seedTestNfe.nfe.rateio.porcentagem)
      })

      cy.log('Valor')
      cy.getVisible(locNfe.rateio.inputValorCategoria).should(($el) => {
        expect($el).to.have.value(seedTestNfe.nfe.rateio.valor)
      })
    }

    cy.log('Gera nota')
    cy.getVisible(locNfe.buttonGerarNota).click()

    cy.wait('@transmitirNFe', { timeout: 90000, requestTimeout: 90000, responseTimeout: 90000 })
      .then((interception) => {

        cy.log(`Numero do Recibo: ${interception.response.body.data.numeroRecibo}`)
        cy.log(`Chave da NFe: ${interception.response.body.data.chave}`)
        cy.log(`Retorno do Sync: ${interception.response.body.data.nfeSyncReturn}`)
        cy.log(`Nome Normalizado: ${interception.response.body.data.nomeNormalizado}`)
        cy.log(JSON.stringify(interception))

        // assert.equal(interception.response.statusCode, '200')
        // assert.equal(interception.response.body.data.ambiente, '2')
        // assert.equal(interception.response.body.data.retornoSefaz, 'Autorizado o uso da NF-e')
      })

    cy.log('Aguardar mensagem de autorizacao da nota')
    cy.get(locNfe.msgAutorizada, { timeout: 90000 }).should(($el) => {
      expect($el).to.contain.text('Nota autorizada com sucesso!')
    })

    cy.log('Fechar modal de autorizacao')
    cy.getVisible(locNfe.buttonFecharModalNfe).click()
    cy.get(locNfe.buttonCancelar).should('not.exist')
  }

  /**
   * Validar detalhes da NFe
   * @param {*} seedTestNFe
   */
  validarDetalhes(seedTestNfe) {
    cy.log('Navegar para Gerenciador de NFe')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.log('Selecionar emitente')
    cy.getVisible(locGerenciadorNfe.selectEmissor).click()
      .get(locGerenciadorNfe.selecionarEmissor)
      .contains(seedTestNfe.nfe.emitente.empresa).click()

    cy.intercept('/api/nota-fiscal/v1/NotaFiscal/Listagem').as('listagemNfe')

    cy.log('Selecionar ambiente')
    cy.getVisible(locGerenciadorNfe.selectAmbiente).click()
      .get(locGerenciadorNfe.selecionarAmbiente)
      .contains('Homologação').click()

    cy.wait('@listagemNfe')

    cy.log('Destinatario')
    cy.get(locGerenciadorNfe.destinatario).first().should(($el) => {
      expect($el).to.contain.text(seedTestNfe.detalhesNfe.destinatario)
    })

    cy.log('Finalidade')
    cy.get(locGerenciadorNfe.finalidade).first().should(($el) => {
      expect($el).to.contain.text(seedTestNfe.detalhesNfe.finalidade)
    })

    cy.log('Valor total')
    cy.get(locGerenciadorNfe.valorTotal).first().should(($el) => {
      expect($el).to.contain.text(seedTestNfe.detalhesNfe.valorTotal)
    })

    cy.log('Status')
    cy.get(locGerenciadorNfe.statusNota).first().should(($el) => {
      expect($el).to.contain.text(seedTestNfe.detalhesNfe.status)
    })
  }

  /**
   * Baixar DANFe da NFe
   * @param {*} seedTestNfe
   */
  downloadDanfe(seedTestNfe) {
    cy.intercept('POST', '/api/nota-fiscal/v1/NotaFiscal/Listagem').as('listagemNfe')

    cy.log('Selecionar emitente')
    cy.getVisible(locGerenciadorNfe.selectEmissor).click()
      .get(locGerenciadorNfe.selecionarEmissor)
      .contains(seedTestNfe.empresa).click()

    cy.log('Selecionar ambiente')
    cy.getVisible(locGerenciadorNfe.selectAmbiente).click()
      .get(locGerenciadorNfe.selecionarAmbiente)
      .contains('Homologação').click()

    cy.log('Pesquisar NFE')
    cy.getVisible(locGerenciadorNfe.inputPesquisar)
      .clear().type(seedTestNfe.numeroNfe)

    cy.wait('@listagemNfe')

    cy.log('Validar status da nota')
    cy.get(locGerenciadorNfe.statusNota).should(($el) => {
      expect($el).to.contains.text(seedTestNfe.status)
    })

    cy.log('Selecionar NFe')
    cy.getVisible(locGerenciadorNfe.btnSelecionarNfe).click()

    switch (seedTestNfe.status) {
      case 'Autorizada': Nfe.baixar(seedTestNfe)
        break
      case 'Uso denegado': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Cancelada': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Contingência': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Pendente': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Rejeitada': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Processando': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Lote Recebido': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Lote Processado': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Lote Em Processamento': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Rascunho': Nfe.baixar(seedTestNfe)
        break
      default:
        throw new Error('Não foi possivel baixar o DANFe, verifique as opções do switch case')
    }
  }

  /**
   * Baixar XML da NFe
   * @param {*} seedTestNfe
   */
  downloadXml(seedTestNfe) {
    cy.intercept('POST', '/api/nota-fiscal/v1/NotaFiscal/Listagem').as('listagemNfe')

    cy.log('Selecionar emitente')
    cy.getVisible(locGerenciadorNfe.selectEmissor).click()
      .get(locGerenciadorNfe.selecionarEmissor)
      .contains(seedTestNfe.empresa).click()

    cy.log('Selecionar ambiente')
    cy.getVisible(locGerenciadorNfe.selectAmbiente).click()
      .get(locGerenciadorNfe.selecionarAmbiente)
      .contains('Homologação').click()

    cy.log('Pesquisar NFE')
    cy.getVisible(locGerenciadorNfe.inputPesquisar)
      .clear().type(seedTestNfe.numeroNfe)

    cy.wait('@listagemNfe')

    cy.log('Validar status da nota')
    cy.get(locGerenciadorNfe.statusNota).should(($el) => {
      expect($el).to.contains.text(seedTestNfe.status)
    })

    cy.log('Selecionar NFe')
    cy.getVisible(locGerenciadorNfe.btnSelecionarNfe).click()

    switch (seedTestNfe.status) {
      case 'Autorizada': Nfe.baixar(seedTestNfe)
        break
      case 'Uso denegado': Nfe.baixar(seedTestNfe)
        break
      case 'Cancelada': Nfe.baixar(seedTestNfe)
        break
      case 'Contingência': Nfe.baixar(seedTestNfe)
        break
      case 'Pendente': Nfe.naoBaixar(seedTestNfe)
        break
      case 'Rejeitada': Nfe.baixar(seedTestNfe)
        break
      case 'Processando': Nfe.baixar(seedTestNfe)
        break
      case 'Lote Recebido': Nfe.baixar(seedTestNfe)
        break
      case 'Lote Processado': Nfe.baixar(seedTestNfe)
        break
      case 'Lote Em Processamento': Nfe.baixar(seedTestNfe)
        break
      case 'Rascunho': Nfe.naoBaixar(seedTestNfe)
        break
      default:
        throw new Error('Não foi possivel baixar o XML, verifique as opções do switch case')
    }
  }

  static baixar(seedTestNfe) {
    cy.intercept('POST', '/api/nota-fiscal/v1/NotaFiscal/**').as('download')
    const path = require('path')

    if (seedTestNfe.tipoDownload) {
      cy.get(locGerenciadorNfe.btnAcoesDownload).contains(seedTestNfe.tipoDownload)
        .click().then(() => {
          cy.wait('@download')
          const downloadsFolder = Cypress.config('downloadsFolder')
          cy.readFile(path.join(downloadsFolder, seedTestNfe.nomeArquivo)).should('exist')
        })
    } else {
      throw new Error('Necessário informar o Tipo de Download no seed de teste')
    }
  }

  static naoBaixar(seedTestNfe) {
    if (seedTestNfe.tipoDownload) {
      cy.get(locGerenciadorNfe.btnAcoesDownload).contains(seedTestNfe.tipoDownload)
        .parent().should(($el) => {
          expect($el).to.have.attr('disabled')
        })
    } else {
      throw new Error('Necessário informar o Tipo de Download no seed de teste')
    }
  }
}

export default new Nfe()
