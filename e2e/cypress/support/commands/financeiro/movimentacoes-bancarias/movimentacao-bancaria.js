/// <reference types="cypress" />

import locMovimentacaoBancaria from '../../../locators/financeiro/movimentacoes-bancarias/locators-movimentacao-bancaria.js'

class MovimentacaoBancaria {

  /**
   * Metodo para realizar um pagamento ou recebimento
   * @param {*} seedTestMovimentacaoBancaria 
   */
  adicionarPagamentoRecebimento(seedTestMovimentacaoBancaria) {
    const url = '/financeiro/movimentacoes-bancarias/listagem'
    const locatorTituloPagina = locMovimentacaoBancaria.dashboard.titulo
    const tituloPagina = 'Movimentações bancárias'

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/ListFilter?**').as('contaBancaria')
    cy.intercept('POST', '/api/financeiro/v1/Movimentacao/Listagem').as('listaMovimentacoes')
    cy.intercept('POST', '/api/financeiro/v1/Movimentacao/Pagamento/Recebimento').as('movimentacao')

    // Navegar para Movimentação Bancaria
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Espera necessária para carrecar os componentes da tela
    cy.wait('@contaBancaria')

    // Abrir opções de movimentação
    cy.getVisible(locMovimentacaoBancaria.movimentacaoMenu.dropdownMovimentacoes).click()

    if (seedTestMovimentacaoBancaria.pagamento) {
      cy.getVisible(locMovimentacaoBancaria.movimentacaoMenu.pagamento).click()

      // Adicionar movimentação do tipo pagamento
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.titulo).should(($el) => {
        expect($el).to.contain.text('Adicionar pagamento')
      })
    }
    else if (seedTestMovimentacaoBancaria.recebimento) {
      cy.getVisible(locMovimentacaoBancaria.movimentacaoMenu.recebimento).click()

      // Adicionar movimentação do tipo recebimento
      cy.get(locMovimentacaoBancaria.movimentacoes.titulo).should(($el) => {
        expect($el).to.contain.text('Adicionar recebimento')
      })
    }
    else {
      cy.getVisible(locMovimentacaoBancaria.movimentacaoMenu.transferencia).click()

      // Adicionar movimentação do tipo transferência
      cy.get(locMovimentacaoBancaria.movimentacoes.titulo).should(($el) => {
        expect($el).to.contain.text('Adicionar transferência')
      })
    }

    // Selecionar empresa
    cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectEmpresa).click()
      .contains(seedTestMovimentacaoBancaria.empresa).click()

    cy.wait('@contaBancaria')

    // Inserir data da movimentação
    if (seedTestMovimentacaoBancaria.data) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.data).click()
        .clear().type(`${seedTestMovimentacaoBancaria.data}{enter}`)
    }

    // Inserir hora da transferência
    if (seedTestMovimentacaoBancaria.hora) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.horaTransferencia).click()
        .clear().type(`${seedTestMovimentacaoBancaria.hora}{enter}`)
    }

    // Selecionar conta bancaria da movimentação tipo pagamento/recebimento
    if (seedTestMovimentacaoBancaria.contaBancaria) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectContaBancaria).click()
        .contains(seedTestMovimentacaoBancaria.contaBancaria).click()
    }
    else {

      // Selecioanr conta bancaria de origem na movimentação do tipo transferência
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectContaOrigem).click()
        .contains(seedTestMovimentacaoBancaria.contaOrigem).click()

      // Selecioanr conta bancaria de destino na movimentação do tipo transferência
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectContaDestino).click()
        .contains(seedTestMovimentacaoBancaria.contaDestino).click()
    }

    // Selecionar empresa destino na movimentação do tipo transferência
    if (seedTestMovimentacaoBancaria.empresaDestino) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectDestino).click()
        .contains(seedTestMovimentacaoBancaria.empresaDestino).click()
    }

    // Inserir o valor da movimentação
    cy.getVisible(locMovimentacaoBancaria.movimentacoes.inputValor)
      .type(`{movetoend}${seedTestMovimentacaoBancaria.valorMovimentacao}{enter}`)

    // Inserir observação
    if (seedTestMovimentacaoBancaria.observacao) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.inputObservacao)
        .type(`${seedTestMovimentacaoBancaria.observacao}`)
    }

    // Selecionar categoria
    if (seedTestMovimentacaoBancaria.categorias) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.selectCategoria).click()
        .contains(seedTestMovimentacaoBancaria.categorias).click()
    }

    // Botão para adicionar movimentação do tipo transferência
    if (seedTestMovimentacaoBancaria.transferencia) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.adicionarTransferencia).click()
    }

    // Botão para adicionar movimentação do tipo pagamento
    if (seedTestMovimentacaoBancaria.pagamento) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.adicionarPagamento).click({ force: true })
    }

    // Botão para adicionar movimentação do tipo recebimento
    if (seedTestMovimentacaoBancaria.recebimento) {
      cy.getVisible(locMovimentacaoBancaria.movimentacoes.adicionarRecebimento).click()
    }

    cy.wait('@listaMovimentacoes')

  }

  /**
   * Validar Listagem de movimentações bancarias
   * @param {*} seedTestMovimentacaoBancaria
   */
  validarListagem(seedTestMovimentacaoBancaria) {
    const url = '/financeiro/movimentacoes-bancarias/listagem'
    const locatorTituloPagina = locMovimentacaoBancaria.dashboard.titulo
    const tituloPagina = 'Movimentações bancárias'

    cy.intercept('GET', '/api/financeiro/v1/ContaBancaria/ListFilter?**').as('contaBancaria')
    cy.intercept('POST', '/api/financeiro/v1/Movimentacao/Listagem').as('listaMovimentacoes')

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para Movimentação Bancaria')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)

        cy.wait('@contaBancaria')
      }
      cy.log(currentPath)
      cy.desabilitarPopUpNotificacao()
    });


    if (seedTestMovimentacaoBancaria.empresa === 'Selecionar Todas') {


      cy.get('[data-cy="select-filter-empresa"]', { timeout: 15000 }).click();

      // Verificar se o selecionar todas já está marcado, caso não ,ele clicar
      cy.get('button.add-new').then(($button) => {
        if ($button.text().includes('Selecionar todas')) {
          cy.wrap($button).click({ force: true });
        }
      });

    } else if (seedTestMovimentacaoBancaria.empresa === '') {
      // Se a empresa estiver vazia
      cy.log('Empresa vazia, mantém estado atual');
    } else {
      // Selecionar Empresa específica
      cy.get(locMovimentacaoBancaria.dashboard.filtroEmpresa)
        .click()
        .contains(seedTestMovimentacaoBancaria.empresa)
        .should('exist')
        .click({ force: true });
    }

    if (seedTestMovimentacaoBancaria.categorias) {
      // Pesquisar Movimentação
      cy.get(locMovimentacaoBancaria.dashboard.pesquisarMovimentacao)
        .clear().type(`${seedTestMovimentacaoBancaria.categorias}{enter}`)
    }

    // abrir filtros caso esteja fechado
    // Verificar se o elemento de filtros existe e está visível
    cy.document().then((doc) => {
      const filtersElement = doc.querySelector('#root-view-movimentacoes-movimentacoes-bancarias-cnx-page-filter-cnx-container-filters-div-cnx-container-filters');

      if (filtersElement && !filtersElement.hidden && filtersElement.offsetHeight > 0) {
        // Elemento de filtros existe e está visível
        cy.log('Os filtros já estão visíveis');
      } else {
        // Elemento de filtros não existe ou não está visível, clicar para abrir os filtros
        cy.log('Abrir filtros porque não estão visíveis');
        cy.get(locMovimentacaoBancaria.dashboard.abrirFiltro).click();
      }
    });

    if (seedTestMovimentacaoBancaria.contaBancaria) {
      cy.get(locMovimentacaoBancaria.dashboard.filtroContaBancaria).click()
      cy.get('.list__items li')
        .filter((index, element) => {
          return Cypress.$(element).text().trim() === seedTestMovimentacaoBancaria.contaBancaria;
        })
        .first() // Seleciona apenas a primeira correspondência, se houver mais de uma
        .click({ force: true });
    }

    // inserir a data de inicio e fim no filtro de período
    if (seedTestMovimentacaoBancaria.filtroDataInicio) {
      // inserir data de inicio
      cy.get(locMovimentacaoBancaria.dashboard.filtroDataInicio).click()
        .clear().type(`${seedTestMovimentacaoBancaria.filtroDataInicio}{enter}`)

      // inserir data fim
      cy.get(locMovimentacaoBancaria.dashboard.filtroDataFim).click()
        .clear().type(`${seedTestMovimentacaoBancaria.filtroDataFim}{enter}`)
    }

    // Espera necessária para carregar as movimentações pesquisadas
    cy.wait('@listaMovimentacoes').then((interception) => {
      const movimentacoes = interception.response.body.movimentacoes;

      // Agrupa as movimentações por data
      const movimentacoesAgrupadas = movimentacoes.reduce((acc, movimentacao) => {
        const data = movimentacao.data.split('T')[0];
        if (!acc[data]) {
          acc[data] = [];
        }
        acc[data].push(movimentacao);
        return acc;
      }, {});

      // Ordena os grupos por data (decrescente) e cada grupo por hora (crescente)
      const datasOrdenadas = Object.keys(movimentacoesAgrupadas).sort((a, b) => new Date(b) - new Date(a));
      datasOrdenadas.forEach(data => {
        movimentacoesAgrupadas[data].sort((a, b) => new Date(b.data) - new Date(a.data));
      });

      // Achata as movimentações ordenadas
      const movimentacoesOrdenadas = datasOrdenadas.flatMap(data => movimentacoesAgrupadas[data]);

      // Valida as movimentações ordenadas contra os cartões da UI
      cy.get('.card-timeline__item').each(($card, index) => {
        if (movimentacoesOrdenadas[index]) {
          const movimentacao = movimentacoesOrdenadas[index];
          cy.wrap($card).within(() => {
            cy.get('.el-card').within(() => {
              // Valida o tipo
              if (movimentacao.tipo === 2) {
                cy.get('[data-cy="span-tipo-descricao"]').should('have.text', 'Pagamento');
              } else if (movimentacao.tipo === 1) {
                cy.get('[data-cy="span-tipo-descricao"]').should('have.text', 'Recebimento');
              }

              // Valida a categoria
              if (movimentacao.categoria) {
                cy.get('[data-cy="span-categoria"]').should('have.text', movimentacao.categoria);
              }

              // Valida a conta bancária
              cy.get('.conta').should('contain.text', movimentacao.contaBancaria.descricao);

              // Valida o campo conferido
              cy.get('[data-cy="span-conferido"]').should('have.text', movimentacao.conferido ? 'Sim' : 'Não');

              // Valida o valor da movimentação
              const valorEsperado = `${movimentacao.valorMovimentacao}`;
              cy.get('.value').invoke('text').then((text) => {
                const valorExtraido = text.replace(/[^\d,-]/g, '');
                const valorFloat = parseFloat(valorExtraido.replace(',', '.'));
                const valorFloatEsperado = parseFloat(valorEsperado.replace(',', '.'));
                expect(valorFloat).to.equal(valorFloatEsperado);
              });
            });
          });
        }
      });
    });

    /*
        if (seedTestMovimentacaoBancaria.cardMovimentacao) {
          // Validar dados da movimentacao bancaria
          const movimentacao = seedTestMovimentacaoBancaria.cardMovimentacao
          movimentacao.forEach((movimentacao, index) => {
            cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoTipo).eq(index).should(($el) => {
              expect($el).to.contain.text(movimentacao.tipo)
            })
            if (movimentacao.categorias) {
              cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoCategoria).eq(index).should(($el) => {
                expect($el).to.contain.text(movimentacao.categorias)
              })
            }
            cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConta).eq(index).should(($el) => {
              expect($el).to.contain.text(movimentacao.conta)
            })
            cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConferido).eq(index).should(($el) => {
              expect($el).to.contain.text(movimentacao.conferido)
            })
            cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoValor).should(($el) => {
              expect($el).to.contain.text(movimentacao.valor)
            })
          })
        }
    
        if (seedTestMovimentacaoBancaria.saldoDoDia) {
          cy.getVisible(locMovimentacaoBancaria.dashboard.saldoDoDia).should(($el) => {
            expect($el).to.contain.text(seedTestMovimentacaoBancaria.saldoDoDia)
          })
        }*/
  }

  /**
   * Validar os detalhes da movimentacao bancaria
   * @param {*} seedTestMovimentacaoBancaria 
   */
  detalhes(seedTestMovimentacaoBancaria) {
    const url = '/financeiro/movimentacoes-bancarias/listagem'
    const locatorTituloPagina = locMovimentacaoBancaria.dashboard.titulo
    const tituloPagina = 'Movimentações bancárias'

    cy.intercept('POST', '/api/financeiro/v1/Movimentacao/Listagem**').as('listagemMovimentacao')
    // Navegar para Movimentação Bancaria
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Selecionar Empresa
    cy.getVisible(locMovimentacaoBancaria.dashboard.filtroEmpresa).click()
      .get(locMovimentacaoBancaria.dashboard.listaEmpresas)
      .contains(seedTestMovimentacaoBancaria.empresa).click()

    cy.wait('@listagemMovimentacao')

    // abrir filtros
    cy.getVisible(locMovimentacaoBancaria.dashboard.abrirFiltro).click()

    // inserir a data de inicio e fim no filtro de período
    if (seedTestMovimentacaoBancaria.filtroDataInicio) {
      // inserir data de inicio
      cy.getVisible(locMovimentacaoBancaria.dashboard.filtroDataInicio).click()
        .clear().type(`${seedTestMovimentacaoBancaria.filtroDataInicio}{enter}`)

      // inserir data fim
      cy.getVisible(locMovimentacaoBancaria.dashboard.filtroDataFim).click()
        .clear().type(`${seedTestMovimentacaoBancaria.filtroDataFim}{enter}`)
    }

    // Pesquisar movimentacao
    cy.getVisible(locMovimentacaoBancaria.dashboard.pesquisarMovimentacao)
      .type(`${seedTestMovimentacaoBancaria.tipo}{enter}`)

    cy.wait('@listagemMovimentacao')

    // Abrir detalhes da movimentação
    cy.getVisible(locMovimentacaoBancaria.dashboard.cardMovimentacaoCategoria)
      .click()

    // Validar data da movimentação
    cy.getVisible(locMovimentacaoBancaria.detalhes.dataMovimentacao).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.dataMovimentacao)
    })

    // Validar o tipo de movimentação (pagamento/recebimento)
    cy.getVisible(locMovimentacaoBancaria.detalhes.tipoMovimentacao).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.tipo)
    })

    // Validar conta bancaria
    cy.getVisible(locMovimentacaoBancaria.detalhes.contaBancaria).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.contaBancaria)
    })

    // Validar valor da movimentação
    cy.getVisible(locMovimentacaoBancaria.detalhes.valor).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.valor)
    })

    // Validar observação da movimentação
    cy.getVisible(locMovimentacaoBancaria.detalhes.observacao).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.observacao)
    })

    // Validar se o título foi conferido
    cy.getVisible(locMovimentacaoBancaria.detalhes.conferido).should(($el) => {
      expect($el).to.contain.text(seedTestMovimentacaoBancaria.conferido)
    })

    const categorias = seedTestMovimentacaoBancaria.categorias

    // Validar a quantidade de categorias
    cy.get(locMovimentacaoBancaria.detalhes.tipoCategoria)
      .should('have.length', categorias.length)

    categorias.forEach((categorias) => {
      // Validar o nome da categoria
      cy.get(locMovimentacaoBancaria.detalhes.tipoCategoria).should(($el) => {
        expect($el).to.contain.text(categorias.tipoCategoria)
      })

      // Validar o valor que a categoria captou
      cy.get(locMovimentacaoBancaria.detalhes.tipoCategoria).should(($el) => {
        expect($el).to.contain.text(categorias.valorCategoria)
      })
    })

    const titulos = seedTestMovimentacaoBancaria.titulos
    // Validar a quantidade de titulos
    cy.get(locMovimentacaoBancaria.detalhes.listTitulos)
      .should('have.length', titulos.length)
    titulos.forEach((titulos, index) => {
      // Validar o número do documento
      cy.get(locMovimentacaoBancaria.detalhes.listTitulos).eq(index).should(($el) => {
        expect($el).to.contain.text(titulos.documento)
      })

      // Validar o nome da pessoa
      cy.get(locMovimentacaoBancaria.detalhes.listTitulos).eq(index).should(($el) => {
        expect($el).to.contain.text(titulos.pessoa)
      })

      // Validar o nome da empresa
      cy.get(locMovimentacaoBancaria.detalhes.listTitulos).eq(index).should(($el) => {
        expect($el).to.contain.text(titulos.empresa)
      })

      // Validar o valor
      cy.get(locMovimentacaoBancaria.detalhes.listTitulos).eq(index).should(($el) => {
        expect($el).to.contain.text(titulos.valor)
      })

      // Validar juros
      cy.get(locMovimentacaoBancaria.detalhes.listTitulos).eq(index).should(($el) => {
        expect($el).to.contain.text(titulos.juros)
      })

      // Validar multas
      cy.get(locMovimentacaoBancaria.detalhes.listTitulos).eq(index).should(($el) => {
        expect($el).to.contain.text(titulos.multas)
      })

      // Validar descontos
      cy.get(locMovimentacaoBancaria.detalhes.listTitulos).eq(index).should(($el) => {
        expect($el).to.contain.text(titulos.descontos)
      })

      // Validar valor total
      cy.get(locMovimentacaoBancaria.detalhes.listTitulos).eq(index).should(($el) => {
        expect($el).to.contain.text(titulos.valorTotal)
      })
    })
  }

  /**
   * Metodo para excluir a movimentação bancaria
   * @param {*} seedTestMovimentacaoBancaria
   */
  excluir(seedTestMovimentacaoBancaria) {
    const url = '/financeiro/movimentacoes-bancarias/listagem'
    const locatorTituloPagina = locMovimentacaoBancaria.dashboard.titulo
    const tituloPagina = 'Movimentações bancárias'

    cy.intercept('POST', '/api/financeiro/v1/Movimentacao/Listagem**')
      .as('listagemMovimentacao')
    // Navegar para Movimentação Bancaria
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Selecionar Empresa
    cy.getVisible(locMovimentacaoBancaria.dashboard.filtroEmpresa).click()
      .get(locMovimentacaoBancaria.dashboard.listaEmpresas)
      .contains(seedTestMovimentacaoBancaria.empresa).click()

    cy.wait('@listagemMovimentacao')

    // abrir filtros
    cy.getVisible(locMovimentacaoBancaria.dashboard.abrirFiltro).click()

    // inserir a data de inicio e fim no filtro de período
    if (seedTestMovimentacaoBancaria.filtroDataInicio) {
      // inserir data de inicio
      cy.getVisible(locMovimentacaoBancaria.dashboard.filtroDataInicio).click()
        .clear().type(`${seedTestMovimentacaoBancaria.filtroDataInicio}{enter}`)

      // inserir data fim
      cy.getVisible(locMovimentacaoBancaria.dashboard.filtroDataFim).click()
        .clear().type(`${seedTestMovimentacaoBancaria.filtroDataFim}{enter}`)
    }

    // Pesquisar movimentação
    cy.getVisible(locMovimentacaoBancaria.dashboard.pesquisarMovimentacao)
      .type(`${seedTestMovimentacaoBancaria.categorias}{enter}`)

    cy.wait('@listagemMovimentacao')

    // Abrir detalhes da movimentação
    cy.getVisible(locMovimentacaoBancaria.dashboard.cardMovimentacaoCategoria)
      .contains(seedTestMovimentacaoBancaria.categorias).click()

    // Clicar no botão excluir
    cy.get(locMovimentacaoBancaria.detalhes.botaoExcluirMovimentacao)
      .should('exist').and('be.visible').click()

    // Validar mensagem de confirmação de exclusão
    cy.getVisible(locMovimentacaoBancaria.detalhes.mensagemConfirmacaoExclusao)
      .should('contain', 'Deseja excluir esta movimentação?')

    // Confirmar exclusão
    cy.getVisible(locMovimentacaoBancaria.detalhes.botaoConfirmarExclusao).click()

    // Validar mensagem de sucesso
    cy.getVisible(locMovimentacaoBancaria.detalhes.mensagemSucesso)
      .should('have.text', 'Movimentação excluída com sucesso')

    cy.getVisible(locMovimentacaoBancaria.dashboard.titulo)
      .should('exist')
  }

  /**
   * Metodo para validar a exclusão da movimentação bancaria
   * @param {*} seedTestMovimentacaoBancaria
   */
  validarExclusao(seedTestMovimentacaoBancaria) {
    const url = '/financeiro/movimentacoes-bancarias/listagem'
    const locatorTituloPagina = locMovimentacaoBancaria.dashboard.titulo
    const tituloPagina = 'Movimentações bancárias'

    // Navegar para Movimentação Bancaria
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // Selecionar todas as empresas
    cy.getVisible(locMovimentacaoBancaria.dashboard.filtroEmpresa).click()
      .contains('Selecionar todas').click()

    // Pesquisar movimentação
    cy.getVisible(locMovimentacaoBancaria.dashboard.pesquisarMovimentacao)
      .clear().type(`${seedTestMovimentacaoBancaria.tipo}{enter}`)

    // Validar dados da movimentacao bancaria
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoTipo)
      .should('not.exist')
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoCategoria)
      .should('not.exist')
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConta)
      .should('not.exist')
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoConferido)
      .should('not.exist')
    cy.get(locMovimentacaoBancaria.dashboard.cardMovimentacaoValor)
      .should('not.exist')

    cy.get(locMovimentacaoBancaria.dashboard.mensagemEmptyState).should(($el) => {
      expect($el).to.contain.text('Você ainda não possui nenhuma movimentação Financeira')
    })
  }
}

export default new MovimentacaoBancaria()
