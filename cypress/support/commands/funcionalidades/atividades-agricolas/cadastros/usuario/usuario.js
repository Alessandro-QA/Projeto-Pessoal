/// <reference types="cypress" />

import locUsuario from '../../../../../locators/funcionalidades/atividades-agricolas/cadastros/locators-cadastro-usuario'

class Usuario {
  /**
   * Metodo para o cadastro de um Usuario
   * @param {*} seedTestUsuario
   */
  cadastro(seedTestUsuario) {
    const url = '/atividade-agricola/usuario'
    const locatorTituloPagina = locUsuario.dashboard.titulo
    const tituloPagina = 'Usuários e permissões'

    // Navegar para cadastro de Usuários
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // novo usuario
    cy.getVisible(locUsuario.dashboard.btnNovoUsuario).click()

    // selecionar opcao novo usuario
    cy.getVisible(locUsuario.cadastroUsuario.selectNovoUsuario).click()

    // clicar em convidar novo usuario
    cy.getVisible(locUsuario.cadastroUsuario.convidarNovoUsuario).click()

    // nome do usuario
    cy.getVisible(locUsuario.cadastroUsuario.nome).type(seedTestUsuario.nome)

    // data nascimento
    cy.getVisible(locUsuario.cadastroUsuario.dataNascimento).clear().type(seedTestUsuario.dataNascimento)

    // cpf
    cy.getVisible(locUsuario.cadastroUsuario.cpf).type(seedTestUsuario.cpf)

    // email
    cy.getVisible(locUsuario.cadastroUsuario.email).type(seedTestUsuario.email)

    // perfil de acesso
    cy.getVisible(locUsuario.cadastroUsuario.perfilAcesso).click()
      .findAllByText(seedTestUsuario.perfil).click()

    // botao salvar
    cy.getVisible(locUsuario.cadastroUsuario.nome).click()
    cy.getVisible(locUsuario.cadastroUsuario.btnSalvar).click()
    cy.get(locUsuario.cadastroUsuario.btnSalvar)
      .should('not.exist')

    // Validar dados do usuario cadastrado no card
    cy.get(locUsuario.dashboard.nomeUsuario)
      .and('contain', seedTestUsuario.nome)
    cy.get(locUsuario.dashboard.emailUsuario)
      .and('contain', seedTestUsuario.email)
  }

  /**
   * Metodo para realizar a pesquisa por um usuario
   * @param {*} seedTestUsuario
   */
  validarDashboard(seedTestUsuario) {
    const url = '/atividade-agricola/usuario'
    const locatorTituloPagina = locUsuario.dashboard.titulo
    const tituloPagina = 'Usuários e permissões'

    // Navegar para cadastro de Usuários
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    // input pesquisar
    cy.getVisible(locUsuario.dashboard.pesquisarUsuario)
      .clear().type(seedTestUsuario.nome)

    // card usuario
    cy.getVisible(locUsuario.dashboard.nomeUsuario)
      .and('contain', seedTestUsuario.nome)
  }
}

export default new Usuario()
