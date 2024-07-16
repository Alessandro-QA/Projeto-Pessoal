/// <reference types="cypress" />

import payLoadContaBancaria from '../../../../fixtures/financeiro/contas-bancarias/listagem/pay-load.json'
import seedTestListagem from '../../../../fixtures/financeiro/contas-bancarias/listagem/listagem.json'
import testDescription from './bdd-description/listagem.description.js'
import ContasBancaria from '../../../../support/commands/financeiro/contas-bancarias/contas-bancarias.js'
import Authenticate from '../../../../support/commands/login/login-logout.js'
import Utils from '../../../../support/utils/utils.js'

describe('Financeiro', { tags: '@financeiro' }, () => {
  var contaBancaria = Utils.getPayloadPorAmbiente(payLoadContaBancaria)


  describe('Contas Bancárias', { tags: '@contasBancarias' }, () => {
    context('Listagem de Conta Bancária', () => {


      it.skip('Deve listar contas bancárias - Pesquisando por Nome', () => {
        const listagem = { ...seedTestListagem.listagem }; // Cria uma cópia limpa
        listagem.filtroNome = "Conta Teste API";
        ContasBancaria.validarListagem(listagem);
      });

      it('Deve listar contas bancárias - Sem aplicar Filtros', () => {
        const listagem = { ...seedTestListagem.listagem }; // Cria uma cópia limpa
        listagem.filtros = false;
        ContasBancaria.validarListagem(listagem);
      });

      it('Deve listar contas bancárias - Filtrando por Tipo de Conta', () => {
        const listagem = { ...seedTestListagem.listagem }; // Cria uma cópia limpa
        listagem.filtroTipoDeConta = 'Corrente';
        ContasBancaria.validarListagem(listagem);
      });

      it('Deve listar contas bancárias - Filtrando por Empresa', () => {
        const listagem = { ...seedTestListagem.listagem }; // Cria uma cópia limpa
        listagem.filtroEmpresa = 'Empresa 2';
        ContasBancaria.validarListagem(listagem);
      });

      it('Deve listar contas bancárias - Filtrar por Status inativo', () => {
        const listagem = { ...seedTestListagem.listagem }; // Cria uma cópia limpa
        listagem.filtroSituacao = 'Inativa';
        cy.log('Filtrar por conta inativa');
        ContasBancaria.validarListagem(listagem);
      });
    })
  })
})
