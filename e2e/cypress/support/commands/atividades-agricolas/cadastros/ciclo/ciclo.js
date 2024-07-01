/// <reference types="cypress" />

const locCiclo = require('../../../../locators/atividades-agricolas/cadastros/locators-cadastro-ciclo.js');

class Ciclo {
  /**
   * Método para cadastrar um novo ciclo
   * @param {} seedTestCiclo
   */
  cadastrar(seedTestCiclo) {

    // Intercepta a requisição POST para a URL específica
    cy.intercept('POST', `${Cypress.env('daasUrl')}${Cypress.env('cicloProducao')}/Ciclo`).as('postCiclo');
    const url = '/atividade-agricola/ciclo'
    const locatorTituloPagina = locCiclo.dashboard.titulo
    const tituloPagina = 'Cadastro de ciclos de produção'
    let randomNumber
    let idCiclo

    // Navegar para cadastro de Ciclos
    cy.navegarPara(url, locatorTituloPagina, tituloPagina)

    cy.desabilitarPopUpNotificacao()

    cy.getVisible(locCiclo.dashboard.adicionarCiclo).click()

    // Selecionar safra
    cy.getVisible(locCiclo.ciclo.safra).click()
      .type(seedTestCiclo.safra)
      .contains(seedTestCiclo.safra).click()

    // Selecionar cultura
    cy.getVisible(locCiclo.ciclo.cultura).click()
      .contains(seedTestCiclo.cultura).click()

    // Gerar um novo número aleatório para variar o nome das safras
    randomNumber = Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
    seedTestCiclo.nomeSafra = seedTestCiclo.nomeSafra + randomNumber.toString();

    // nome da safra
    cy.getVisible(locCiclo.ciclo.nome).clear().type(seedTestCiclo.nomeSafra)

    // valorizacao
    cy.getVisible(locCiclo.ciclo.valorizacao).clear().type(seedTestCiclo.valorizacao)

    // botao salvar
    cy.getVisible(locCiclo.ciclo.btnAdicionar).click()

    // Aguarda até que a requisição POST seja completada
    cy.wait('@postCiclo').then(interception => {
      // Verifica se a requisição retornou com sucesso (status 200)
      expect(interception.response.statusCode).to.eq(200);

      // Captura o response da requisição POST
      const responseBody = interception.response.body;
      idCiclo = responseBody.data.id

      // Deleta Registro Criado Para Evitar Acumulo de Registro
      cy.deleteRequest(`${Cypress.env('daasUrl')}${Cypress.env('cicloProducao')}/Ciclo`, idCiclo).then((responseDelete) => {
        expect(responseDelete.status).to.be.equal(200);
      });

      // Oculta o #api-view para continuar na página Atual
      cy.hideApiView();

    });

  }

  /**
   * Metodo para realizar a pesquisa de um ciclo
   * @param {} seedTestCiclo
   */
  validarBusca(seedTestCiclo) {

    cy.desabilitarPopUpNotificacao()

    seedTestCiclo.nomeSafra = "Safra - "
    // input pesquisar
    cy.getVisible(locCiclo.dashboard.pesquisarCiclo).clear().type(seedTestCiclo.nomeSafra)

    // card safra
    cy.get(locCiclo.dashboard.titleCardCiclo).should('contain', seedTestCiclo.nomeSafra);

  }

  validarFiltroSafra(seedTestCiclo) {

    // Abrir filtro
    cy.get(locCiclo.dashboard.filtroCiclo).parent().click();

    //Limpar Filtros
    cy.contains('button', 'Limpar filtro').click();

    //Selecionar Safra
    cy.getVisible(locCiclo.dashboard.filtrarSafra).click()
      .type(seedTestCiclo.safra)
      .contains(seedTestCiclo.safra).click()

    // card safra
    cy.get(locCiclo.dashboard.subtitleCardCiclo).should('contain', seedTestCiclo.safra);

  }

  validarFiltroData(seedTestCiclo) {

    cy.contains('button', 'Limpar filtro').click();

    //Selecionar Data Inicial
    cy.getVisible(locCiclo.dashboard.filtrarDataInicio).click()
      .type('01/08/2024')

    //Selecionar Data Final
    cy.getVisible(locCiclo.dashboard.filtrarDataFim).click()
      .type('31/07/2025{enter}')

    // card safra
    cy.get(locCiclo.dashboard.periodoCardCiclo).should('contain', '01/08/2024 a 31/07/2025');

  }
  validarInativos(seedTestCiclo) {

    // Rola a página para o topo
    cy.window().scrollTo('top');

    cy.contains('button', 'Limpar filtro').click();

    //Selecionar Inativo
    cy.get(locCiclo.dashboard.filtroSituacao).click()
      .contains('Inativo').click()

    //Selecionar Edição de Ciclo para verificar inatividade
    cy.get(locCiclo.dashboard.iconeEdicao).first().click();

    // Captura os 2 botões da Situação / Verifica se o da direita('Inativo') está selecionado
    cy.getVisible(locCiclo.ciclo.situacao)
      .find('label:nth-child(2)')
      .should('have.class', 'is-active');

  }

  editarCiclo(seedTestCiclo) {

    // Intercepta a requisição PUT para edição de Ciclo
    cy.intercept('PUT', `${Cypress.env('daasUrl')}${Cypress.env('cicloProducao')}/Ciclo`).as('putCiclo');

    // Gerar um novo número aleatório para variar o nome das safras
    const randomNumber = Math.floor(Math.random() * 100000); // Gera um número aleatório entre 0 e 9999
    seedTestCiclo.valorizacao = randomNumber;

    // valorizacao
    cy.getVisible(locCiclo.ciclo.valorizacao).clear().type(seedTestCiclo.valorizacao)

    // botao salvar
    cy.getVisible(locCiclo.ciclo.btnAdicionar).click()

    // Aguarda até que a requisição POST seja completada
    cy.wait('@putCiclo').then(interception => {
      // Verifica se a requisição retornou com sucesso (status 200)
      expect(interception.response.statusCode).to.eq(200);

      // Captura o response da requisição POST
      const responseBody = interception.response.body;
      expect(responseBody.data.expectativaValor).to.eq(seedTestCiclo.valorizacao / 100);

    });

  }

  camposObrigatoriosCiclo(seedTestCiclo) {

    cy.getVisible(locCiclo.dashboard.adicionarCiclo).click()

    //cy.get(locCiclo.ciclo.dataInicio).clear()
    //cy.get(locCiclo.ciclo.dataFim).clear()

    cy.get(locCiclo.ciclo.apagarData).click()

    // botao salvar
    cy.get(locCiclo.ciclo.btnAdicionar).click()

    // Valida de apresentou mensagem de erro para os 5 campos
    cy.get('.el-form-item__error')
      .filter(':visible') // Filtra apenas os elementos visíveis
      .should('have.length', 5); // Verifica se há exatamente 5 elementos visíveis

    // botao cancelar
    cy.get(locCiclo.ciclo.btnCancelar).click()

  }

}

export default new Ciclo()

