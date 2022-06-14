/// <reference types="cypress" />

import locFazenda from '../../../../../locators/funcionalidades/atividades-agricolas/cadastros/locators-cadastro-fazenda'

class Fazenda {
  /**
   * Metodo para cadastrar uma fazenda
   * @param {} seedTestFazenda
   */
  cadastro(seedTestFazenda) {
    const url = '/atividade-agricola/fazendas'
    const locatorTituloPagina = locFazenda.dashboard.titulo
    const tituloPagina = 'Cadastro de fazendas'

    // Navegar para cadastro de Fazendas
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.getVisible(locFazenda.dashboard.btnNovaFazenda)
      .click()

    // nome da fazenda
    cy.getVisible(locFazenda.cadastroFazenda.nome)
      .type(seedTestFazenda.nome)

    // email
    cy.getVisible(locFazenda.cadastroFazenda.email)
      .type(seedTestFazenda.email)

    // telefone
    cy.getVisible(locFazenda.cadastroFazenda.telefone)
      .type(seedTestFazenda.telefone)

    // cep
    cy.getVisible(locFazenda.cadastroFazenda.cep)
      .type(seedTestFazenda.cep)

    // pais
    cy.get(locFazenda.cadastroFazenda.pais)
      .click()
      .findAllByText(seedTestFazenda.pais)
      .click()

    // estado
    cy.get(locFazenda.cadastroFazenda.estado)
      .click()
      .findAllByText(seedTestFazenda.estado)
      .click()

    // municipio
    cy.get(locFazenda.cadastroFazenda.municipio)
      .click()
      .findAllByText(seedTestFazenda.municipio)
      .click()

    // bairro
    cy.getVisible(locFazenda.cadastroFazenda.bairro)
      .type(seedTestFazenda.bairro)

    // numero
    cy.getVisible(locFazenda.cadastroFazenda.numero)
      .type(seedTestFazenda.numero)

    // complemento
    cy.getVisible(locFazenda.cadastroFazenda.complemento)
      .type(seedTestFazenda.complemento)

    // endereco
    cy.getVisible(locFazenda.cadastroFazenda.endereco)
      .type(seedTestFazenda.endereco)

    // botao salvar
    cy.getVisible(locFazenda.cadastroFazenda.btnSalvar)
      .click()

    cy.get(locFazenda.cadastroFazenda.btnSalvar)
      .should('not.exist')
  }

  /**
   * Metodo para cadastrar uma Matricula
   * @param {} seedTestMatriculaFazenda
   */
  matricula(seedTestMatriculaFazenda) {
    const url = '/atividade-agricola/fazendas'
    const locatorTituloPagina = locFazenda.dashboard.titulo
    const tituloPagina = 'Cadastro de fazendas'

    // navegar para cadastro de Fazendas
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.intercept('/api/fazenda/v1/fazenda/**').as('apiFazenda')

    // editar fazenda
    cy.get(locFazenda.dashboard.nomeFazenda)
      .contains(seedTestMatriculaFazenda.fazenda)
      .then(() => {
        cy.get(locFazenda.dashboard.editarFazenda)
          .first()
          .click()
      })

    cy.wait('@apiFazenda', { timeout: 4000 })

    // adicionar matricula
    cy.get(locFazenda.matricula.adicionarMatricula)
      .click()

    // nova matricula
    cy.get(locFazenda.matricula.novaMatricula).contains('Nova matrícula').click().then(() => {
      // descricao matricula
      cy.get(locFazenda.matricula.descricao)
        .type(seedTestMatriculaFazenda.tipoExploracao)

      // nome empresa
      cy.get(locFazenda.matricula.empresa)
        .click()
        .contains(seedTestMatriculaFazenda.empresa)
        .should('exist')
        .scrollIntoView()
        .click()

      // IE da empresa
      cy.get(locFazenda.matricula.ieEmpresa)
        .contains(seedTestMatriculaFazenda.ieEmpresa)

      // cafir
      cy.get(locFazenda.matricula.cafir)
        .clear()
        .type(seedTestMatriculaFazenda.cafir)

      // caepf
      cy.get(locFazenda.matricula.caepf)
        .clear()
        .type(seedTestMatriculaFazenda.caepf)

      // tipo de exploração
      cy.get(locFazenda.matricula.tipoExploracao)
        .click()
        .contains(seedTestMatriculaFazenda.tipoExploracao)
        .should('exist')
        .scrollIntoView()
        .click()
    })

    // salvar fazenda
    cy.get(locFazenda.matricula.btnSalvar)
      .should('exist')
      .scrollIntoView()
      .click()

    cy.get(locFazenda.matricula.btnSalvar)
      .should('not.exist')

    // titulo dashboard fazenda
    cy.get(locFazenda.dashboard.titulo)
      .should('be.visible')
      .contains('Cadastro de fazendas')
  }

  /**
   * Metodo para validar a Dashboard Cadastro de fazenda
   * @param {} seedTestFazenda
   */
  validarDashboard(seedTestFazenda) {
    const url = '/atividade-agricola/fazendas'
    const locatorTituloPagina = locFazenda.dashboard.titulo
    const tituloPagina = 'Cadastro de fazendas'

    // Navegar para cadastro de Fazendas
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // input pesquisar
    cy.getVisible(locFazenda.dashboard.pesquisarFazenda)
      .type(seedTestFazenda.nome)

    // card fazenda
    cy.getVisible(locFazenda.dashboard.nomeFazenda)
      .should('contain', seedTestFazenda.nome)
  }

  /**
   * Metodo para deletar uma matricula
   * @param {} seedTestMatriculaFazenda
   */
  deletarMatricula(seedTestMatriculaFazenda) {
    const url = '/atividade-agricola/fazendas'
    const locatorTituloPagina = locFazenda.dashboard.titulo
    const tituloPagina = 'Cadastro de fazendas'

    // Navegar para cadastro de Fazendas
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // editar fazenda
    cy.get(locFazenda.dashboard.nomeFazenda)
      .contains(seedTestMatriculaFazenda.fazenda)
      .then(() => {
        cy.get(locFazenda.dashboard.editarFazenda)
          .first()
          .click()
      })

    // remover matricula
    cy.get(locFazenda.matricula.btnAddRemoverMatricula)
      .first()
      .should('exist')
      .scrollIntoView()
      .click()

    // salvar fazenda
    cy.getVisible(locFazenda.matricula.btnSalvar)
      .click()

    cy.get(locFazenda.matricula.btnSalvar)
      .should('not.exist')

    // titulo dashboard fazenda
    cy.get(locFazenda.dashboard.titulo)
      .should('be.visible')
      .contains('Cadastro de fazendas')
  }
}

export default new Fazenda()
