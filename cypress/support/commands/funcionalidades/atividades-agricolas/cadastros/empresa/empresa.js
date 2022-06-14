/// <reference types="cypress" />

import locEmpresa from '../../../../../locators/funcionalidades/atividades-agricolas/cadastros/locators-cadastro-empresa'

class Empresa {
  /**
   * Metodo para cadastro de uma Empresa
   * @param {} seedTestEmpresa
   */

  cadastro(seedTestEmpresa) {
    const url = '/atividade-agricola/empresa/listagem'
    const locatorTituloPagina = locEmpresa.dashboard.titulo
    const tituloPagina = 'Empresas'

    // Navegar para cadastro de Empresas
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // botao adicionar empresa
    cy.getVisible(locEmpresa.dashboard.adicionarEmpresa)
      .click()

    if (seedTestEmpresa.tipo === 'juridica') {
      // cnpj
      cy.getVisible(locEmpresa.cadastroEmpresa.cpfCnpj)
        .type(seedTestEmpresa.cpfCnpj)

      // razao social
      cy.getVisible(locEmpresa.cadastroEmpresa.nomeRazaoSocial)
        .type(seedTestEmpresa.nomeRazaoSocial)

      // inscricao estadual
      cy.getVisible(locEmpresa.cadastroEmpresa.inscricaoEstadual)
        .type(seedTestEmpresa.inscricaoEstadual)

      // nome fantasia
      cy.getVisible(locEmpresa.cadastroEmpresa.nomeFantasia)
        .type(seedTestEmpresa.nomeFantasia)
    } else if (seedTestEmpresa.tipo === 'fisica') {
      // seleciona o tipo fisica
      cy.get(locEmpresa.cadastroEmpresa.tipoEmpresa)
        .click()
        .contains('Física')
        .click()

      // cpf
      cy.getVisible(locEmpresa.cadastroEmpresa.cpfCnpj)
        .type(seedTestEmpresa.cpfCnpj)

      // nome
      cy.getVisible(locEmpresa.cadastroEmpresa.nomeRazaoSocial)
        .type(seedTestEmpresa.nomeRazaoSocial)
    }

    // email
    cy.getVisible(locEmpresa.cadastroEmpresa.email)
      .type(seedTestEmpresa.email)

    // telefone
    cy.getVisible(locEmpresa.cadastroEmpresa.telefone)
      .type(seedTestEmpresa.telefone)

    // cep
    cy.getVisible(locEmpresa.cadastroEmpresa.cep)
      .type(seedTestEmpresa.cep)

    // estado
    cy.get(locEmpresa.cadastroEmpresa.estado)
      .click()
      .contains(seedTestEmpresa.estado)
      .click()

    // municipio
    cy.get(locEmpresa.cadastroEmpresa.municipio)
      .click()
      .findAllByText(seedTestEmpresa.municipio)
      .click()

    // bairro
    cy.getVisible(locEmpresa.cadastroEmpresa.bairro)
      .type(seedTestEmpresa.bairro)

    // complemento
    cy.getVisible(locEmpresa.cadastroEmpresa.complemento)
      .type(seedTestEmpresa.complemento)

    // logradouro
    cy.getVisible(locEmpresa.cadastroEmpresa.logradouro)
      .type(seedTestEmpresa.logradouro)

    // numero
    cy.getVisible(locEmpresa.cadastroEmpresa.numero)
      .type(seedTestEmpresa.numero)

    // botao salvar
    cy.getVisible(locEmpresa.cadastroEmpresa.adicionar)
      .click()

    cy.get(locEmpresa.cadastroEmpresa.cancelar)
      .should('not.exist')

    // titulo da pagina
    cy.getVisible(locEmpresa.dashboard.titulo)
      .and('contain', 'Empresas')

    // Validar nome da empresa cadastrada
    cy.get(locEmpresa.dashboard.nomeEmpresa)
      .and('contain', seedTestEmpresa.nomeRazaoSocial)

    // Validar telefone da empresa cadastrada
    cy.get(locEmpresa.dashboard.telefoneEmpresa)
      .and('contain', seedTestEmpresa.telefone)

    // Validar cpf/cnpj da empresa cadastrada
    cy.get(locEmpresa.dashboard.cpfCnpjEmpresa)
      .and('contain', seedTestEmpresa.cpfCnpj)

    // Validar e-mail da empresa cadastrada
    cy.get(locEmpresa.dashboard.emailEmpresa)
      .and('contain', seedTestEmpresa.email)
  }

  /**
   * Metodo para validar a Dashboard de cadastro de empresa
   * @param {} seedTestEmpresa
   */
  validarDashboard(seedTestEmpresa) {
    const url = '/atividade-agricola/empresa/listagem'
    const locatorTituloPagina = locEmpresa.dashboard.titulo
    const tituloPagina = 'Empresas'

    // Navegar para cadastro de Empresas
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // input pesquisar
    cy.getVisible(locEmpresa.dashboard.pesquisarEmpresa)
      .clear()
      .type(seedTestEmpresa.nomeRazaoSocial, '{enter}')

    // Validar nome da empresa cadastrada
    cy.getVisible(locEmpresa.dashboard.nomeEmpresa)
      .and('contain', seedTestEmpresa.nomeRazaoSocial)

    // Validar telefone da empresa cadastrada
    cy.getVisible(locEmpresa.dashboard.telefoneEmpresa)
      .and('contain', seedTestEmpresa.telefone)

    // Validar cpf/cnpj da empresa cadastrada
    cy.getVisible(locEmpresa.dashboard.cpfCnpjEmpresa)
      .and('contain', seedTestEmpresa.cpfCnpj)

    // Validar e-mail da empresa cadastrada
    cy.getVisible(locEmpresa.dashboard.emailEmpresa)
      .and('contain', seedTestEmpresa.email)
  }
}

export default new Empresa()
