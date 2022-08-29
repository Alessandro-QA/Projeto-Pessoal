/* eslint no-console: ["error", { allow: ["log", "error"] }] */
/// <reference types="cypress" />

import locNfe from '../../../locators/funcionalidades/nfe/nfe/locators-add-editar-nfe.js'
import locGerenciadorNfe from '../../../locators/funcionalidades/nfe/nfe/locators-gerenciador-nfe.js'
import locMaterial from '../../../locators/funcionalidades/nfe/nfe/locators-add-editar-material.js'

const url = '/fiscal/nfe'
const locatorTituloPagina = locGerenciadorNfe.titulo
const tituloPagina = 'Gerenciador NF-e'

class Nfe {
  /**
 * Adicionar material a NFe
 * @param {*} seedTestMateriais
 */
  adicionarMaterial(seedTestMateriais) {
    // Adicionar material
    cy.getVisible(locNfe.materiais.buttonNovoMateiral).click()

    cy.wait(7000)

    // Pesquisar e selecionar material
    cy.getVisible(locMaterial.informacoesProduto.selectMaterial).click()
    cy.getVisible(locMaterial.informacoesProduto.pesquisarMaterial)
      .type(seedTestMateriais.produto.material)
      .getVisible(locMaterial.informacoesProduto.selecionarMaterial)
      .contains(seedTestMateriais.produto.material).click()

    // Quantidade
    cy.getVisible(locMaterial.informacoesProduto.inputQuantidade).clear()
      .type(`{movetoend}${seedTestMateriais.produto.quantidade}`)

    // Valor unitario
    cy.getVisible(locMaterial.informacoesProduto.inputValorUnitario).clear()
      .type(`{movetoend}${seedTestMateriais.produto.valorUnitario}`)

    // Desconto
    cy.getVisible(locMaterial.informacoesProduto.inputDesconto).clear()
      .type(`{movetoend}${seedTestMateriais.produto.desconto}`)

    // Total
    cy.getVisible(locMaterial.informacoesProduto.spanTotal).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.produto.total)
    })

    // Selecionar CFOP
    cy.getVisible(locMaterial.informacoesProduto.selectCfop).click()
      .get(locMaterial.informacoesProduto.selecionarCfop)
      .contains(seedTestMateriais.produto.cfop).click()

    // Ncm
    cy.getVisible(locMaterial.informacoesProduto.spanNcm).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.produto.ncm)
    })

    // Unidade Medida
    cy.getVisible(locMaterial.informacoesProduto.spanUnidadeMedida).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.produto.unidadeMedida)
    })

    // ICMS - Origem CST
    if (seedTestMateriais.imposto === '0 - Nacional') {
      cy.getVisible(locMaterial.impostos.icms.origemSelecionada).should(($el) => {
        expect($el).to.contain.text(seedTestMateriais.imposto.icms.origemCst)
      })
    } else {
      cy.getVisible(locMaterial.impostos.icms.selectOrigem).click()
        .get(locMaterial.impostos.icms.selecionarOrigem)
        .contains(seedTestMateriais.imposto.icms.origemCst).click()
    }

    // ICMS - CST
    cy.getVisible(locMaterial.impostos.icms.selectCst).click()
      .get(locMaterial.impostos.icms.selecionarCst)
      .contains(seedTestMateriais.imposto.icms.cst).click()

    // ICMS - Base Calculo
    cy.getVisible(locMaterial.impostos.icms.inputBaseCalculo).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.icms.baseCalculo}`)

    // ICMS - Aliquota
    cy.getVisible(locMaterial.impostos.icms.inputAliquota).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.icms.aliquota}`)

    // ICMS - Total
    cy.getVisible(locMaterial.impostos.icms.spanValor).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.imposto.icms.valor)
    })

    // PIS - CST
    cy.getVisible(locMaterial.impostos.pis.selectCst).click()
      .get(locMaterial.impostos.pis.selecionarCst)
      .contains(seedTestMateriais.imposto.pis.cst).click()

    // PIS - Base Calculo
    cy.getVisible(locMaterial.impostos.pis.inputBaseCalculo).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.pis.baseCalculo}`)

    // PIS - Aliquota
    cy.getVisible(locMaterial.impostos.pis.inputAliquota).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.pis.aliquota}`)

    // PIS - Total
    cy.getVisible(locMaterial.impostos.pis.spanValor).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.imposto.pis.valor)
    })

    // COFINS - CST
    cy.getVisible(locMaterial.impostos.cofins.selectCst).click()
      .get(locMaterial.impostos.cofins.selecionarCst)
      .contains(seedTestMateriais.imposto.cofins.cst).click()

    // COFINS - Base Calculo
    cy.getVisible(locMaterial.impostos.cofins.inputBaseCalculo).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.cofins.baseCalculo}`)

    // COFINS - Aliquota
    cy.getVisible(locMaterial.impostos.cofins.inputAliquota).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.cofins.aliquota}`)

    // COFINS - Total
    cy.getVisible(locMaterial.impostos.cofins.spanValor).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.imposto.cofins.valor)
    })

    // FCP - Base Calculo
    cy.getVisible(locMaterial.impostos.fcp.inputBaseCalculo).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.fcp.baseCalculo}`)

    // FCP - Aliquota
    cy.getVisible(locMaterial.impostos.fcp.inputAliquota).clear()
      .type(`{movetoend}${seedTestMateriais.imposto.fcp.aliquota}`)

    // FCP - Total
    cy.getVisible(locMaterial.impostos.fcp.spanValor).should(($el) => {
      expect($el).to.contain.text(seedTestMateriais.imposto.fcp.valor)
    })

    // Retencao
    if (seedTestMateriais.retencao.contemRetencao) {
      // Retencao
      cy.getVisible(locMaterial.retencao.selectRetencao).click()
        .get(locMaterial.retencao.selecionarRetencao)
        .contains(seedTestMateriais.retencao.retencao).click()

      // Valor
      cy.getVisible(locMaterial.retencao.inputValor).clear()
        .type(`{movetoend}${seedTestMateriais.retencao.valor}`)
    }

    // Informacoes complementares
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
    // Navegar para Gerenciador de NFe
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('/api/nota-fiscal/v1/NotaFiscal/Listagem').as('listagemNfe')
    cy.intercept('POST', '/api/nota-fiscal/v1/NotaFiscal/Transmitir/**').as('transmitirNFe')

    // Selecionar emitente
    cy.getVisible(locGerenciadorNfe.selectEmissor).click()
      .get(locGerenciadorNfe.selecionarEmissor)
      .contains(seedTestNfe.nfe.emitente.empresa).click()

    // Selecionar ambiente
    cy.getVisible(locGerenciadorNfe.selectAmbiente).click()
      .get(locGerenciadorNfe.selecionarAmbiente)
      .contains('Homologação').click()

    cy.wait('@listagemNfe')

    // Botao nova NFe
    cy.getVisible(locGerenciadorNfe.buttonNovaNfe).click()

    // Wait necessario para carregamento dos dados na tela
    cy.wait(7000)

    // Empresa emitente selecionada
    cy.getVisible(locNfe.emitente.empresaSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.emitente.empresa)
    })

    // IE emitente selecionada
    cy.getVisible(locNfe.emitente.IESelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.emitente.inscricaoEstadual)
    })

    // CPF/CNPJ emitente
    cy.getVisible(locNfe.emitente.cpfCnpj).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.emitente.cpfCnpj)
    })

    // Fazenda emitente selecionada
    cy.getVisible(locNfe.emitente.fazendaSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.emitente.fazenda)
    })

    // Selecionar safra emitente
    cy.getVisible(locNfe.emitente.selectSafra).click()
      .get(locNfe.emitente.selecionarSafra)
      .contains(seedTestNfe.nfe.emitente.safra).click()

    // Selecionar empresa destinatario
    cy.getVisible(locNfe.destinatario.selectEmpresa).click()
      .get(locNfe.destinatario.selecionarEmpresa)
      .contains(seedTestNfe.nfe.destinatario.empresa).click()


    // Inscricao Estadual Destinatario
    if (seedTestNfe.nfe.destinatario.tipoDestinatario === 'CNPJ') {
      cy.getVisible(locNfe.destinatario.IECnpj).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.destinatario.inscricaoEstadual)
      })
    } else {
      // IE destinatario selecionada
      cy.getVisible(locNfe.destinatario.IESelecionada).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.destinatario.inscricaoEstadual)
      })
    }

    // CPF/CNPJ destinatario
    cy.getVisible(locNfe.destinatario.cpfCnpj).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.destinatario.cpfCnpj)
    })

    cy.wait(3000)

    // NFe rascunho
    if (seedTestNfe.nfe.informacoesNota.gerarNfeRascunho) {
      cy.getVisible(locNfe.informacoesNota.buttoGerarNFeRascunho).click()
    }

    // Finalidade NFe
    if (seedTestNfe.nfe.informacoesNota.finalidade === 'NF-e Normal') {
      cy.getVisible(locNfe.informacoesNota.finalidadeSelecionada).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.informacoesNota.finalidade)
      })
    } else {
      cy.getVisible(locNfe.informacoesNota.selectFinalidade).click()
        .get(locNfe.informacoesNota.selecionarFinalidade)
        .contains(seedTestNfe.nfe.informacoesNota.finalidade).click()
    }

    // Operacao
    cy.getVisible(locNfe.informacoesNota.selectOperacao).click()
      .get(locNfe.informacoesNota.selecionarOperacao)
      .findAllByText(seedTestNfe.nfe.informacoesNota.operacao).click()

    // Frete
    if (seedTestNfe.nfe.informacoesNota.frete === 'Sem Frete') {
      // Tipo Frete
      cy.getVisible(locNfe.informacoesNota.selectFrete).click()
        .get(locNfe.informacoesNota.selecionarFrete)
        .contains(seedTestNfe.nfe.informacoesNota.frete).click()
    } else {
      // Tipo Frete
      cy.getVisible(locNfe.informacoesNota.selectFrete).click()
        .get(locNfe.informacoesNota.selecionarFrete)
        .contains(seedTestNfe.nfe.informacoesNota.frete).click()

      // Transportadora
      cy.getVisible(locNfe.transportador.selectTransportador).click()
        .get(locNfe.transportador.selecionarTransportador)
        .contains(seedTestNfe.nfe.transportador.transportadora).click()

      // Veiculo
      cy.getVisible(locNfe.transportador.selectVeiculo).click()
        .get(locNfe.transportador.selecionarVeiculo)
        .contains(seedTestNfe.nfe.transportador.veiculo).click()

      // Quantidade
      cy.getVisible(locNfe.transportador.quantidade).clear()
        .type(seedTestNfe.nfe.transportador.quantidade)

      // Especie
      cy.getVisible(locNfe.transportador.especie).clear()
        .type(seedTestNfe.nfe.transportador.especie)

      // Marca
      cy.getVisible(locNfe.transportador.marca).clear()
        .type(seedTestNfe.nfe.transportador.marca)

      // Numeracao
      cy.getVisible(locNfe.transportador.numeracao).clear()
        .type(seedTestNfe.nfe.transportador.numeracao)

      // Peso Bruto
      cy.getVisible(locNfe.transportador.pesoBruto).clear()
        .type(seedTestNfe.nfe.transportador.pesoBruto)

      // Peso Liquido
      cy.getVisible(locNfe.transportador.pesoLiquido).clear()
        .type(seedTestNfe.nfe.transportador.pesoLiquido)
    }


    // Adicionar e validar material
    this.adicionarMaterial(seedTestNfe.nfe.materiais)
    cy.getVisible(locNfe.materiais.nomeMaterial).should(($el) => {
      expect($el).to.contain.text(seedTestNfe.nfe.materiais.produto.material)
    })

    // Outros valores
    if (seedTestNfe.nfe.outrosValores.contemOutrosValores) {
      cy.getVisible(locNfe.outrosValores.collapse).click()

      // Valor do frete
      cy.getVisible(locNfe.outrosValores.inputValorFrete).clear()
        .type(`{movetoend}${seedTestNfe.nfe.outrosValores.valorFrete}`)

      // Valor do seguro
      cy.getVisible(locNfe.outrosValores.inputValorSeguro).clear()
        .type(`{movetoend}${seedTestNfe.nfe.outrosValores.valorSeguro}`)

      // Outras despesas
      cy.getVisible(locNfe.outrosValores.inputOutrasDespesas).clear()
        .type(`{movetoend}${seedTestNfe.nfe.outrosValores.outrasDespesas}`)
    }

    // Total impostos
    cy.getVisible(locNfe.totalImpostos.collapse).click().then(() => {
      // ICMS
      cy.getVisible(locNfe.totalImpostos.icms).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.icms)
      })

      // PIS
      cy.getVisible(locNfe.totalImpostos.pis).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.pis)
      })

      // COFINS
      cy.getVisible(locNfe.totalImpostos.cofins).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.cofins)
      })

      // Retencao
      cy.getVisible(locNfe.totalImpostos.retencao).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.retencao)
      })

      // FCP
      cy.getVisible(locNfe.totalImpostos.fcp).should(($el) => {
        expect($el).to.contain.text(seedTestNfe.nfe.totalImpostos.fcp)
      })
    })


    // Financeiro
    if (seedTestNfe.nfe.financeiro) {
      // Expandir collapse
      cy.getVisible(locNfe.financeiro.collapse).click()

      // Valor Total
      cy.getVisible(locNfe.financeiro.inputValorTotal).should(($el) => {
        expect($el).to.have.value(seedTestNfe.nfe.financeiro.valorTotal)
      })

      if (seedTestNfe.nfe.financeiro.jaFoiPago) {
        // Checkbox Ja Foi Pago
        cy.getVisible(locNfe.financeiro.checkboxFoiPago).click()

        // Conta Bancaria
        cy.getVisible(locNfe.financeiro.selectContaBancaria).click()
          .get(locNfe.financeiro.selecionarContaBancaria)
          .contains(seedTestNfe.nfe.financeiro.contaBancaria).click()

        // Data do pagamento
        // cy.getVisible(locNfe.financeiro.inputDataPagamento).clear()
        //   .type(`{movetoend}${seedTestNfe.nfe.financeiro.dataPagamento}{enter}`)
      }

      // Dedutível
      if (seedTestNfe.nfe.financeiro.dedutivel) {
        cy.get(locNfe.financeiro.toggleDeducao).contains('Dedutível').click()
      } else {
        cy.get(locNfe.financeiro.toggleDeducao).contains('Não Dedutível').click()
      }

      // Forma de pagamento
      cy.getVisible(locNfe.financeiro.selectFormaPagamento).click()
        .get(locNfe.financeiro.selecionarFormaPagamento)
        .contains(seedTestNfe.nfe.financeiro.formaPagamento).click()

      // Condicoes de pagamento
      if (seedTestNfe.nfe.financeiro.quantidadeParcelas > 1) {
        const parcelas = seedTestNfe.nfe.financeiro.parcelas

        // Selecionar parcelado
        cy.getVisible(locNfe.financeiro.toggleCondicaoPagamento).contains('Parcelado').click()

        // Quantidade de parcelas
        cy.getVisible(locNfe.financeiro.inputQtdParcela).clear()
          .type(`{movetoend}${seedTestNfe.nfe.financeiro.quantidadeParcelas}`).blur()

        parcelas.forEach((parcela, index) => {
          // parcela
          cy.get(locNfe.financeiro.inputValorParcela).eq(index)
            .clear().type(parcela.valorParcela)

          // vencimento
          // cy.get(locNfe.financeiro.inputVencimentoParcela).eq(index)
          //   .clear().type(`${parcela.vencimento}`)
        })
      } else {
        const parcelas = seedTestNfe.nfe.financeiro.parcelas

        cy.getVisible(locNfe.financeiro.toggleCondicaoPagamento).contains('À vista').click()

        // Quantidade Parcelas
        cy.getVisible(locNfe.financeiro.inputValorParcela).should(($el) => {
          expect($el).to.have.value(parcelas[0].valorParcela)
        })

        // Vencimento
        // cy.get(locNfe.financeiro.inputVencimentoParcela)
        //   .clear().type(parcelas[0].vencimento).blur()
      }
    }

    // Rateio
    if (seedTestNfe.nfe.rateio) {
      // Expandir collapse
      cy.getVisible(locNfe.rateio.collapse).click()

      // Categoria
      cy.getVisible(locNfe.rateio.selectCategoria).click()
        .get(locNfe.rateio.selecionarCategoria)
        .contains(seedTestNfe.nfe.rateio.categoria).click()

      // Porcentagem
      cy.getVisible(locNfe.rateio.inputPorcentagem).should(($el) => {
        expect($el).to.have.value(seedTestNfe.nfe.rateio.porcentagem)
      })

      // Valor
      cy.getVisible(locNfe.rateio.inputValorCategoria).should(($el) => {
        expect($el).to.have.value(seedTestNfe.nfe.rateio.valor)
      })
    }

    // Gera nota
    cy.getVisible(locNfe.buttonGerarNota).click()

    cy.wait('@transmitirNFe', { timeout: 60000, requestTimeout: 60000, responseTimeout: 60000 })
      .then((interception) => {

        cy.log(`Numero do Recibo: ${interception.response.body.data.numeroRecibo}`)
        cy.log(`Chave da NFe: ${interception.response.body.data.chave}`)
        cy.log(`Retorno do Sync: ${interception.response.body.data.nfeSyncReturn}`)
        cy.log(`Nome Normalizado: ${interception.response.body.data.nomeNormalizado}`)
        cy.log(JSON.stringify(interception))

        assert.equal(interception.response.statusCode, '200')
        assert.equal(interception.response.body.data.ambiente, '2')
        assert.equal(interception.response.body.data.retornoSefaz, 'Autorizado o uso da NF-e')
      })

    // Aguardar mensagem de autorizacao da nota
    cy.get(locNfe.msgAutorizada, { timeout: 60000 }).should(($el) => {
      expect($el).to.contain.text('Nota autorizada com sucesso!')
    })

    // Fechar modal de autorizacao
    cy.getVisible(locNfe.buttonFecharModalNfe).click()
    cy.get(locNfe.buttonCancelar).should('not.exist')
  }

  /**
   * Validar detalhes da NFe
   * @param {*} seedTestNFe
   */
  validarDetalhes(seedTestNfe) {
    // Navegar para Gerenciador de NFe
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Selecionar emitente
    cy.getVisible(locGerenciadorNfe.selectEmissor).click()
      .get(locGerenciadorNfe.selecionarEmissor)
      .contains(seedTestNfe.nfe.emitente.empresa).click()

    cy.intercept('/api/nota-fiscal/v1/NotaFiscal/Listagem').as('listagemNfe')

    // Selecionar ambiente
    cy.getVisible(locGerenciadorNfe.selectAmbiente).click()
      .get(locGerenciadorNfe.selecionarAmbiente)
      .contains('Homologação').click()

    cy.wait('@listagemNfe')

    // Destinatario
    cy.get(locGerenciadorNfe.destinatario).first().should(($el) => {
      expect($el).to.contain.text(seedTestNfe.detalhesNfe.destinatario)
    })

    // Finalidade
    cy.get(locGerenciadorNfe.finalidade).first().should(($el) => {
      expect($el).to.contain.text(seedTestNfe.detalhesNfe.finalidade)
    })

    // Valor total
    cy.get(locGerenciadorNfe.valorTotal).first().should(($el) => {
      expect($el).to.contain.text(seedTestNfe.detalhesNfe.valorTotal)
    })

    // Status
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

    // Selecionar emitente
    cy.getVisible(locGerenciadorNfe.selectEmissor).click()
      .get(locGerenciadorNfe.selecionarEmissor)
      .contains(seedTestNfe.empresa).click()

    // Selecionar ambiente
    cy.getVisible(locGerenciadorNfe.selectAmbiente).click()
      .get(locGerenciadorNfe.selecionarAmbiente)
      .contains('Homologação').click()

    // Pesquisar NFE
    cy.getVisible(locGerenciadorNfe.inputPesquisar)
      .clear().type(seedTestNfe.numeroNfe)

    cy.wait('@listagemNfe')

    // Validar status da nota
    cy.get(locGerenciadorNfe.statusNota).should(($el) => {
      expect($el).to.contains.text(seedTestNfe.status)
    })

    // Selecionar NFe
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

    // Selecionar emitente
    cy.getVisible(locGerenciadorNfe.selectEmissor).click()
      .get(locGerenciadorNfe.selecionarEmissor)
      .contains(seedTestNfe.empresa).click()

    // Selecionar ambiente
    cy.getVisible(locGerenciadorNfe.selectAmbiente).click()
      .get(locGerenciadorNfe.selecionarAmbiente)
      .contains('Homologação').click()

    // Pesquisar NFE
    cy.getVisible(locGerenciadorNfe.inputPesquisar)
      .clear().type(seedTestNfe.numeroNfe)

    cy.wait('@listagemNfe')

    // Validar status da nota
    cy.get(locGerenciadorNfe.statusNota).should(($el) => {
      expect($el).to.contains.text(seedTestNfe.status)
    })

    // Selecionar NFe
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
