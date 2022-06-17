/// <reference types="cypress" />

import locDocumentos from '../../../../locators/funcionalidades/financeiro/documentos/locators-cadastro-documento.js'

const url = '/financeiro/documentos/listagem'
const locatorTituloPagina = locDocumentos.dashboard.titulo
const tituloPagina = 'Documentos'

class Documentos {
  /**
   * Metodo para cadastro de um documento
   * @param {*} seedTestDocumento
   */
  cadastrar(seedTestDocumento) {
    cy.intercept('GET', 'https://daas.dev.conexa.com.br/api/ciclo-producao/v1/Ciclo/List?**')
      .as('cicloProducao')
    cy.intercept('GET', 'https://daas.dev.conexa.com.br/api/atividades-agricolas/v1/Planejamento/Safra/ciclosRateio?**')
      .as('cicloRateio')
    cy.intercept('POST', 'https://myfarm.dev.conexa.com.br/api/financeiro/v1/Documento/Listagem')
      .as('listaDocumentos')
    // Navegar para Documentos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina).then(() => {
      cy.wait('@listaDocumentos', { timeout: 15000 } )
    })

    // botao adicionar documento
    cy.getVisible(locDocumentos.dashboard.novoDocumento).click()

    // operacao
    cy.getVisible(locDocumentos.documento.operacao).click()
    cy.getVisible(locDocumentos.documento.selecionarOperacao)
      .contains(seedTestDocumento.operacao)
      .click()

    // tipo documento
    cy.getVisible(locDocumentos.documento.tipoDocumentoSelecionado).should(
      ($el) => {
        expect($el).to.contain.text(seedTestDocumento.tipoDocumento)
      }
    )

    if (seedTestDocumento.dedutivel) {
      cy.getVisible(locDocumentos.documento.dedutivel)
        .contains(seedTestDocumento.dedutivel)
        .click()
    }

    // numero do documento
    cy.getVisible(locDocumentos.documento.numeroDocumento)
      .clear()
      .type(seedTestDocumento.numeroDocumento)

    // pessoa
    cy.getVisible(locDocumentos.documento.pessoa).click()
    cy.getVisible(locDocumentos.documento.selecionarPessoa)
      .contains(seedTestDocumento.pessoa)
      .click()

    // fazenda
    cy.getVisible(locDocumentos.documento.fazenda).click()
    cy.getVisible(locDocumentos.documento.selecionarFazenda)
      .contains(seedTestDocumento.fazenda)
      .click()

    // safra
    cy.getVisible(locDocumentos.documento.safra).click()
    cy.getVisible(locDocumentos.documento.selecionarSafra)
      .contains(seedTestDocumento.safra)
      .click()

    // empresa
    cy.getVisible(locDocumentos.documento.empresa).click()
    cy.getVisible(locDocumentos.documento.selecionarEmpresa)
      .contains(seedTestDocumento.empresa)
      .click()

    // tags
    if (seedTestDocumento.tag) {
      cy.getVisible(locDocumentos.documento.tags).click()
      cy.getVisible(locDocumentos.documento.novaTag).click()
      cy.getVisible(locDocumentos.documento.nomeTag)
        .clear()
        .type(seedTestDocumento.tag)
      cy.getVisible(locDocumentos.documento.salvarTag).click()
      cy.getVisible(locDocumentos.documento.bodyModal).click( { force: true } )
    }

    if (seedTestDocumento.observacao) {
      // observacao
      cy.getVisible(locDocumentos.documento.observacao)
        .clear()
        .type(seedTestDocumento.observacao)
    }

    // valor total
    cy.getVisible(locDocumentos.documento.valorTotal).click()
      .clear()
      .type(seedTestDocumento.valorTotal)

    // ja foi pago
    if (seedTestDocumento.jaPago) {
      cy.getVisible(locDocumentos.documento.foiPago).click()

      // conta bancaria
      cy.getVisible(locDocumentos.documento.contaBancaria).click()
      cy.getVisible(locDocumentos.documento.selecionarContaBancaria)
        .contains(seedTestDocumento.contaBancaria)
        .click()

      // conta destino
      cy.getVisible(locDocumentos.documento.contaDestino).click()
      cy.getVisible(locDocumentos.documento.selecionarContaDestino)
        .contains(seedTestDocumento.contaDestino)
        .click()
    }

    // forma de pagamento
    cy.getVisible(locDocumentos.documento.formaDePagamento).click()
    cy.getVisible(locDocumentos.documento.selecionarFormaPagamento)
      .contains(seedTestDocumento.formaPagamento)
      .click()

    // Condicao de pagamento
    if(seedTestDocumento.condicaoPagamento) {
      cy.getVisible(locDocumentos.documento.condicaoPagamento)
      .contains(seedTestDocumento.condicaoPagamento).click()

      // Informar quantidade de parcelas
      if(seedTestDocumento.quantidadeParcela) {
        cy.getVisible(locDocumentos.documento.quantidadeParcela)
        .clear().type(seedTestDocumento.quantidadeParcela)
      }

      // selecionar valor fixo
      if(seedTestDocumento.valorFixo) {
        cy.getVisible(locDocumentos.documento.valorFixo).click()
      }
    }

    if(seedTestDocumento.numeroBoleto) {
      const numeros = seedTestDocumento.numeroBoleto
      numeros.forEach((numero, index) => {
        cy.get(locDocumentos.documento.numeroBoleto).eq(index)
        .type(numero.numero)
      })
    }

    // rateio entre ciclos
    if (seedTestDocumento.rateioEntreCiclos) {
      // selecionar rateio ciclo
      cy.getVisible(locDocumentos.documento.rateioEntreCiclos).click()
      const ciclos = seedTestDocumento.ciclos
      ciclos.forEach((ciclo, index) => {
        if (index >= 1) {
          // adicionar outro ciclo
          cy.getVisible(locDocumentos.documento.adicionarCiclo).click()
        }

        // nome do ciclo
        cy.get(locDocumentos.documento.ciclo)
          .eq(index).click().contains(ciclo.nome).click()

        // valor do ciclo
        cy.get(locDocumentos.documento.rateioCicloValor)
          .eq(index).clear().type(ciclo.valor)
      })
    }

    // rateio entre ciclos pelo planejamento
    if (seedTestDocumento.rateioEntreCiclosPlanejamento) {
      // selecionar rateio ciclo
      cy.getVisible(locDocumentos.documento.rateioEntreCiclos).click()

      cy.wait(2000)

      // wait para aguardar busca dos ciclos do planejamento
      cy.wait('@cicloRateio', { timeout: 15000 } )

      // timeout necessario para carregar os ciclos nos selects
      cy.wait('@cicloProducao', { timeout: 15000 } )

      cy.wait(2000)

      const ciclos = seedTestDocumento.ciclos
      ciclos.forEach((ciclo, index) => {
        // nome do ciclo
        cy.get(locDocumentos.documento.cicloSelecionado)
          .eq(index)
          .should(($el) => {
            expect($el).to.contain.text(ciclo.nome)
          })

        // valor do ciclo
        cy.get(locDocumentos.documento.rateioCicloValor)
          .eq(index)
          .should(($el) => {
            expect($el).to.have.value(ciclo.valor)
          })
      })
    }

    // rateio entre categorias / selecionar as categorias
    if (seedTestDocumento.rateioCategoriaSelecionar) {
      const categorias = seedTestDocumento.categorias
      categorias.forEach((categoria, index) => {
        if (index >= 1) {
          // adicionar outra categoria
          cy.getVisible(locDocumentos.documento.adicionarCategoria).click()
        }

        // pesquisar e selecionar categorias
        cy.get(locDocumentos.documento.selecionarCategoria).eq(index).click()
        cy.get(locDocumentos.documento.pesquisarCategoria)
          .eq(index).type(categoria.nome)
        cy.get(locDocumentos.documento.listaCategorias)
          .eq(index).contains(categoria.nome).click()

        // valor categoria
        cy.get(locDocumentos.documento.categoriaValor)
          .eq(index).clear().type(categoria.valor)
      })
    }

    // rateio entre categorias
    if (seedTestDocumento.rateioEntreCategorias) {
      const categorias = seedTestDocumento.categorias
      categorias.forEach((categoria, index) => {
        if (index >= 1) {
          // adicionar outra categoria
          cy.getVisible(locDocumentos.documento.adicionarCategoria).click()
        }

        // nome categoria
        cy.get(locDocumentos.documento.selecionarCategoria)
          .eq(index).click().contains(categoria.nome).click()

        // valor categoria
        cy.get(locDocumentos.documento.categoriaValor)
          .eq(index).clear().type(categoria.valor)
      })
    }
    if (seedTestDocumento.rateioEntreCategoriasPorOperacao) {
      const categorias = seedTestDocumento.categorias
      categorias.forEach((categoria, index) => {
        // nome categoria
        cy.get(locDocumentos.documento.selecionarCategoria)
          .eq(index)
          .should(($el) => {
            expect($el).to.contain.text(categoria.nome)
          })

          cy.wait(2000)

        // valor categoria
        cy.get(locDocumentos.documento.categoriaValor)
          .eq(index)
          .should(($el) => {
            expect($el).to.have.value(categoria.valor)
          })
      })
    }

    if(seedTestDocumento.anexo) {
      cy.get(locDocumentos.documento.anexarArquivo).selectFile('cypress/fixtures/funcionalidades/financeiro/documentos/cadastro/arquivos/Exemplo-DANFE.png', { force : true } )
      cy.getVisible(locDocumentos.documento.anexo).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.anexos)
      })
    }

    // salvar documento
    cy.getVisible(locDocumentos.documento.adicionar).click( { force: true } )
    cy.wait(2000)
    cy.get(locDocumentos.documento.adicionar).should('not.exist')
    
    cy.getVisible(locatorTituloPagina).should(($el) => {
      expect($el).to.contain.text(tituloPagina)
    })
  }

  /**
   * Realiza pesquisa de documento na listagem de Documento
   * @param {*} seedTestDocumento
   */
  static pesquisar(seedTestDocumento) {
    const numeroDocumento = seedTestDocumento.numeroDocumento

    cy.intercept('POST', 'https://myfarm.dev.conexa.com.br/api/financeiro/v1/Documento/Listagem').as('financeiro')

    // Navegar para Documentos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.wait('@financeiro', { timeout: 15000 } )
    
    cy.clearLocalStorage('financeiro-documentos-filtros')

    // selecionar fazenda
    cy.getVisible(locDocumentos.dashboard.filtroFazenda).click()
      .get(locDocumentos.dashboard.listaFazendas)
      .contains(seedTestDocumento.fazenda).click()

    // selecionar empresa
    cy.getVisible(locDocumentos.dashboard.filtroEmpresa).click()
      .get(locDocumentos.dashboard.listaEmpresas)
      .contains(seedTestDocumento.empresa).click()

    // input pesquisar
    cy.getVisible(locDocumentos.dashboard.pesquisarDocumento).clear()
      .type(`${numeroDocumento}{enter}`)

    cy.wait('@financeiro', { timeout: 10000 })

    // abrir filtros
    cy.getVisible(locDocumentos.dashboard.filtros).click()

    // filtrar por pessoa
    cy.getVisible(locDocumentos.dashboard.filtroPessoa).click()
      .contains(seedTestDocumento.pessoa).click()

    // filtrar por safra
    cy.getVisible(locDocumentos.dashboard.filtroSafra).click()
      .contains(seedTestDocumento.safra).click()

    // card documento
    cy.get(locDocumentos.dashboard.cardDocumento)
      .contains(seedTestDocumento.numeroDocumento)
  }

  /**
   * Valida os detalhes do documento
   * @param {*} seedTestDocumento
   */
  validarDetalhes(seedTestDocumento) {
    // Pesquisar documento
    Documentos.pesquisar(seedTestDocumento)

    // Abrir documento
    cy.get(locDocumentos.dashboard.selecionarDocumento, { timeout: 15000 })
      .contains(seedTestDocumento.numeroDocumento).click({ force: true })

    // Validar operacao
    if (seedTestDocumento.operacao) {
      cy.getVisible(locDocumentos.detalhesDocumento.operacao).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.operacao)
      })
    }

    // Validar tipo do documento
    if (seedTestDocumento.tipoDocumento) {
      cy.getVisible(locDocumentos.detalhesDocumento.tipoDocumento).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.tipoDocumento)
      })
    }

    // Validar deducao do documento
    if (seedTestDocumento.dedutivel) {
      cy.getVisible(locDocumentos.detalhesDocumento.dedutivel).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.dedutivel)
      })
    }

    // Validar numero do documento
    if (seedTestDocumento.numeroDocumento) {
      cy.getVisible(locDocumentos.detalhesDocumento.numeroDocumento).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.numeroDocumento)
      })
    }

    // Validar pessoa
    if (seedTestDocumento.pessoa) {
      cy.getVisible(locDocumentos.detalhesDocumento.pessoa).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.pessoa)
      })
    }

    // Validar CPF ou CNPJ
    if (seedTestDocumento.cpfCnpjPessoa) {
      cy.getVisible(locDocumentos.detalhesDocumento.cpfCnpj).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.cpfCnpjPessoa)
      })
    }

    // Validar fazenda
    if (seedTestDocumento.fazenda) {
      cy.getVisible(locDocumentos.detalhesDocumento.fazenda).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.fazenda)
      })
    }

    // Validar safra
    if (seedTestDocumento.safra) {
      cy.getVisible(locDocumentos.detalhesDocumento.safra).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.safra)
      })
    }

    // Validar empresa
    if (seedTestDocumento.empresa) {
      cy.getVisible(locDocumentos.detalhesDocumento.empresa).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.empresa)
      })
    }

    // Validar IE da empresa
    if (seedTestDocumento.ieEmpresa) {
      cy.getVisible(locDocumentos.detalhesDocumento.ieEmpresa).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.ieEmpresa)
      })
    }

    // Validar tags
    if (seedTestDocumento.tag) {
      cy.getVisible(locDocumentos.detalhesDocumento.tags).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.tag)
      })
    }

    // Validar observacao
    if (seedTestDocumento.observacao) {
      cy.getVisible(locDocumentos.detalhesDocumento.observacao).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.observacao)
      })
    }

    // Validar se está conferido
    if (seedTestDocumento.conferido) {
      cy.getVisible(locDocumentos.detalhesDocumento.conferido).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.conferido)
      })
    }

    // Validar valor total
    if (seedTestDocumento.valorTotal) {
      cy.getVisible(locDocumentos.detalhesDocumento.valorTotal).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.valorTotal)
      })
    }

    // Validar forma de pagamento
    if (seedTestDocumento.formaPagamento) {
      cy.getVisible(locDocumentos.detalhesDocumento.formaPagamento).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.formaPagamento)
      })
    }

    // Validar condição de pagamento
    if (seedTestDocumento.condicaoPagamento) {
      cy.getVisible(locDocumentos.detalhesDocumento.condicaoPagamento).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.condicaoPagamento)
      })
    }

    // Validar quantidade de parcelas
    if (seedTestDocumento.qtdParcelas) {
      cy.getVisible(locDocumentos.detalhesDocumento.quantidadeParcela).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.qtdParcelas)
      })
    }

    // Validar conta bancária
    if (seedTestDocumento.contaBancaria) {
      cy.getVisible(locDocumentos.detalhesDocumento.contaBancaria).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.contaBancaria)
      })
    }

    // Validar tabela de parcelas
    if (seedTestDocumento.parcelas) {
      const parcelas = seedTestDocumento.parcelas
      parcelas.forEach((parcela) => {
        // nome da parcela
        cy.get(locDocumentos.detalhesDocumento.tabelaParcelas).should(($el) => {
          expect($el).to.contain.text(parcela.parcela)
        })
        // valor da parcela
        cy.get(locDocumentos.detalhesDocumento.tabelaParcelas).should(($el) => {
          expect($el).to.contain.text(parcela.valorParcela)
        })
        // status da parcela
        cy.get(locDocumentos.detalhesDocumento.tabelaParcelas).should(($el) => {
          expect($el).to.contain.text(parcela.statusParcela)
        })
        // saldo da parcela
        cy.get(locDocumentos.detalhesDocumento.tabelaParcelas).should(($el) => {
          expect($el).to.contain.text(parcela.saldoParcela)
        })
      })
    }

    // Validar tabela de rateio entre ciclos
    if (seedTestDocumento.ciclos) {
      const ciclos = seedTestDocumento.ciclos
      ciclos.forEach((ciclo) => {
        // nome do ciclo
        cy.get(locDocumentos.detalhesDocumento.tabelaRateioCiclos).should(($el) => {
          expect($el).to.contain.text(ciclo.nome)
        })
        // valor do ciclo
        cy.get(locDocumentos.detalhesDocumento.tabelaRateioCiclos).should(($el) => {
          expect($el).to.contain.text(ciclo.valor)
        })
      })
    }

    // Validar tabela de rateio entre categorias
    if (seedTestDocumento.categorias) {
      const categorias = seedTestDocumento.categorias
      categorias.forEach((categoria) => {
        // nome da categoria
        cy.get(locDocumentos.detalhesDocumento.tabelaRateioCategorias).should(($el) => {
          expect($el).to.contain.text(categoria.nome)
        })
        // porcentagem
        cy.get(locDocumentos.detalhesDocumento.tabelaRateioCategorias).should(($el) => {
          expect($el).to.contain.text(categoria.porcentagem)
        })
        // valor do rateio
        cy.get(locDocumentos.detalhesDocumento.tabelaRateioCategorias).should(($el) => {
          expect($el).to.contain.text(categoria.valor)
        })
      })
    }

    // Validar anexos
    if(seedTestDocumento.anexos) {
      cy.getVisible(locDocumentos.detalhesDocumento.anexos).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.anexos)
      })
    }
  }

  /**
   * Realiza a edição de um documento
   * @param {*} seedTestFiltro
   * @param {*} seedTestEdicaoDocumento
   */
  editar(seedTestFiltro, seedTestEdicaoDocumento) {
    /*
    const url = '/financeiro/documentos/listagem'
    const locatorTituloPagina = locDocumentos.dashboard.titulo
    const tituloPagina = 'Documentos'
    */
    // navegar para Documentos
    // cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // TODO: Solução temporaria até resolução da atividade #29377
    cy.getVisible('.siagri-navbar--logo').click()
    cy.getVisible('.siagri-icon-financeiro').click()
    cy.getVisible('[title="Documentos"]').click()

    // selecionar Fazenda
    cy.getVisible(locDocumentos.dashboard.filtroFazenda).click()
      .contains(seedTestFiltro.fazenda).click()

    // selecionar Empresa
    cy.getVisible(locDocumentos.dashboard.filtroEmpresa).click()
      .contains(seedTestFiltro.empresa).click()

    // abrir documento
    cy.getVisible(locDocumentos.dashboard.selecionarDocumento).click()

    // abrir edicao de documento
    cy.getVisible(locDocumentos.detalhesDocumento.botaoEditarDocumento).click()

    // editar operacao
    if (seedTestEdicaoDocumento.operacao) {
      cy.getVisible(locDocumentos.documento.operacao).click()
        .contains(seedTestEdicaoDocumento.operacao).click()
    }

    // tipo documento
    if (seedTestEdicaoDocumento.tipoDocumento) {
      cy.getVisible(locDocumentos.documento.tipoDocumentoSelecionado).should(($el) => {
        expect($el).to.contain.text(seedTestEdicaoDocumento.tipoDocumento)
      })
    }

    // deducao
    if (seedTestEdicaoDocumento.dedutivel) {
      cy.getVisible(locDocumentos.documento.dedutivel)
        .contains(seedTestEdicaoDocumento.dedutivel).click()
    }

    // numero do documento
    if (seedTestEdicaoDocumento.numeroDocumento) {
      cy.getVisible(locDocumentos.documento.numeroDocumento)
        .clear().type(seedTestEdicaoDocumento.numeroDocumento)
    }

    // pessoa
    if (seedTestEdicaoDocumento.pessoa) {
      cy.getVisible(locDocumentos.documento.pessoa).click()
        .contains(seedTestEdicaoDocumento.pessoa).click()
    }

    // fazenda
    if (seedTestEdicaoDocumento.fazenda) {
      cy.getVisible(locDocumentos.documento.fazenda).click()
        .contains(seedTestEdicaoDocumento.fazenda).click()
    }

    // safra
    if (seedTestEdicaoDocumento.safra) {
      cy.getVisible(locDocumentos.documento.safra).click()
        .contains(seedTestEdicaoDocumento.safra).click()
    }

    // empresa
    if (seedTestEdicaoDocumento.empresa) {
      cy.getVisible(locDocumentos.documento.empresa).click()
        .contains(seedTestEdicaoDocumento.empresa).click()
    }

    // IE da Empresa
    if (seedTestEdicaoDocumento.ie) {
      cy.getVisible(locDocumentos.documento.ieEmpresa).should(($el) => {
        expect($el).to.contain.text(seedTestEdicaoDocumento.ie)
      })
    }

    // tags
    if (seedTestEdicaoDocumento.tag) {
      // remover tag
      cy.getVisible(locDocumentos.documento.tags).click()
      cy.getVisible(locDocumentos.documento.removerTag).click()

      // adicionar nova tag
      cy.getVisible(locDocumentos.documento.tags).click()
      cy.getVisible(locDocumentos.documento.novaTag).click()
      cy.getVisible(locDocumentos.documento.nomeTag)
        .clear().type(seedTestEdicaoDocumento.tag)
      cy.getVisible(locDocumentos.documento.salvarTag).click()
    }

    // alterar observacao
    if (seedTestEdicaoDocumento.observacao) {
      cy.getVisible(locDocumentos.documento.observacao).clear()
        .type(seedTestEdicaoDocumento.observacao)
    }

    // valor total
    if (seedTestEdicaoDocumento.valorTotal) {
      cy.getVisible(locDocumentos.documento.valorTotal)
        .clear().type(seedTestEdicaoDocumento.valorTotal)
    }

    // ja foi pago
    if (seedTestEdicaoDocumento.jaPago) {
      cy.getVisible(locDocumentos.documento.foiPago).click()

      // conta bancaria
      cy.getVisible(locDocumentos.documento.contaBancaria).click()
      cy.getVisible(locDocumentos.documento.selecionarContaBancaria)
        .contains(seedTestEdicaoDocumento.contaBancaria).click()

      // conta destino
      cy.getVisible(locDocumentos.documento.contaDestino).click()
      cy.getVisible(locDocumentos.documento.selecionarContaDestino)
        .contains(seedTestEdicaoDocumento.contaDestino).click()
    }

    // forma de pagamento
    if (seedTestEdicaoDocumento.formaPagamento) {
      cy.getVisible(locDocumentos.documento.formaPagamento).click()
        .contains(seedTestEdicaoDocumento.formaPagamento).click()
    }

    // rateio entre ciclos
    if (seedTestEdicaoDocumento.alterarValorRateioCiclos) {
      const ciclos = seedTestEdicaoDocumento.ciclos

      ciclos.forEach((ciclo, index) => {
        // nome do ciclo
        cy.get(locDocumentos.documento.ciclo).eq(index).click()
          .contains(ciclo.nome).click()

        // valor do ciclo
        cy.get(locDocumentos.documento.rateioCicloValor).eq(index)
          .should('exist').and('be.visible')
          .clear().type(ciclo.valor)
      })
    }

    // rateio entre categorias
    if (seedTestEdicaoDocumento.rateioEntreCategorias) {
      const categorias = seedTestEdicaoDocumento.categorias

      categorias.forEach((categoria, index) => {
        if (index >= 1) {
          // adicionar outra categoria
          cy.get(locDocumentos.documento.adicionarCategoria)
            .should('exist').and('be.visible').click()
        }

        // nome categoria
        cy.get(locDocumentos.documento.selecionarCategoria).eq(index)
          .should('exist').and('be.visible')
          .click().contains(categoria.nome).click()

        // valor categoria
        cy.get(locDocumentos.documento.categoriaValor).eq(index)
          .should('exist').and('be.visible')
          .clear().type(categoria.valor)
      })
    }
    // salvar alterações
    cy.getVisible(locDocumentos.documento.adicionar).click()

    cy.get(locDocumentos.documento.adicionar).should('not.exist')

    cy.getVisible(locDocumentos.dashboard.titulo).contains('Documentos')
  }

  /**
   * Exclui um documento cadastrado
   * @param {*} seedTestDocumento
   */
  excluir(seedTestDocumento) {
    // Pesquisar documento
    Documentos.pesquisar(seedTestDocumento)

    // Abrir documento
    cy.get(locDocumentos.dashboard.selecionarDocumento)
      .contains(seedTestDocumento.numeroDocumento)
      .parents(locDocumentos.dashboard.selecionarDocumento)
      .click({ force: true })

    // Excluir documento
    cy.getVisible(locDocumentos.detalhesDocumento.botaoRemoverDocumento, { timeout: 15000 })
      .click()

    // Confirmar exclusão
    cy.get(locDocumentos.detalhesDocumento.botaoSim, { timeout: 15000 })
      .should('exist').and('be.visible')
      .contains('Sim').click({ force: true })

    cy.get(locDocumentos.detalhesDocumento.mensagemSucesso).contains('Documento excluído com sucesso')
  }

  /**
   * Valida a exclusao do documento
   */
  validarExclusao() {
    // Navegar para Documentos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // limpar fazenda
    // cy.get(locDocumentos.dashboard.limparFiltroFazenda).click({ force: true })

    // limpar empresa
    // cy.get(locDocumentos.dashboard.limparFiltroEmpresa).click({ force: true })

    // validar inexistencia do card documento
    cy.get(locDocumentos.dashboard.cardDocumento).should('not.exist')

    // validar mensagem de nenhum documento encontrado
    cy.getVisible(locDocumentos.dashboard.mensagemNenhumDocumento)
      .contains('Você ainda não possui nenhum documento cadastrado.')
  }
}

export default new Documentos()
