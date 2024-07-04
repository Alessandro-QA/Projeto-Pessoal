/// <reference types="cypress" />

import locEmpresa from '../../../../locators/atividades-agricolas/cadastros/locators-cadastro-empresa.js'

class Empresa {
  /**
   * Metodo para cadastro de uma Empresa
   * @param {} seedTestEmpresa
   */

  cadastro(seedTestEmpresa) {
    const url = '/atividade-agricola/empresa/listagem'
    const locatorTituloPagina = locEmpresa.dashboard.titulo
    const tituloPagina = 'Empresas'
    let idEmpresa

    
    // Intercepta a requisição POST para a criação de empresa
    cy.intercept('POST', `${Cypress.env('baseUrl')}${Cypress.env('pessoa')}/Empresas`).as('postEmpresa');

    cy.location('pathname').then((currentPath) => {
      if (currentPath !== url) {
        cy.log('Navegar para cadastro de Empresas')
        cy.navegarPara(url, locatorTituloPagina, tituloPagina)
      }
      cy.log(currentPath)
    });

    cy.log('Clicar no botao adicionar empresa')
    cy.getVisible(locEmpresa.dashboard.adicionarEmpresa)
      .click()

    if (seedTestEmpresa.tipo === 'juridica') {
      cy.log('Preencher CNPJ')
      cy.getVisible(locEmpresa.cadastroEmpresa.cpfCnpj)
        .type(seedTestEmpresa.cpfCnpj)

      cy.log('Preencher razao social')
      cy.getVisible(locEmpresa.cadastroEmpresa.nomeRazaoSocial)
        .type(seedTestEmpresa.nomeRazaoSocial)

      if (seedTestEmpresa.inscricaoEstadual) {
        cy.log('Preencher inscricao estadual')
        cy.getVisible(locEmpresa.cadastroEmpresa.inscricaoEstadual)
          .type(seedTestEmpresa.inscricaoEstadual)
      } else {
        cy.getVisible(locEmpresa.cadastroEmpresa.checkBoxIsento).click()
      }

      cy.log(' Preencher nome fantasia')
      cy.getVisible(locEmpresa.cadastroEmpresa.nomeFantasia)
        .type(seedTestEmpresa.nomeFantasia)

    } else if (seedTestEmpresa.tipo === 'fisica') {
      cy.log('Selecionar tipo fisica')
      cy.get(locEmpresa.cadastroEmpresa.tipoEmpresa)
        .click().contains('Física').click()

      cy.log('Preencher CPF')
      cy.getVisible(locEmpresa.cadastroEmpresa.cpfCnpj)
        .type(seedTestEmpresa.cpfCnpj)

      cy.log('Preencher nome')
      cy.getVisible(locEmpresa.cadastroEmpresa.nomeRazaoSocial)
        .type(seedTestEmpresa.nomeRazaoSocial)

      cy.log('Selecionar tipo apuração - livro caixa')
      cy.getVisible(locEmpresa.cadastroEmpresa.selectTipoApuracao).click()
        .contains(seedTestEmpresa.tipoApuracao).click()

      if (seedTestEmpresa.inscricaoEstadual) {
        cy.log('Preencher inscricao estadual')
        cy.getVisible(locEmpresa.cadastroEmpresa.buttonAddInscricaoEstadual)
          .click()
        cy.getVisible(locEmpresa.cadastroEmpresa.iconExpandirCadastroIe)
          .click()

        cy.log('Preencher inscrição estadual')
        cy.getVisible(locEmpresa.cadastroEmpresa.inputInscricaoEstadual)
          .type(seedTestEmpresa.inscricaoEstadual)

        cy.log('Preencher descricao da IE')
        cy.getVisible(locEmpresa.cadastroEmpresa.inputDescricaoIe)
          .type(seedTestEmpresa.descricaoIe)

        cy.log('Preencher CEP da IE')
        cy.getVisible(locEmpresa.cadastroEmpresa.inputCepIe)
          .type(seedTestEmpresa.cepIe)

        cy.log('Preencher pais')
        cy.get(locEmpresa.cadastroEmpresa.selectPais)
          .click().contains(seedTestEmpresa.pais).click()

        cy.log('Preencher estado')
        cy.get(locEmpresa.cadastroEmpresa.selectEstadoIe)
          .click().contains(seedTestEmpresa.estadoIe).click()

        cy.log('Preencher municipio')
        cy.get(locEmpresa.cadastroEmpresa.selectMunicipioIe)
          .click().findAllByText(seedTestEmpresa.municipioIe).click()

        cy.log('Preencher bairro')
        cy.getVisible(locEmpresa.cadastroEmpresa.inputBairroIe)
          .type(seedTestEmpresa.bairroIe)

        cy.log('Preencher complemento')
        cy.getVisible(locEmpresa.cadastroEmpresa.inputComplementoIe)
          .type(seedTestEmpresa.complementoIe)

        cy.log('Preencher logradouro')
        cy.getVisible(locEmpresa.cadastroEmpresa.inputLogradouroIe)
          .type(seedTestEmpresa.logradouroIe)

        cy.log('Preencher numero')
        cy.getVisible(locEmpresa.cadastroEmpresa.inputNumeroIe)
          .type(seedTestEmpresa.numeroIe)

        if (seedTestEmpresa.statusIe === 'Inativo') {
          cy.log('Inativar Inscrição Estadual')
          cy.get(locEmpresa.cadastroEmpresa.radioStatusIe)
            .contains(seedTestEmpresa.statusIe).click()
        }
      }
    }

    cy.log('Preencher email')
    cy.getVisible(locEmpresa.cadastroEmpresa.email)
      .type(seedTestEmpresa.email)

    cy.log('Preencher telefone')
    cy.getVisible(locEmpresa.cadastroEmpresa.telefone)
      .type(seedTestEmpresa.telefone)

    cy.log('Preencher cep')
    cy.getVisible(locEmpresa.cadastroEmpresa.cep)
      .type(seedTestEmpresa.cep)

    cy.log('Preencher pais')
    cy.get(locEmpresa.cadastroEmpresa.pais).first()
      .click().contains(seedTestEmpresa.pais).click()

    cy.log('Preencher estado')
    cy.get(locEmpresa.cadastroEmpresa.estado)
      .click().contains(seedTestEmpresa.estado).click()

    cy.log('Preencher municipio')
    cy.get(locEmpresa.cadastroEmpresa.municipio)
      .click().findAllByText(seedTestEmpresa.municipio).click()

    cy.log('Preencher bairro')
    cy.getVisible(locEmpresa.cadastroEmpresa.bairro)
      .type(seedTestEmpresa.bairro)

    cy.log('Preencher complemento')
    cy.getVisible(locEmpresa.cadastroEmpresa.complemento)
      .type(seedTestEmpresa.complemento)

    cy.log('Preencher logradouro')
    cy.getVisible(locEmpresa.cadastroEmpresa.logradouro)
      .type(seedTestEmpresa.logradouro)

    cy.log('Preencher numero')
    cy.getVisible(locEmpresa.cadastroEmpresa.numero)
      .type(seedTestEmpresa.numero)

    cy.log('Clicar no botao salvar')
    cy.getVisible(locEmpresa.cadastroEmpresa.adicionar)
      .click()

    // Aguarda até que a requisição POST seja completada
    cy.wait('@postEmpresa').then(interception => {
      // Verifica se a requisição retornou com sucesso (status 200)
      expect(interception.response.statusCode).to.eq(200);

      // Captura o response da requisição POST
      const responseBody = interception.response.body;
      cy.log(responseBody)
      cy.log(responseBody.data.id)
      idEmpresa = responseBody.data.id

      // Usa `cy.wrap` para armazenar o valor da variável fora do wait
      cy.wrap(idEmpresa).as('idEmpresa');
      
      // Oculta o #api-view para continuar na página Atual
      cy.hideApiView();

    });

    cy.log(idEmpresa)
    cy.log('Mensagem de sucesso')
    cy.get(locEmpresa.cadastroEmpresa.msgSucesso, { timeout: 30000 }).should(($el) => {
      expect($el).to.have.text('Empresa salva com sucesso')
    })

    cy.get(locEmpresa.cadastroEmpresa.cancelar)
      .should('not.exist')

    cy.get(locEmpresa.dashboard.cardEmpresa).contains(seedTestEmpresa.nomeRazaoSocial)
      .parents(locEmpresa.dashboard.cardEmpresa).within(() => {
        cy.log('Validar nome da empresa cadastrada')
        cy.getVisible(locEmpresa.dashboard.nomeEmpresa)
          .and('contain', seedTestEmpresa.nomeRazaoSocial)

        cy.log('Validar telefone da empresa cadastrada')
        cy.getVisible(locEmpresa.dashboard.telefoneEmpresa)
          .and('contain', seedTestEmpresa.telefone)

        cy.log('Validar cpf/cnpj da empresa cadastrada')
        cy.getVisible(locEmpresa.dashboard.cpfCnpjEmpresa)
          .and('contain', seedTestEmpresa.cpfCnpj)

        cy.log('Validar e-mail da empresa cadastrada')
        cy.getVisible(locEmpresa.dashboard.emailEmpresa)
          .and('contain', seedTestEmpresa.email)
      })

    // Deleta Registro Criado Para Evitar Acumulo de Registro
    cy.get('@idEmpresa').then((idEmpresa) => {
      cy.deleteRequest(`${Cypress.env('baseUrl')}${Cypress.env('pessoa')}/Pessoa/`, idEmpresa).then((responseDelete) => {
        expect(responseDelete.status).to.be.equal(200);
      });
    });

  }
}

export default new Empresa()
