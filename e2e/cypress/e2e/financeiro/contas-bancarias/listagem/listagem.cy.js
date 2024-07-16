/// <reference types="cypress" />

import seedTestListagem from '../../../../fixtures/financeiro/contas-bancarias/listagem/listagem.json'
import testDescription from './bdd-description/listagem.description.js'
import ContasBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Listagem de Conta Bancária', () => {

      /* Esse teste vai pegar a requisição de GET na rota de listagem de contas bancárias
          Irá armazenar no seedTestListagem as contas bancárias gerais
          No teste filtramos esses dados pelo Cypress e validamos depois a filtragem do sistema se correspondente
      */

      it('Deve listar contas bancárias - Pesquisando por Nome', () => {
        
        cy.allureDescriptionHtml(testDescription.pesquisar).allureSeverity('normal')

        const listagem = { ...seedTestListagem.listagem }; // Cria uma cópia limpa
        listagem.filtroNome = "Conta Teste API";
        ContasBancaria.validarListagem(listagem);

      });

      it('Deve listar contas bancárias - Sem aplicar Filtros', () => {

        cy.allureDescriptionHtml(testDescription.semFiltro).allureSeverity('normal')

        const listagem = { ...seedTestListagem.listagem }; // Cria uma cópia limpa
        listagem.filtros = false;
        ContasBancaria.validarListagem(listagem);
      });

      it('Deve listar contas bancárias - Filtrando por Tipo de Conta', () => {

        cy.allureDescriptionHtml(testDescription.filtrarTipo).allureSeverity('normal')

        const listagem = { ...seedTestListagem.listagem }; // Cria uma cópia limpa
        listagem.filtroTipoDeConta = 'Corrente';
        ContasBancaria.validarListagem(listagem);
      });

      it('Deve listar contas bancárias - Filtrando por Empresa', () => {

        cy.allureDescriptionHtml(testDescription.filtrarEmpresa).allureSeverity('normal')

        const listagem = { ...seedTestListagem.listagem }; // Cria uma cópia limpa
        listagem.filtroEmpresa = 'Empresa 2';
        ContasBancaria.validarListagem(listagem);
      });

      it('Deve listar contas bancárias - Filtrar por Status inativo', () => {

        cy.allureDescriptionHtml(testDescription.filtrarSituacao).allureSeverity('normal')

        const listagem = { ...seedTestListagem.listagem };
        listagem.filtroSituacao = 'Inativo';
        cy.log('Filtrar por conta inativa');
        ContasBancaria.validarListagem(listagem);
      });
    })
  })
})
