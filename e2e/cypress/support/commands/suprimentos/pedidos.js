/// <reference types="cypress" />

import locatorPedidos from '../../locators/suprimentos/pedidos/locators-pedidos.js'

const url = '/suprimentos/pedidos'
const locatorTituloPagina = locatorPedidos.dashboard.titulo
const tituloPagina = 'Pedidos'

class Pedidos {
  /**
   * Realiza o cadastro de um pedido
   * @param {} seedTest
   * */
  cadastrar(seedTest) {
    var listaMateriais = seedTest.listaMateriais
    var ciclos = seedTest.ciclos

    // Navegar para Pedidos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // botao adicionar pedido
    cy.getVisible(locatorPedidos.dashboard.botaoNovoPedido).click()

    // data do pedido
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputDataPedido)
      .clear().type(seedTest.dataPedido)

    // fornecedor
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectFornecedor).click()
      .contains(seedTest.nomeFornecedor).click()

    // cnpj fornecedor
    cy.getVisible(locatorPedidos.registrarEditarPedido.cnpjFornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.cnpjFornecedor)
    })

    // numero pedido fornecedor
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputNumeroPedidoFornecedor)
      .clear().type(seedTest.numeroPedidoFornecedor)

    cy.intercept('GET', '/api/atividades-agricolas/v1/Planejamento/Safra/**').as('getSafra')

    // safra
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectSafra).click()
      .contains(seedTest.safra).click()

    cy.wait('@getSafra', { timeout: 30000 })

    // fazenda
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    // mesmo local de entrega
    if (seedTest.mesmoLocalEntrega) {
      // marcar checkbox local de entrega
      cy.getVisible(locatorPedidos.registrarEditarPedido.checkBoxMesmoLocalEntrega).click()

      // validar local de entrega
      cy.getVisible(locatorPedidos.registrarEditarPedido.selectLocalEntrega).should(($el) => {
        expect($el).to.contain.text(seedTest.localEntrega)
      })
    } else {
      cy.getVisible(locatorPedidos.registrarEditarPedido.selectLocalEntrega).click()
        .contains(seedTest.localEntrega).click()
    }

    // empresa
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectEmpresa).click()
      .contains(seedTest.empresa).click()

    // inscricao estadual
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectInscricaoEstadual).click()
      .contains(seedTest.inscricaoEstadual).click()

    // data da entrega
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputDataEntrega)
      .clear().type(`${seedTest.dataEntrega}{enter}`)

    // material
    listaMateriais.forEach((listaMaterial, index) => {
      if (index >= 1) {
        // adicionar material
        cy.getVisible(locatorPedidos.registrarEditarPedido.botaoAddMaterial).click()
      }

      // selecionar material
      cy.getVisible(locatorPedidos.registrarEditarPedido.selectMaterial).eq(index).click()
      cy.getVisible(locatorPedidos.registrarEditarPedido.pesquisarMaterial)
        .clear().type(listaMaterial.material)
      cy.getVisible(locatorPedidos.registrarEditarPedido.listItemsMaterial)
        .findAllByText(listaMaterial.material).click()

      // unidade
      cy.getVisible(locatorPedidos.registrarEditarPedido.labelUnidadeMaterial).eq(index).should(($el) => {
        expect($el).to.contain.text(listaMaterial.unidade)
      })

      // quantidade
      cy.getVisible(locatorPedidos.registrarEditarPedido.inputQuantidadeMaterial).eq(index)
        .clear().type(`{movetoend}${listaMaterial.quantidade}`)

      // preco unitario
      cy.getVisible(locatorPedidos.registrarEditarPedido.inputPrecoUnitarioMaterial).eq(index)
        .clear().type(`{movetoend}${listaMaterial.precoUnitario}`)

      // valor total
      cy.getVisible(locatorPedidos.registrarEditarPedido.valorTotal).click().eq(index).should(($el) => {
        expect($el).to.contain.text(listaMaterial.valorTotal)
      })
    })

    // valor total materiais
    cy.getVisible(locatorPedidos.registrarEditarPedido.valorTotalMateriais).should(($el) => {
      expect($el).to.contain.text(seedTest.valorTotalMateriais)
    })

    // forma de pagamento
    cy.getVisible(locatorPedidos.registrarEditarPedido.selectFormaPagamento).click()
      .contains(seedTest.formaPagamento).click()

    // valor parcela
    cy.getVisible(locatorPedidos.registrarEditarPedido.valorParcela).should(($el) => {
      expect($el).to.contain.text(seedTest.valorParcela)
    })

    // categoria
    if (seedTest.categoriaPorMaterial) {
      cy.getVisible(locatorPedidos.registrarEditarPedido.categoriaSelecionada).should(($el) => {
        expect($el).to.contain.text(seedTest.categoria)
      })
    } else {
      cy.getVisible(locatorPedidos.registrarEditarPedido.selectCategoria).click()
        .contains(seedTest.categoria).click()
    }

    // porcentagem categoria
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputPorcentagemCategoria).should(($el) => {
      expect($el).to.have.value(seedTest.porcentagemCategoria)
    })

    // valor categoria
    cy.getVisible(locatorPedidos.registrarEditarPedido.inputValorCategoria).should(($el) => {
      expect($el).to.have.value(seedTest.valorCategoria)
    })

    // rateio entre ciclos
    cy.getVisible(locatorPedidos.registrarEditarPedido.checkBoxRateioEntreCiclos).should(($el) => {
      expect($el).to.have.attr('aria-checked')
    })

    // validar nome, porcentagem e valor dos ciclos
    ciclos.forEach((ciclo, index) => {
      // nome ciclo
      cy.get(locatorPedidos.registrarEditarPedido.selectCiclo).eq(index).should(($el) => {
        expect($el).to.contain.text(ciclo.nomeCiclo)
      })

      // porcentagem ciclo
      cy.get(locatorPedidos.registrarEditarPedido.inputPorcentagemCiclo).eq(index).should(($el) => {
        expect($el).to.have.value(ciclo.porcentagemCiclo)
      })

      // valor ciclo
      cy.get(locatorPedidos.registrarEditarPedido.inputValorCiclo).eq(index).should(($el) => {
        expect($el).to.have.value(ciclo.valorCiclo)
      })
    })

    // salvar pedido
    cy.getVisible(locatorPedidos.registrarEditarPedido.botaoFinalizarAdicionar).click()

    cy.get(locatorPedidos.registrarEditarPedido.botaoFinalizarAdicionar)
      .should('not.exist')

    // mensagem sucesso
    cy.get(locatorPedidos.dashboard.mensagemSucesso).should(($el) => {
      expect($el).to.contain.text('Pedido salvo com sucesso')
    })
  }

  /**
   * Realiza exclusao de um pedido
   * @param {} seedTest
   * */
  excluir(seedTest) {
    // Navegar para Pedidos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // selecionar safra
    cy.getVisible(locatorPedidos.dashboard.selectSafra).click()
      .contains(seedTest.safra).click()

    // selecionar fazenda
    cy.getVisible(locatorPedidos.dashboard.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    // selecionar empresa
    cy.getVisible(locatorPedidos.dashboard.selectEmpresa).click()
      .contains(seedTest.empresa).click()

    // gambira pra fechar o select de empresa
    cy.getVisible(locatorPedidos.dashboard.titulo).click()

    // alterar visualizacao para cards
    cy.getVisible(locatorPedidos.dashboard.botaoMudarVisualizacao).click()

    // pesquisar por fornecedor
    cy.getVisible(locatorPedidos.dashboard.inputPesquisar)
      .clear().type(seedTest.nomeFornecedor)

    cy.intercept('GET', '/api/pedido-compra/v1/Pedidos/PedidoExibicao/**').as('getPedido')

    // abrir pedido
    cy.getVisible(locatorPedidos.dashboard.cardPedidos).click()

    cy.wait('@getPedido', { timeout: 30000 })

    cy.getVisible(locatorPedidos.detalhesPedido.botaoExcluir).click()
    cy.getVisible('button.el-button--primary').click()
    cy.get(locatorPedidos.detalhesPedido.botaoExcluir)
      .should('not.exist')
  }

  /**
   * Valida os detalhes de um pedido
   * @param {} seedTest
   * */
  validarDetalhes(seedTest) {
    var ciclos = seedTest.ciclos
    var notas = seedTest.notas
    var listaMateriais = seedTest.listaMateriais

    // Navegar para Pedidos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // selecionar safra
    cy.getVisible(locatorPedidos.dashboard.selectSafra).click()
      .contains(seedTest.safra).click()

    // selecionar fazenda
    cy.getVisible(locatorPedidos.dashboard.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    // selecionar empresa
    cy.getVisible(locatorPedidos.dashboard.selectEmpresa).click()
      .contains(seedTest.empresa).click()

    // gambira pra fechar o select de empresa
    cy.getVisible(locatorPedidos.dashboard.titulo).click()

    // alterar visualizacao para cards
    cy.getVisible(locatorPedidos.dashboard.botaoMudarVisualizacao).click()

    // pesquisar por fornecedor
    cy.getVisible(locatorPedidos.dashboard.inputPesquisar)
      .clear().type(seedTest.nomeFornecedor)

    cy.intercept('GET', '/api/pedido-compra/v1/Pedidos/PedidoExibicao/**').as('getPedido')

    // abrir pedido
    cy.getVisible(locatorPedidos.dashboard.cardPedidos).click()

    cy.wait('@getPedido', { timeout: 30000 })

    // validar status
    cy.getVisible(locatorPedidos.detalhesPedido.statusPedido).should(($el) => {
      expect($el).to.contain.text(seedTest.statusPedido)
    })

    // validar data do pedido
    cy.getVisible(locatorPedidos.detalhesPedido.dataPedido).should(($el) => {
      expect($el).to.contain.text(seedTest.dataPedido)
    })

    // validar nome fornecedor
    cy.getVisible(locatorPedidos.detalhesPedido.fornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.nomeFornecedor)
    })

    // validar cnpj fornecedor
    cy.getVisible(locatorPedidos.detalhesPedido.cnpjFornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.cnpjFornecedor)
    })

    // validar numero pedido fornecedor
    cy.getVisible(locatorPedidos.detalhesPedido.numeroPedidoFornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.numeroPedidoFornecedor)
    })

    // validar safra
    cy.getVisible(locatorPedidos.detalhesPedido.safra).should(($el) => {
      expect($el).to.contain.text(seedTest.safra)
    })

    // validar empresa
    cy.getVisible(locatorPedidos.detalhesPedido.empresa).should(($el) => {
      expect($el).to.contain.text(seedTest.empresa)
    })

    // validar inscricao estadual
    cy.getVisible(locatorPedidos.detalhesPedido.inscricaoEstadual).should(($el) => {
      expect($el).to.contain.text(seedTest.inscricaoEstadual)
    })

    // validar data entrega
    cy.getVisible(locatorPedidos.detalhesPedido.dataEntrega).should(($el) => {
      expect($el).to.contain.text(seedTest.dataEntrega)
    })

    // validar materiais da lista de materiais
    if (listaMateriais) {
      listaMateriais.forEach((listaMaterial, index) => {
        // validar nome material
        cy.getVisible(locatorPedidos.detalhesPedido.material).eq(index).should(($el) => {
          expect($el).to.contain.text(listaMaterial.material)
        })

        // validar  unidade material
        cy.getVisible(locatorPedidos.detalhesPedido.unidade).eq(index).should(($el) => {
          expect($el).to.contain.text(listaMaterial.unidade)
        })

        // validar quantidade material
        cy.getVisible(locatorPedidos.detalhesPedido.quantidade).eq(index).should(($el) => {
          expect($el).to.contain.text(listaMaterial.quantidade)
        })

        // validar preco unitario material
        cy.getVisible(locatorPedidos.detalhesPedido.precoUnitario).eq(index).should(($el) => {
          expect($el).to.contain.text(listaMaterial.precoUnitario)
        })

        // validar valor total material
        cy.getVisible(locatorPedidos.detalhesPedido.valorTotal).eq(index).should(($el) => {
          expect($el).to.contain.text(listaMaterial.valorTotal)
        })
      })
    }

    // validar notas da lista de materiais
    if (notas) {
      notas.forEach(nota => {
        // numero nota
        cy.get(locatorPedidos.detalhesPedido.notaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.numeroNota)
        })

        // quantidade material nota
        cy.get(locatorPedidos.detalhesPedido.quantidadeNotaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.quantidadeNota)
        })

        // preco unitario material nota
        cy.get(locatorPedidos.detalhesPedido.precoUnitarioNotaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.precoUnitarioNota)
        })

        // desconto nota
        cy.get(locatorPedidos.detalhesPedido.descontoNotaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.descontoNota)
        })

        // valot total material nota
        cy.get(locatorPedidos.detalhesPedido.valorTotalNotaMaterial).should(($el) => {
          expect($el).to.contain.text(nota.valorTotalNota)
        })
      })
    }

    // validar valor total dos materiais
    cy.getVisible(locatorPedidos.detalhesPedido.valorTotalMateriais).should(($el) => {
      expect($el).to.contain.text(seedTest.valorTotalMateriais)
    })

    // validar valor total de notas recebidas
    cy.getVisible(locatorPedidos.detalhesPedido.valorTotalNotasRecebidas).should(($el) => {
      expect($el).to.contain.text(seedTest.valorTotalNotasRecebidas)
    })

    // validar forma de pagamento
    cy.getVisible(locatorPedidos.detalhesPedido.formaPagamento).should(($el) => {
      expect($el).to.contain.text(seedTest.formaPagamento)
    })

    // validar quantidade de parcelas
    cy.getVisible(locatorPedidos.detalhesPedido.quantidadeParcelas).should(($el) => {
      expect($el).to.contain.text(seedTest.quantidadeParcelas)
    })

    // validar valor da parcela
    cy.getVisible(locatorPedidos.detalhesPedido.valorParcela).should(($el) => {
      expect($el).to.contain.text(seedTest.valorParcela)
    })

    // validar categoria
    cy.getVisible(locatorPedidos.detalhesPedido.categoria).should(($el) => {
      expect($el).to.contain.text(seedTest.categoria)
    })

    // validar porcentagem categoria
    cy.getVisible(locatorPedidos.detalhesPedido.porcentagemCategoria).should(($el) => {
      expect($el).to.contain.text(seedTest.porcentagemCategoria)
    })

    // validar valor categoria
    cy.getVisible(locatorPedidos.detalhesPedido.valorCategoria).should(($el) => {
      expect($el).to.contain.text(seedTest.valorCategoria)
    })

    if (ciclos) {
      // validar nome, porcentagem e valor dos ciclos
      ciclos.forEach(ciclo => {
        // nome ciclo
        cy.get(locatorPedidos.detalhesPedido.ciclo).should(($el) => {
          expect($el).to.contain.text(ciclo.nomeCiclo)
        })

        // porcentagem ciclo
        cy.get(locatorPedidos.detalhesPedido.porcentagemCiclo).should(($el) => {
          expect($el).to.contain.text(ciclo.porcentagemCiclo)
        })

        // valor ciclo
        cy.get(locatorPedidos.detalhesPedido.valorCiclo).should(($el) => {
          expect($el).to.contain.text(ciclo.valorCiclo)
        })
      })
    }
  }

  /**
   * Valida a exclusao de um pedido
   * */
  validarExclusao() {
    // navegar para Pedidos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // alterar visualizacao para cards
    cy.getVisible(locatorPedidos.dashboard.botaoMudarVisualizacao).click()

    // validar inexistencia do card de pedidos
    cy.get(locatorPedidos.dashboard.cardPedidos).should('not.exist')

    // validar mensagem de nenhum pedido encontrado
    cy.getVisible(locatorPedidos.dashboard.mensagemNenhumPedido)
      .should('contain', 'Você ainda não possui nenhum pedido.')
  }

  /**
   * Valida a listagem dos pedidos cadastrados
   * @param {} seedTest
   * */
  validarListagem(seedTest) {
    // Navegar para Pedidos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // selecionar safra
    cy.getVisible(locatorPedidos.dashboard.selectSafra).click()
      .contains(seedTest.safra).click()

    // selecionar fazenda
    cy.getVisible(locatorPedidos.dashboard.selectFazenda).click()
      .contains(seedTest.fazenda).click()

    // selecionar empresa
    cy.getVisible(locatorPedidos.dashboard.selectEmpresa).click()
      .contains(seedTest.empresa).click()

    // gambira pra fechar o select de empresa
    cy.getVisible(locatorPedidos.dashboard.titulo).click()

    // alterar visualizacao para cards
    cy.getVisible(locatorPedidos.dashboard.botaoMudarVisualizacao).click()

    // pesquisar por fornecedor
    cy.getVisible(locatorPedidos.dashboard.inputPesquisar)
      .clear().type(seedTest.nomeFornecedor)

    // validar status
    cy.getVisible(locatorPedidos.dashboard.statusPedido).should(($el) => {
      expect($el).to.contain.text(seedTest.statusPedido)
    })

    // validar fazenda
    cy.getVisible(locatorPedidos.dashboard.fazenda).should(($el) => {
      expect($el).to.contain.text(seedTest.fazenda)
    })

    // validar nome fornecedor
    cy.getVisible(locatorPedidos.dashboard.nomeFornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.nomeFornecedor)
    })

    // validar cnpj fornecedor
    cy.getVisible(locatorPedidos.dashboard.cnpjFornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.cnpjFornecedor)
    })

    // validar safra
    cy.getVisible(locatorPedidos.dashboard.safra).should(($el) => {
      expect($el).to.contain.text(seedTest.safra)
    })

    // validar numero pedido fornecedor
    cy.getVisible(locatorPedidos.dashboard.numeroPedidoFornecedor).should(($el) => {
      expect($el).to.contain.text(seedTest.numeroPedidoFornecedor)
    })

    // validar data do pedido
    cy.getVisible(locatorPedidos.dashboard.dataPedido).should(($el) => {
      expect($el).to.contain.text(seedTest.dataPedido)
    })
  }
}

export default new Pedidos()
