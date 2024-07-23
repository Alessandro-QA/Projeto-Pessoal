/// <reference types="cypress" />

import locDocumentos from '../../../locators/financeiro/documentos/locators-cadastro-documento.js'

const url = '/financeiro/documentos/listagem'
const locatorTituloPagina = locDocumentos.dashboard.titulo
const tituloPagina = 'Documentos'

class Documentos {

  /**
   * Validar a Listagem de documentos
   * @param {*} seedTestDocumento 
   */
  listagem(seedTestDocumento) {
    Documentos.pesquisar(seedTestDocumento)
  }

  /**
   * Metodo para cadastro de um documento
   * @param {*} seedTestDocumento
   */
  cadastrar(seedTestDocumento) {
    cy.intercept('GET', `${Cypress.env('baseUrlDaas')}/api/ciclo-producao/v1/Ciclo/List?**`).as('cicloProducao')
    cy.intercept('GET', `${Cypress.env('baseUrlDaas')}/api/atividades-agricolas/v1/Planejamento/Safra/ciclosRateio?**`).as('cicloRateio')
    cy.intercept('POST', '/api/financeiro/v1/Documento/Listagem').as('listaDocumentos')
    cy.intercept('GET', 'https://economia.awesomeapi.com.br/last/**').as('getCotacaoMoeda')

    // Ultima rota chamada após clicar em novo pagamento
    cy.intercept('GET', `${Cypress.env('baseUrlDaas')}/api/forma-pagamento/v1/FormaPagamento`).as('formaPagamento')
    cy.intercept('POST', '/api/financeiro/v1/Documento').as('criarDocumento')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Documentos')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.wait('@listaDocumentos', { timeout: 20000 })
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    })

    cy.log('Clicar no botao adicionar documento')
    cy.get(locDocumentos.dashboard.novoDocumento).click()

    //Aguarda carregar até a última requisição
    //cy.wait('@formaPagamento', { timeout: 20000 })
    cy.scrollTo(0, 0, { ensureScrollable: false })

    cy.log('Selecionar operacao')
    cy.get(locDocumentos.documento.operacao)
      .scrollIntoView()
      .should('be.visible')
      .click()

    cy.get(locDocumentos.documento.selecionarOperacao)
      .contains(seedTestDocumento.operacao)
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true })

    cy.log('Validar tipo documento')
    cy.getVisible(locDocumentos.documento.tipoDocumentoSelecionado).should(
      ($el) => {
        expect($el).to.contain.text(seedTestDocumento.tipoDocumento)
      }
    )

    if (seedTestDocumento.dedutivel) {
      cy.getVisible(locDocumentos.documento.dedutivel)
        .contains(seedTestDocumento.dedutivel).click()
    }

    cy.log('Digitar numero do documento')
    cy.get(locDocumentos.documento.numeroDocumento)
      .clear().type(seedTestDocumento.numeroDocumento)

    cy.log('Selecionar pessoa')
    cy.getVisible(locDocumentos.documento.pessoa).click({ force: true })
      .get(locDocumentos.documento.selecionarPessoa).contains(seedTestDocumento.pessoa).click({ force: true })

    cy.log('Selecionar fazenda')
    cy.getVisible(locDocumentos.documento.fazenda).click({ force: true })
      .get(locDocumentos.documento.selecionarFazenda)
      .contains(seedTestDocumento.fazenda).click({ force: true })

    cy.log('Selecionar safra')
    cy.getVisible(locDocumentos.documento.safra).click({ force: true })
      .get(locDocumentos.documento.selecionarSafra)
      .contains(seedTestDocumento.safra).click({ force: true })

    cy.log('Selecionar empresa')
    cy.getVisible(locDocumentos.documento.empresa).click({ force: true })
      .get(locDocumentos.documento.selecionarEmpresa)
      .contains(seedTestDocumento.empresa).click({ force: true })

    if (seedTestDocumento.tag) {
      cy.log('Digitar tags')
      cy.getVisible(locDocumentos.documento.tags).click()
        .get(locDocumentos.documento.listTag)
        .contains(seedTestDocumento.tag).click({ force: true })
    }

    if (seedTestDocumento.observacao) {
      cy.log('Digitar observacao')
      cy.getVisible(locDocumentos.documento.observacao)
        .clear().type(seedTestDocumento.observacao)
    }

    if (seedTestDocumento.moedaEstrangeira) {
      cy.log('Preencher moeda estrangeira')

      cy.log('Marcar check moeda estrangeira')
      cy.get(locDocumentos.documento.checkMoedaEstrangeira).contains('Pagamento em moeda estrangeira').click()

      cy.log('Selecionar moeda estrangeira')
      cy.get(locDocumentos.documento.selectMoeda).click()
        .get(locDocumentos.documento.listMoedas).contains(seedTestDocumento.moeda).click()

      cy.wait('@getCotacaoMoeda', { timeout: 20000 })

      cy.log('Digitar total negociado moeda estrangeira')
      cy.get(locDocumentos.documento.inputValorNegociado).clear().type(seedTestDocumento.valorTotalNegociado)

      cy.log('Digitar cotação moeda estrangeira')
      cy.get(locDocumentos.documento.inputCotacaoMoeda).clear().realType(seedTestDocumento.cotacaoMoeda)

      cy.log('Validar valor total')
      cy.getVisible(locDocumentos.documento.valorTotal).should(($el) => {
        expect($el).to.contains.value(seedTestDocumento.valorTotal)
      })
    }
    else {
      cy.log('Digitar valor total')
      cy.getVisible(locDocumentos.documento.valorTotal).click()
        .clear().type(seedTestDocumento.valorTotal)
    }

    if (seedTestDocumento.jaPago) {
      cy.log('Selecionar ja foi pago')
      cy.getVisible(locDocumentos.documento.foiPago).click()

      cy.log('Selecionar conta bancaria')
      cy.getVisible(locDocumentos.documento.contaBancaria).click()
        .get(locDocumentos.documento.selecionarContaBancaria)
        .contains(seedTestDocumento.contaBancaria).click()

      cy.log('Selecionar conta destino')
      cy.getVisible(locDocumentos.documento.contaDestino).click()
        .get(locDocumentos.documento.selecionarContaDestino)
        .contains(seedTestDocumento.contaDestino).click()
    }

    cy.log('Selecionar forma de pagamento')
    cy.getVisible(locDocumentos.documento.formaDePagamento).click()
      .get(locDocumentos.documento.selecionarFormaPagamento)
      .contains(seedTestDocumento.formaPagamento).click()

    if (seedTestDocumento.condicaoPagamento) {
      cy.log('Selecionar Condicao de pagamento')
      cy.getVisible(locDocumentos.documento.condicaoPagamento)
        .contains(seedTestDocumento.condicaoPagamento).click()

      if (seedTestDocumento.quantidadeParcela) {
        cy.log('Informar quantidade de parcelas')
        cy.getVisible(locDocumentos.documento.quantidadeParcela)
          .clear().type(seedTestDocumento.quantidadeParcela)

        if (seedTestDocumento.editarParcelas) {
          const parcelas = seedTestDocumento.parcelas
          parcelas.forEach((parcelas, index) => {
            cy.log('Digitar valor da parcela')
            cy.get(locDocumentos.documento.inputParcelas)
              .eq(index).clear().type(parcelas.valorParcela).click()

            cy.log('Digitar data de vencimento da parcela')
            cy.get(locDocumentos.documento.vencimentoParcelas)
              .eq(index).clear().type(parcelas.vencimentoParcela)
          })
        }
      }

      if (seedTestDocumento.valorFixo) {
        cy.log('Selecionar valor fixo')
        cy.getVisible(locDocumentos.documento.valorFixo).click()
      }
    }

    if (seedTestDocumento.numeroBoleto) {
      cy.log('Digitar numero boleto')
      const numeros = seedTestDocumento.numeroBoleto
      numeros.forEach((numero, index) => {
        cy.get(locDocumentos.documento.numeroBoleto).eq(index)
          .type(numero.numero)
      })
    }

    if (seedTestDocumento.rateioEntreCiclos) {
      cy.log('Selecionar rateio ciclo')
      cy.getVisible(locDocumentos.documento.rateioEntreCiclos).click()
      const ciclos = seedTestDocumento.ciclos
      ciclos.forEach((ciclo, index) => {
        if (index >= 1) {
          cy.log('Adicionar outro ciclo')
          cy.getVisible(locDocumentos.documento.adicionarCiclo).click()
        }

        cy.log('Digitar nome do ciclo')
        cy.get(locDocumentos.documento.ciclo)
          .eq(index).click().contains(ciclo.nome).click()

        cy.log('Digitar valor do ciclo')
        cy.get(locDocumentos.documento.rateioCicloValor)
          .eq(index).clear().type(ciclo.valor)
      })
    }

    if (seedTestDocumento.rateioEntreCiclosPlanejamento) {
      cy.log('Rateio entre ciclos pelo planejamento')
      cy.log('selecionar rateio ciclo')
      cy.getVisible(locDocumentos.documento.rateioEntreCiclos).click()

      cy.log('wait para aguardar busca dos ciclos do planejamento')
      cy.wait('@cicloRateio', { timeout: 20000 })

      cy.log('timeout necessario para carregar os ciclos nos selects')
      cy.wait('@cicloProducao', { timeout: 20000 })

      if (seedTestDocumento.moedaEstrangeira) {
        const ciclos = seedTestDocumento.ciclos

        ciclos.forEach((ciclo) => {
          cy.log('Validar nome do ciclo')
          cy.get(locDocumentos.documento.ciclo).contains(ciclo.nome)
        })
      } else {
        const ciclos = seedTestDocumento.ciclos
        ciclos.forEach((ciclo, index) => {

          if (index >= 1) {
            cy.log('adicionar outro ciclo')
            cy.getVisible(locDocumentos.documento.adicionarCiclo).click()
          }

          cy.log('Selecionar nome do ciclo')
          cy.get(locDocumentos.documento.ciclo)
            .eq(index).click().contains(ciclo.nome).click()

          cy.log('Digitar valor do ciclo')
          cy.get(locDocumentos.documento.rateioCicloValor)
            .eq(index).clear().type(ciclo.valor)
        })
      }
    }

    if (seedTestDocumento.rateioCategoriaSelecionar) {
      cy.log('rateio entre categorias / selecionar as categorias')
      const categorias = seedTestDocumento.categorias
      categorias.forEach((categoria, index) => {
        if (index >= 1) {
          cy.log('adicionar outra categoria')
          cy.getVisible(locDocumentos.documento.adicionarCategoria).click()
        }

        cy.log('pesquisar e selecionar categorias')
        cy.get(locDocumentos.documento.selecionarCategoria).eq(index).click()
        cy.get(locDocumentos.documento.pesquisarCategoria)
          .type(categoria.nome)
        cy.get(locDocumentos.documento.listaCategorias)
          .contains(categoria.nome).click()

        cy.log('valor categoria')
        cy.get(locDocumentos.documento.categoriaValor)
          .eq(index).clear().type(categoria.valor).type('{enter}')
      })
    }

    if (seedTestDocumento.rateioEntreCategorias) {
      cy.log('Selecionar rateio entre categorias')

      const categorias = seedTestDocumento.categorias

      categorias.forEach((categoria, index) => {
        if (index >= 1) {
          cy.log('adicionar outra categoria')
          cy.getVisible(locDocumentos.documento.adicionarCategoria).click()
        }

        cy.log('nome categoria')
        cy.get(locDocumentos.documento.selecionarCategoria)
          .eq(index).click().contains(categoria.nome).click()

        cy.log('valor categoria')
        cy.get(locDocumentos.documento.categoriaValor)
          .eq(index).clear().type(categoria.valor)
      })
    }

    if (seedTestDocumento.rateioEntreCategoriasPorOperacao) {
      const categorias = seedTestDocumento.categorias
      categorias.forEach((categoria, index) => {
        cy.log('Validar nome categoria')
        cy.get(locDocumentos.documento.categoriaSelecionada)
          .eq(index)
          .should(($el) => {
            expect($el).to.contain.text(categoria.nome)
          })

        cy.wait(1000)
      })
    }

    if (seedTestDocumento.tributacoes) {
      cy.log('Digitar modelo')
      cy.getVisible(locDocumentos.documento.modelo).clear()
        .type(seedTestDocumento.tributacoes.modelo)

      cy.log('Digitar serie')
      cy.getVisible(locDocumentos.documento.serie).clear()
        .realType(seedTestDocumento.tributacoes.serie)

      cy.log('Validar CFOP selecionado')
      cy.get(locDocumentos.documento.cfop)
        .should(($el) => {
          expect($el).to.contain.text(seedTestDocumento.tributacoes.cfop)
        })

      cy.log('Validar Base de Calculo - ICMS')
      cy.getVisible(locDocumentos.documento.baseCalculoIcms).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.baseCalculoIcms)
      })

      cy.log('Validar ICMS Credito - ICMS')
      cy.getVisible(locDocumentos.documento.icmsCredito).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.icmsCredito)
      })

      cy.log('Validar Isentas/Não Tributaveis - ICMS')
      cy.getVisible(locDocumentos.documento.isentasIcms).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.isentasIcms)
      })

      cy.log('Validar Outros - ICMS')
      cy.getVisible(locDocumentos.documento.outrosIcms).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.outrosIcms)
      })

      cy.log('Validar Base de Cálculo - ICMS ST')
      cy.getVisible(locDocumentos.documento.baseCalculoIcmsSt).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.baseCalculoIcmsSt)
      })

      cy.log('Validar ICMS Retido - ICMS ST')
      cy.getVisible(locDocumentos.documento.valorIcmsRetido).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.valorIcmsRetido)
      })

      cy.log('Validar Depesas Acessorias - ICMS ST')
      cy.getVisible(locDocumentos.documento.despesasAcessorias).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.despesasAcessorias)
      })

      cy.log('Validar Frete - ICMS ST')
      cy.getVisible(locDocumentos.documento.frete).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.frete)
      })

      cy.log('Validar Valor do IPI - IPI')
      cy.getVisible(locDocumentos.documento.valorDoIpi).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.valorDoIpi)
      })

      cy.log('Validar Isenta - IPI')
      cy.getVisible(locDocumentos.documento.isenta).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.isenta)
      })

      cy.log('Validar Outros - IPI')
      cy.getVisible(locDocumentos.documento.outros).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.tributacoes.outros)
      })

    }

    if (seedTestDocumento.anexo) {
      cy.get(locDocumentos.documento.anexarArquivo).selectFile('cypress/fixtures/financeiro/documentos/cadastro/arquivos/Exemplo-DANFE.png', { force: true })
      cy.getVisible(locDocumentos.documento.anexo).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.anexos)
      })
    }

    cy.log('salvar documento')
    cy.get(locDocumentos.documento.adicionar).click({ force: true })

    cy.wait('@criarDocumento')
    //cy.get(locDocumentos.documento.adicionar).should('not.exist')

    cy.getVisible(locatorTituloPagina).should(($el) => {
      expect($el).to.contain.text(tituloPagina)
    })
  }

  /**
   * Realiza pesquisa de documento na listagem de Documento
   * @param {*} seedTestDocumento
   */
  static pesquisar(seedTestDocumento) {
    cy.intercept('POST', '/api/financeiro/v1/Documento/Listagem').as('listagem')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Documentos')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        //cy.wait('@listagem', { timeout: 20000 })
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    })

    //cy.wait('@listagem')

    cy.clearLocalStorage('financeiro-documentos-filtros')


    if (seedTestDocumento.fazenda) {
      // selecionar fazenda
      cy.getVisible(locDocumentos.dashboard.filtroFazenda).click()
        .get(locDocumentos.dashboard.listaFazendas)
        .contains(seedTestDocumento.fazenda).click({ force: true })

      if (seedTestDocumento.empresa) {
        // selecionar empresa
        cy.getVisible(locDocumentos.dashboard.filtroEmpresa).click()
          .get(locDocumentos.dashboard.listaEmpresas)
          .contains(seedTestDocumento.empresa).click({ force: true })
      }
    }

    if (seedTestDocumento.numeroDocumento) {
      // input pesquisar
      cy.getVisible(locDocumentos.dashboard.pesquisarDocumento).clear()
        .type(`${seedTestDocumento.numeroDocumento}{enter}`)

    }

    // Verificar se o elemento de filtros existe e está visível
    cy.document().then((doc) => {
      const filtersElement = doc.querySelector('#root-view-documentos-documentos-cnx-page-filter-cnx-container-filters-div-cnx-container-filters')

      if (filtersElement && !filtersElement.hidden && filtersElement.offsetHeight > 0) {
        // Elemento de filtros existe e está visível
        cy.log('Os filtros já estão visíveis')
      } else {
        // Elemento de filtros não existe ou não está visível, clicar para abrir os filtros
        cy.log('Abrir filtros porque não estão visíveis')
        cy.getVisible(locDocumentos.dashboard.filtros).click()
      }

      //Limpar Filtros
      cy.get('#root-view-documentos-documentos-cnx-page-filter-cnx-container-filters-div-cnx-container-filters > .el-button').click({ force: true })
    })

    if (seedTestDocumento.dataInicio) {
      // filtrar por data
      cy.getVisible(locDocumentos.dashboard.filtroDataInicio).clear()
        .type(seedTestDocumento.dataInicio)

      cy.getVisible(locDocumentos.dashboard.filtroDataFinal).clear()
        .type(seedTestDocumento.dataFinal)

      cy.get(locDocumentos.dashboard.titulo).click()
    }

    if (seedTestDocumento.filtroPessoa) {
      // filtrar por pessoa
      cy.getVisible(locDocumentos.dashboard.filtroPessoa).click({ force: true })
        .contains(seedTestDocumento.filtroPessoa).click({ force: true })
    }

    if (seedTestDocumento.safra) {
      // filtrar por safra
      cy.getVisible(locDocumentos.dashboard.filtroSafra).click()
        .contains(seedTestDocumento.safra).click({ force: true })

      if (seedTestDocumento.ciclo) {
        // filtrar por ciclo
        cy.getVisible(locDocumentos.dashboard.filtroCiclo).click()
          .contains(seedTestDocumento.ciclo).click({ force: true })
      }
    }

    if (seedTestDocumento.filtroConferido) {
      // filtrar por conferido
      cy.getVisible(locDocumentos.dashboard.filtroConferido).click()
        .contains(seedTestDocumento.filtroConferido).click({ force: true })
    }

    if (seedTestDocumento.tag) {
      // Filtrar por tag
      cy.getVisible(locDocumentos.dashboard.filtroTags).click()
        .contains(seedTestDocumento.tag).click({ force: true })
    }


    // Espera pela requisição e armazena o corpo da resposta em seedTestDocumento.cardDocumento
    cy.wait('@listagem', { timeout: 15000 }).then((interception) => {

      if (seedTestDocumento.cardDocumento) {

        // Ordenar os documentos por data (dia, mês e ano), e depois por número do documento
        seedTestDocumento.cardDocumento = interception.response.body

        // Obtenha todos os documentos exibidos na página
        cy.get(locDocumentos.dashboard.cardDocumento).then((cards) => {
          // Crie um array com os documentos exibidos
          const documentosExibidos = [];
          cards.each((index, card) => {
            const documento = {
              numeroDocumento: Cypress.$(card).find(locDocumentos.dashboard.numeroDocumento).text(),
              categoriasDescricao: Cypress.$(card).find(locDocumentos.dashboard.categoriaDocumento).text(),
              operacao: Cypress.$(card).find(locDocumentos.dashboard.operacaoDocumento).text(),
              pessoa: Cypress.$(card).find(locDocumentos.dashboard.pessoaDocumento).text(),
              conferido: Cypress.$(card).find(locDocumentos.dashboard.conferido).text(),
              valor: Cypress.$(card).find(locDocumentos.dashboard.valorDocumento).text()
            };
            documentosExibidos.push(documento);
          });

          // Verifique se cada documento no JSON está presente na lista de documentos exibidos
          seedTestDocumento.cardDocumento.forEach((documentoEsperado) => {
            const documentoEncontrado = documentosExibidos.find(doc => doc.numeroDocumento === documentoEsperado.numeroDocumento);

            expect(documentoEncontrado).to.not.be.undefined;
            if (documentoEncontrado) {
              // Valide todos os campos do documento
              expect(documentoEncontrado.numeroDocumento).to.equal(documentoEsperado.numeroDocumento);
              expect(documentoEncontrado.categoriasDescricao).to.equal(documentoEsperado.categoriasDescricao);

              // Validação da operação com condição para equivalência
              if ((documentoEncontrado.operacao === 'Compensação a Receber' && documentoEsperado.operacao.descricao === 'Adiantamento a Pagar') ||
                (documentoEncontrado.operacao === 'Adiantamento a Pagar' && documentoEsperado.operacao.descricao === 'Compensação a Receber')) {
                expect(documentoEncontrado.operacao).to.be.oneOf(['Compensação a Receber', 'Adiantamento a Pagar']);
              } else {
                expect(documentoEncontrado.operacao).to.equal(documentoEsperado.operacao.descricao);
              }

              if (seedTestDocumento.filtroPessoa) {
                expect(documentoEncontrado.pessoa).to.equal(seedTestDocumento.filtroPessoa)
              } else {
                expect(documentoEncontrado.pessoa).to.equal(documentoEsperado.pessoa.descricao);
              }

              if (seedTestDocumento.filtroConferido == "Conferido: Sim") {
                expect(documentoEncontrado.conferido).to.equal("Sim");
              } else if (seedTestDocumento.filtroConferido == "Conferido: Não") {
                expect(documentoEncontrado.conferido).to.equal("Não");
              } else {
                // Validação do campo conferido com transformação
                const conferidoEsperado = documentoEsperado.conferido ? 'Sim' : 'Não';
                expect(documentoEncontrado.conferido).to.equal(conferidoEsperado);
              }

              const valorFormatado = formatarValorComoBRL(documentoEsperado.valor);
              expect(documentoEncontrado.valor).to.equal(valorFormatado);
            }
          });
        });
      }

      if (seedTestDocumento.semDocumento) {
        cy.getVisible(locDocumentos.dashboard.mensagemNenhumDocumento)
          .contains('Você ainda não possui nenhum documento cadastrado.')
      }
    })


  }

  /**
   * Valida os detalhes do documento
   * @param {*} seedTestDocumento
   */
  validarDetalhes(seedTestDocumento) {

    cy.intercept('GET', '/api/financeiro/v1/Documento/**')
      .as('detalhesDocumento')
    cy.intercept('POST', '/api/financeiro/v1/Documento/Listagem').as('listaDocumentos')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Documentos')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
        cy.wait('@listaDocumentos', { timeout: 20000 })
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    })

    //Buscar documento
    cy.getVisible(locDocumentos.dashboard.pesquisarDocumento).clear()
      .type(`${seedTestDocumento.numeroDocumento}{enter}`)

    cy.wait('@listaDocumentos', { timeout: 20000 })

    // Abrir documento
    cy.get(locDocumentos.dashboard.selecionarDocumento)
      .contains(seedTestDocumento.numeroDocumento).click({ force: true })

    cy.wait('@detalhesDocumento', { timeout: 20000 }).then((interception) => {
      // Extraindo o ID da URL da requisição
      const url = interception.request.url
      const id = url.split('/').pop() // Extrai o último segmento da URL, que é o ID

      // Fazendo log do ID capturado
      cy.log(`ID capturado: ${id}`)

      // Aqui você pode usar o ID conforme necessário no seu teste
      // Por exemplo, armazenando em um alias para reutilizar posteriormente
      cy.wrap(id).as('documentoID')
    })


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
        const text = $el.text().replace(/[^\d,]/g, '') // Remove tudo exceto dígitos e vírgulas
        expect(text).to.eq(seedTestDocumento.valorTotal.replace('.', ',')) // Compara com o seedTest, ajustando a formatação
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
      cy.log("Teste Parcela")
      const parcelas = seedTestDocumento.parcelas

      cy.get(locDocumentos.detalhesDocumento.tabelaParcelas).each(($row, index) => {
        // Para cada linha na tabela
        const parcela = parcelas[index]

        cy.wrap($row).within(() => {
          // Verifica a célula da parcela
          cy.get('.cell').eq(0).should('contain.text', parcela.parcela)


          // Verifica a célula do valor da parcela
          cy.get('.cell').eq(1).should(($el) => {
            // Remove o símbolo "R$" e espaços do texto da célula, além de qualquer outro caractere que não seja dígito ou vírgula
            const text = $el.text().replace('R$', '').trim().replace(/[^\d,]/g, '')
            // Converte o valor da parcela para string e ajusta a formatação para usar vírgula
            const valorParcelaFormatado = String(parcela.valorParcela).replace('.', ',').trim()
            // Compara o valor formatado com o texto da célula
            expect(text).to.equal(valorParcelaFormatado)
          })

          if (seedTestDocumento.vencimentoParcela) {
            // Verifica a célula do status da parcela
            cy.get('.cell').eq(2).should('contain.text', parcela.vencimentoParcela)
          }
          // Verifica a célula do status da parcela
          cy.get('.cell').eq(3).should('contain.text', parcela.statusParcela)

          // Verifica a célula do saldo da parcela
          cy.get('.cell').eq(4).should(($el) => {
            // Converte para string antes de substituir
            const text = $el.text().replace(/[^\d,]/g, '') // Remove tudo exceto dígitos e vírgulas
            expect(text).to.contain(String(parcela.saldoParcela).replace('.', ',')) // Converte para string e compara com o valor da parcela, ajustando a formatação
          })

        })
      })
    }

    // Validar tabela de rateio entre ciclos
    if (seedTestDocumento.ciclos) {
      const ciclos = seedTestDocumento.ciclos

      ciclos.forEach((ciclo) => {
        cy.get(locDocumentos.detalhesDocumento.tabelaRateioCiclos)
          .each(($row) => {
            cy.wrap($row).within(() => {
              // Verifica se a célula contém o nome do ciclo
              cy.get('.cell').eq(0).then(($el) => {
                const cellText = $el.text().trim()
                if (cellText === ciclo.nome) {
                  // Verifica a célula do valor do ciclo
                  cy.get('.cell').eq(1).should(($el) => {
                    const text = $el.text().replace(/[^\d,]/g, '') // Remove tudo exceto dígitos e vírgulas
                    expect(text).to.contain(String(ciclo.valor).replace('.', ',')) // Converte para string e compara com o valor do ciclo, ajustando a formatação
                  })
                }
              })
            })
          })
      })
    }

    // Validar tabela de rateio entre categorias
    if (seedTestDocumento.categorias) {
      const categorias = seedTestDocumento.categorias

      categorias.forEach((categoria) => {
        cy.get(locDocumentos.detalhesDocumento.tabelaRateioCategorias)
          .each(($row) => {
            cy.wrap($row).within(() => {
              // Verifica se a célula contém o nome da categoria
              cy.get('.cell').eq(0).then(($el) => {
                const cellText = $el.text().trim()
                if (cellText === categoria.nome) {
                  // Verifica a célula da porcentagem
                  cy.get('.cell').eq(1).should(($el) => {
                    const text = $el.text().trim() // Texto da célula
                    const expectedPercentage = categoria.porcentagem // Porcentagem esperada do seedTestDocumento

                    // Remover o símbolo de percentual (%) e converter para número
                    const displayedPercentage = parseFloat(text.replace(',', '.').replace('%', ''))

                    // Converter a porcentagem esperada para o mesmo formato
                    const expectedPercentageValue = parseFloat(expectedPercentage.replace(',', '.').replace('%', ''))

                    // Comparar utilizando uma margem de erro aceitável
                    expect(displayedPercentage).to.be.closeTo(expectedPercentageValue, 0.03) // Ajuste a margem de erro conforme necessário
                  })

                  // Verifica a célula do valor do rateio
                  cy.get('.cell').eq(2).should(($el) => {
                    const text = $el.text().replace(/[^\d,]/g, '') // Remove tudo exceto dígitos e vírgulas
                    expect(text).to.contain(String(categoria.valor).replace('.', ',')) // Converte para string e compara com o valor do rateio, ajustando a formatação
                  })
                }
              })
            })
          })
      })
    }

    // Validar anexos
    if (seedTestDocumento.anexos) {
      cy.getVisible(locDocumentos.detalhesDocumento.anexos).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.anexos)
      })
    } else {
      cy.get(locDocumentos.detalhesDocumento.anexos).should('not.exist')
    }


    //Voltar para lista de Documentos
    cy.getVisible(locDocumentos.detalhesDocumento.voltar).click({ force: true })
    cy.wait('@listaDocumentos', { timeout: 20000 })

    /* Deleta Registro Criado Para Evitar Acumulo de Registro
    cy.get('@documentoID').then((documentoID) => {
      cy.deleteRequest(`${Cypress.env('financeiro')}/Documento`, documentoID).then((responseDelete) => {
        expect(responseDelete.status).to.be.equal(200)
      })
    })

    cy.hideApiView()*/

  }

  /**
   * Realiza a edição de um documento
   * @param {*} seedTestFiltro
   * @param {*} seedTestEdicaoDocumento
   */
  editar(seedTestFiltro, seedTestEdicaoDocumento) {
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/ciclo-producao/v1/Ciclo/List?**`).as('cicloProducao')
    cy.intercept('GET', `${Cypress.env('daasUrl')}/api/atividades-agricolas/v1/Planejamento/Safra/ciclosRateio?**`).as('cicloRateio')
    cy.intercept('POST', '/api/financeiro/v1/Documento/Listagem').as('financeiro')
    cy.intercept('GET', '/api/financeiro/v1/Documento/**').as('detalhesDocumento')
    cy.intercept('GET', '/api/pessoa/v1/Pessoa/**').as('pessoa')

    const url = '/financeiro/documentos/listagem'
    const locatorTituloPagina = locDocumentos.dashboard.titulo
    const tituloPagina = 'Documentos'

    cy.log('Navegar para Documentos')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.wait('@financeiro')

    cy.log('Selecionar Fazenda')
    cy.getVisible(locDocumentos.dashboard.filtroFazenda).click()
      .get(locDocumentos.dashboard.listaFazendas)
      .contains(seedTestFiltro.fazenda).click()

    cy.log('Selecionar Empresa')
    cy.getVisible(locDocumentos.dashboard.filtroEmpresa).click()
      .get(locDocumentos.dashboard.listaEmpresas)
      .contains(seedTestFiltro.empresa).click()

    if (seedTestFiltro.numeroDocumento) {
      cy.log('Pesquisar por numero do documento')
      cy.getVisible(locDocumentos.dashboard.pesquisarDocumento).clear()
        .type(`${seedTestFiltro.numeroDocumento}{enter}`)
    }

    cy.wait('@financeiro')
    cy.wait(5000)

    cy.log('Abrir documento')
    cy.getVisible(locDocumentos.dashboard.selecionarDocumento).click()

    cy.wait('@detalhesDocumento')
    cy.wait(5000)

    cy.log('Abrir edicao de documento')
    cy.getVisible(locDocumentos.detalhesDocumento.botaoEditarDocumento).click()

    cy.wait('@detalhesDocumento')

    if (seedTestEdicaoDocumento.camposIndisponiveis) {
      cy.log('Validar campos desativados')

      cy.log('Validar operacao')
      cy.getVisible(locDocumentos.documento.operacao).should(($el) => {
        expect($el).to.have.class('disabled')
      })

      cy.log('Validar tipo do documento')
      cy.getVisible(locDocumentos.documento.tipoDocumento).should(($el) => {
        expect($el).to.have.class('disabled')
      })

      cy.log('Validar data de recebimento')
      cy.getVisible(locDocumentos.documento.dataRecebimentoInativa)
        .invoke('prop', 'disabled').should('be.true')

      cy.log('Validar data do documento')
      cy.getVisible(locDocumentos.documento.dataDocumentoInativa)
        .invoke('prop', 'disabled').should('be.true')

      cy.log('Validar pessoa')
      cy.getVisible(locDocumentos.documento.pessoa).should(($el) => {
        expect($el).to.have.class('disabled')
      })

      cy.log('Validar empresa')
      cy.getVisible(locDocumentos.documento.empresa).should(($el) => {
        expect($el).to.have.class('disabled')
      })

      cy.log('Validar ie da empresa')
      cy.getVisible(locDocumentos.documento.ieEmpresa).should(($el) => {
        expect($el).to.have.class('disabled')
      })

      cy.log('Validar valor total')
      cy.getVisible(locDocumentos.documento.valorTotalInativo)
        .invoke('prop', 'disabled').should('be.true')

      cy.log('Validar checkbox Foi Pago')
      cy.getVisible(locDocumentos.documento.foiPago)
        .invoke('prop', 'className').should('eq', 'el-checkbox is-disabled')

      cy.log('Validar forma de pagamento')
      cy.getVisible(locDocumentos.documento.formaDePagamento).should(($el) => {
        expect($el).to.have.class('disabled')
      })

      cy.log('Validar valor da parcela')
      cy.getVisible(locDocumentos.documento.valorParcela)
        .invoke('prop', 'disabled').should('be.true')

      cy.log('Validar data de vencimento da parcela')
      cy.getVisible(locDocumentos.documento.dataVencimentoInativo)
        .invoke('prop', 'disabled').should('be.true')

      cy.log('Validar categora')
      cy.getVisible(locDocumentos.documento.selecionarCategoria).should(($el) => {
        expect($el).to.have.class('disabled')
      })

      cy.log('Validar valor categoria')
      cy.getVisible(locDocumentos.documento.categoriaValor)
        .invoke('prop', 'disabled').should('be.true')
    }

    cy.intercept('GET', 'https://daas.dev.conexa.com.br/api/plano-contas/v1/ContaContabil/List?**').as('getContaContabil')

    if (seedTestEdicaoDocumento.operacao) {
      cy.log('Alterar operacao')
      cy.getVisible(locDocumentos.documento.operacao).click()
        .get(locDocumentos.documento.selecionarOperacao)
        .contains(seedTestEdicaoDocumento.operacao).click()
    }

    if (seedTestEdicaoDocumento.tipoDocumento) {
      cy.log('Validar tipo documento')

      cy.getVisible(locDocumentos.documento.tipoDocumentoSelecionado).should(($el) => {
        expect($el).to.contain.text(seedTestEdicaoDocumento.tipoDocumento)
      })
    }

    if (seedTestEdicaoDocumento.dedutivel) {
      cy.log('Alterar deducao')

      cy.getVisible(locDocumentos.documento.dedutivel)
        .contains(seedTestEdicaoDocumento.dedutivel).click()
    }

    if (seedTestEdicaoDocumento.numeroDocumento) {
      cy.log('Alterar numero do documento')

      cy.getVisible(locDocumentos.documento.numeroDocumento)
        .clear().type(seedTestEdicaoDocumento.numeroDocumento)
    }

    if (seedTestEdicaoDocumento.pessoa) {
      cy.log('Alterar pessoa')

      cy.getVisible(locDocumentos.documento.pessoa).click()
        .get(locDocumentos.documento.selecionarPessoa)
        .contains(seedTestEdicaoDocumento.pessoa).click()
    }

    if (seedTestEdicaoDocumento.fazenda) {
      cy.log('Alterar fazenda')

      cy.getVisible(locDocumentos.documento.fazenda).click()
        .get(locDocumentos.documento.selecionarFazenda)
        .contains(seedTestEdicaoDocumento.fazenda).click()
    }

    if (seedTestEdicaoDocumento.safra) {
      cy.log('Alterar safra')

      cy.getVisible(locDocumentos.documento.safra).click()
        .get(locDocumentos.documento.selecionarSafra)
        .contains(seedTestEdicaoDocumento.safra).click()
    }

    if (seedTestEdicaoDocumento.empresa) {
      cy.log('Alterar empresa')
      cy.getVisible(locDocumentos.documento.empresa).click()
        .get(locDocumentos.documento.selecionarEmpresa)
        .contains(seedTestEdicaoDocumento.empresa).click()

      cy.wait('@pessoa')

      cy.log('Validar IE da Empresa selecionada')
      cy.getVisible(locDocumentos.documento.ieEmpresaSelecionada).should(($el) => {
        expect($el).to.contain.text(seedTestEdicaoDocumento.ieEmpresa)
      })
    }

    if (seedTestEdicaoDocumento.ie) {
      cy.log('Validar IE da Empresa')

      cy.getVisible(locDocumentos.documento.ieEmpresa).should(($el) => {
        expect($el).to.contain.text(seedTestEdicaoDocumento.ie)
      })
    }

    if (seedTestEdicaoDocumento.tag) {
      cy.log('Alterar tags')

      cy.log('Remover tag')
      cy.getVisible(locDocumentos.documento.tags).click()
      cy.getVisible(locDocumentos.documento.removerTag).click()

      cy.log('Adicionar nova tag')
      cy.getVisible(locDocumentos.documento.tags).click()
      cy.getVisible(locDocumentos.documento.novaTag).click()
      cy.getVisible(locDocumentos.documento.nomeTag)
        .clear().type(seedTestEdicaoDocumento.tag)
      cy.getVisible(locDocumentos.documento.salvarTag).click()
    }

    if (seedTestEdicaoDocumento.observacao) {
      cy.log('Alterar observacao')

      cy.getVisible(locDocumentos.documento.observacao).clear()
        .type(seedTestEdicaoDocumento.observacao)
    }

    if (seedTestEdicaoDocumento.valorTotal) {
      if (seedTestEdicaoDocumento.moedaEstrangeira) {
        cy.log('Alterar valor negociado em moeda estrangeira')

        cy.log('Validar se check moeda estrangeira esta marcado')
        cy.get(locDocumentos.documento.checkMoedaEstrangeira).first().should(($el) => {
          expect($el).to.have.class('is-checked')
        })

        cy.log('Validar moeda estrangeira selecionada')
        cy.get(locDocumentos.documento.moedaSelecionada).contains(seedTestEdicaoDocumento.moeda)

        cy.log('Digitar total negociado moeda estrangeira')
        cy.get(locDocumentos.documento.inputValorNegociado).clear().type(seedTestEdicaoDocumento.valorTotalNegociado)

        cy.log('Digitar cotação moeda estrangeira')
        cy.get(locDocumentos.documento.inputCotacaoMoeda).clear().realType(seedTestEdicaoDocumento.cotacaoMoeda)

        cy.log('Validar valor total')
        cy.getVisible(locDocumentos.documento.valorTotal).should(($el) => {
          expect($el).to.contains.value(seedTestEdicaoDocumento.valorTotal)
        })
      } else {
        cy.log('Alterar valor total')

        cy.getVisible(locDocumentos.documento.valorTotal)
          .clear().type(seedTestEdicaoDocumento.valorTotal)
      }
    }

    if (seedTestEdicaoDocumento.jaPago) {
      cy.log('Se ja foi pago')

      cy.getVisible(locDocumentos.documento.foiPago).click()

      cy.log('Alterar conta bancaria')
      cy.getVisible(locDocumentos.documento.contaBancaria).click()
        .get(locDocumentos.documento.selecionarContaBancaria)
        .contains(seedTestEdicaoDocumento.contaBancaria).click()

      cy.log('Alterar conta destino')
      cy.getVisible(locDocumentos.documento.contaDestino).click()
        .get(locDocumentos.documento.selecionarContaDestino)
        .contains(seedTestEdicaoDocumento.contaDestino).click()
    }

    if (seedTestEdicaoDocumento.formaPagamento) {
      cy.log('Alterar forma de pagamento')

      cy.getVisible(locDocumentos.documento.formaDePagamento).click()
        .get(locDocumentos.documento.selecionarFormaPagamento)
        .contains(seedTestEdicaoDocumento.formaPagamento).click()
    }

    if (seedTestEdicaoDocumento.condicaoPagamento) {
      cy.log('Selecionar Condicao de pagamento')
      cy.getVisible(locDocumentos.documento.condicaoPagamento)
        .contains(seedTestEdicaoDocumento.condicaoPagamento).click()

      if (seedTestEdicaoDocumento.quantidadeParcela) {
        cy.log('Informar quantidade de parcelas')
        cy.getVisible(locDocumentos.documento.quantidadeParcela)
          .clear().type(seedTestEdicaoDocumento.quantidadeParcela)
      }

      if (seedTestEdicaoDocumento.valorFixo) {
        cy.log('Selecionar valor fixo')
        cy.getVisible(locDocumentos.documento.valorFixo).click()
      }
    }

    if (seedTestEdicaoDocumento.alterarValorRateioCiclos) {
      cy.log('Alterar rateio entre ciclos')

      cy.log('Selecionar rateio ciclo')
      cy.getVisible(locDocumentos.documento.rateioEntreCiclos).click()

      cy.wait(1000)

      // wait para aguardar busca dos ciclos do planejamento
      cy.wait('@cicloRateio')

      // timeout necessario para carregar os ciclos nos selects
      cy.wait('@cicloProducao')


      if (seedTestEdicaoDocumento.ciclos) {
        const ciclos = seedTestEdicaoDocumento.ciclos

        ciclos.forEach((ciclo, index) => {
          cy.log('nome do ciclo')
          cy.get(locDocumentos.documento.cicloSelecionado)
            .eq(index)
            .should(($el) => {
              expect($el).to.contains.text(ciclo.nome)
            })

          cy.log('valor do ciclo')
          cy.get(locDocumentos.documento.rateioCicloValor)
            .eq(index)
            .should(($el) => {
              expect($el).to.have.value(ciclo.valor)
            })
        })
      }
    }
    if (seedTestEdicaoDocumento.rateioEntreCategorias) {
      cy.log('Alterar rateio entre categorias')

      const categorias = seedTestEdicaoDocumento.categorias

      categorias.forEach((categoria, index) => {
        if (index >= 1) {
          cy.log('adicionar outra categoria')
          cy.get(locDocumentos.documento.adicionarCategoria)
            .should('exist').and('be.visible').click()
        }

        cy.log('nome categoria')
        cy.get(locDocumentos.documento.selecionarCategoria).eq(index)
          .should('exist').and('be.visible')
          .click().contains(categoria.nome).click()

        cy.log('valor categoria')
        cy.get(locDocumentos.documento.categoriaValor).eq(index)
          .should('exist').and('be.visible')
          .clear().type(categoria.valor)
      })
    }

    if (seedTestEdicaoDocumento.anexoExcluir) {
      cy.log('Excluir Anexo')
      cy.getVisible(locDocumentos.documento.excluirAnexo).click()
    }

    cy.log('Salvar alterações')
    cy.getVisible(locDocumentos.documento.adicionar).click()

    cy.wait(1000)

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

    cy.intercept('GET', '/api/financeiro/v1/Documento/**').as('detalhesDocumento')

    // Abrir documento
    cy.get(locDocumentos.dashboard.selecionarDocumento)
      .contains(seedTestDocumento.numeroDocumento)
      .parents(locDocumentos.dashboard.selecionarDocumento)
      .click({ force: true })

    cy.wait('@detalhesDocumento')

    if (seedTestDocumento.excluirInvalidado) {
      cy.getVisible(locDocumentos.detalhesDocumento.botaoRemoverDocumento)
        .find('button').should('have.disabled', 'true')
    }
    else {
      // Excluir documento
      cy.get(locDocumentos.detalhesDocumento.botaoRemoverDocumento)
        .click()

      // Confirmar exclusão
      cy.get(locDocumentos.detalhesDocumento.botaoSim)
        .should('exist').and('be.visible')
        .contains('Sim').click({ force: true })

      cy.get(locDocumentos.detalhesDocumento.mensagemSucesso).contains('Documento excluído com sucesso')
    }
  }

  /**
   * Método para conferir um documento
   * @param {*} seedTestDocumento 
   */
  conferir(seedTestDocumento) {
    // Pesquisar documento
    Documentos.pesquisar(seedTestDocumento)

    // Abrir documento
    cy.get(locDocumentos.dashboard.selecionarDocumento)
      .contains(seedTestDocumento.numeroDocumento)
      .parents(locDocumentos.dashboard.selecionarDocumento)
      .click({ force: true })

    // Conferir Documento
    cy.getVisible(locDocumentos.detalhesDocumento.botaoConferir).click()
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

  /**
   * Método para conferir um documento
   * @param {*} seedTestDocumento 
   */
  validarCamposEdicao(seedTestDocumento) {
    cy.intercept('POST', '/api/financeiro/v1/Documento/Listagem').as('listagemDocumentos')
    cy.intercept('GET', '/api/financeiro/v1/Documento/**').as('detalhesDocumento')

    cy.log('Navegar para Documentos')
    cy.navegarPara(url, locatorTituloPagina, tituloPagina).then(() => {
      cy.wait('@listagemDocumentos')
    })

    cy.log('Selecionar Fazenda')
    cy.getVisible(locDocumentos.dashboard.filtroFazenda).click()
      .contains(seedTestDocumento.fazenda).click()

    cy.log('Selecionar Empresa')
    cy.getVisible(locDocumentos.dashboard.filtroEmpresa).click()
      .contains(seedTestDocumento.empresa).click()

    cy.log('Abrir documento')
    cy.get(locDocumentos.dashboard.selecionarDocumento)
      .contains(seedTestDocumento.numeroDocumento).click()

    cy.wait('@detalhesDocumento')
    cy.wait(5000)

    cy.log('Abrir edicao de documento')
    cy.getVisible(locDocumentos.detalhesDocumento.botaoEditarDocumento).click()

    cy.wait('@detalhesDocumento')

    cy.log('Validar operacao selecionada')
    cy.getVisible(locDocumentos.documento.operacaoSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestDocumento.operacao)
    })

    cy.log('Validar tipo documento selecionado')
    cy.getVisible(locDocumentos.documento.tipoDocumentoSelecionado).should(($el) => {
      expect($el).to.contain.text(seedTestDocumento.tipoDocumento)
    })

    cy.log('Validar tipo deducao')
    cy.get(locDocumentos.documento.dedutivelSelecionado)
      .contains(seedTestDocumento.dedutivel).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.dedutivel)
      })

    cy.log('Validar numero do documento')
    cy.getVisible(locDocumentos.documento.numeroDocumento).should(($el) => {
      expect($el).to.have.value(seedTestDocumento.numeroDocumento)
    })

    cy.log('Validar pessoa')
    cy.getVisible(locDocumentos.documento.pessoaSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestDocumento.pessoa)
    })

    cy.log('Validar fazenda')
    cy.getVisible(locDocumentos.documento.fazendaSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestDocumento.fazenda)
    })

    cy.log('Validar safra')
    cy.getVisible(locDocumentos.documento.safraSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestDocumento.safra)
    })

    cy.log('Validar empresa')
    cy.getVisible(locDocumentos.documento.empresaSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestDocumento.empresa)
    })

    cy.log('Validar IE da empresa')
    cy.getVisible(locDocumentos.documento.ieEmpresaSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestDocumento.ieEmpresa)
    })

    cy.log('Validar TAG')
    cy.get(locDocumentos.documento.tagSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestDocumento.tag)
    })

    cy.log('Validar observacao')
    cy.get(locDocumentos.documento.observacao).should(($el) => {
      expect($el).to.have.value(seedTestDocumento.observacao)
    })

    if (seedTestDocumento.moedaEstrangeira) {
      cy.log('Validar moeda estrangeira')

      cy.log('Validar check moeda estrangeira')
      cy.get(locDocumentos.documento.checkMoedaEstrangeira).should(($el) => {
        expect($el).to.have.class('is-checked')
      })

      cy.log('Validar moeda estrangeira selecionada')
      cy.get(locDocumentos.documento.moedaSelecionada).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.moeda)
      })

      cy.log('Validar valor Total Negociado')
      cy.get(locDocumentos.documento.inputValorNegociado).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.valorTotalNegociado)
      })

      cy.log('Validar cotacao da Moeda')
      cy.get(locDocumentos.documento.inputCotacaoMoeda).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.cotacaoMoeda)
      })

      cy.log('Validar valor total')
      cy.get(locDocumentos.documento.valorTotal).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.valorTotal)
      })
    }
    else {
      cy.log('Validar valor total')
      cy.get(locDocumentos.documento.valorTotal).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.valorTotal)
      })
    }

    cy.log('Validar ja foi pago')
    cy.get(locDocumentos.documento.foiPago).should(($el) => {
      if (seedTestDocumento.foiPago === true) {
        expect($el).to.have.class('is-checked')
      }
      else {
        expect($el).to.not.have.class('is-checked')
      }
    })

    cy.log('Validar checkbox rateio entre ciclos')
    cy.get(locDocumentos.documento.rateioEntreCiclos).should(($el) => {
      if (seedTestDocumento.rateioEntreCiclos === true) {
        expect($el).to.have.class('is-checked')
      }
      else {
        expect($el).to.not.have.class('is-checked')
      }
    })

    cy.log('Validar forma de pagamento')
    cy.get(locDocumentos.documento.formaDePagamentoSelecionada).should(($el) => {
      expect($el).to.contain.text(seedTestDocumento.formaPagamento)
    })

    cy.log('Validar condicao de pagamento')
    cy.get(locDocumentos.documento.condicaoPagamentoSelecionada)
      .contains(seedTestDocumento.condicaoPagamento).parents('label').should(($el) => {
        expect($el).to.have.class('is-active')
      })

    if (seedTestDocumento.quantidadeParcela) {
      cy.get(locDocumentos.documento.quantidadeParcela).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.quantidadeParcela)
      })
    }

    if (!seedTestDocumento.moedaEstrangeira) {
      cy.log('Validar valor parcela')
      cy.get(locDocumentos.documento.valorParcela).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.valorParcela)
      })
    }

    if (seedTestDocumento.numeroBoleto) {
      cy.log('Validar numero boleto')
      cy.get(locDocumentos.documento.numeroBoleto).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.numeroBoleto)
      })
    }

    if (seedTestDocumento.rateioEntreCiclos) {
      cy.log('Validar rateio entre ciclos')
      const ciclos = seedTestDocumento.ciclos

      ciclos.forEach((ciclo) => {
        cy.log('Validar nome do ciclo')
        cy.get(locDocumentos.documento.cicloSelecionado).should(($el) => {
          expect($el).to.contain.text(ciclo.nome)
        })

        cy.log('Validar valor do ciclo')
        cy.get(locDocumentos.documento.rateioCicloValor).should(($el) => {
          expect($el).to.have.value(ciclo.valor)
        })
      })
    }

    if (seedTestDocumento.categorias) {
      cy.log('Validar rateio entre categorias')
      const categorias = seedTestDocumento.categorias

      categorias.forEach((categoria) => {
        cy.log('Validar nome categoria')
        cy.get(locDocumentos.documento.categoriaSelecionada).should(($el) => {
          expect($el).to.contain.text(categoria.nome)
        })

        cy.log('Validar valor categoria')
        cy.get(locDocumentos.documento.categoriaValor).should(($el) => {
          expect($el).to.have.value(categoria.valor)
        })
      })
    }
    if (seedTestDocumento.modelo) {
      cy.log('Validar modelo - Tributações')
      cy.get(locDocumentos.documento.modelo).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.modelo)
      })

      cy.log('Validar serie - Tributações')
      cy.get(locDocumentos.documento.serie).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.serie)
      })

      cy.log('Validar cfop - Tributações')
      cy.get(locDocumentos.documento.cfop).should(($el) => {
        expect($el).to.contain.text(seedTestDocumento.cfop)
      })

      cy.log('Validar base de calculo do ICMS - Tributações')
      cy.get(locDocumentos.documento.baseCalculoIcmsSt).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.baseCalculoIcmsSt)
      })

      cy.log('Validar valor do ICMS retido - Tributações')
      cy.get(locDocumentos.documento.valorIcmsRetido).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.valorIcmsRetido)
      })

      cy.log('Validar valor da despesa acessoria - Tributações')
      cy.get(locDocumentos.documento.despesasAcessorias).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.despesasAcessorias)
      })

      cy.log('Validar valor do frete - Tributações')
      cy.get(locDocumentos.documento.frete).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.frete)
      })

      cy.log('Validar valor do IPI - Tributações')
      cy.get(locDocumentos.documento.valorDoIpi).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.valorDoIpi)
      })

      cy.log('Validar isenta do IPI - Tributações')
      cy.get(locDocumentos.documento.isenta).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.isenta)
      })

      cy.log('Validar outros do IPI - Tributações')
      cy.get(locDocumentos.documento.outros).should(($el) => {
        expect($el).to.have.value(seedTestDocumento.outros)
      })
    }

    cy.log('Atualizar lançamento')
    cy.getVisible(locDocumentos.documento.adicionar).click({ force: true })
    cy.wait(2000)
    cy.get(locDocumentos.documento.adicionar).should('not.exist')

    cy.getVisible(locatorTituloPagina).should(($el) => {
      expect($el).to.contain.text(tituloPagina)
    })
  }
}

// Função para formatar o valor como moeda brasileira
function formatarValorComoBRL(valor) {
  return `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export default new Documentos()
