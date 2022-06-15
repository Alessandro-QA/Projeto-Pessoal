/// <reference types="cypress" />

class SelecionarPessoa {
  /**
   * Metodo para selecionar o tipo de Pessoa
   * @param {} tipoPessoa
   * @param {} seletor
   */
  selecionarTipoPessoa(tipoPessoa, seletor) {
    const tipo = ['Cliente', 'Fornecedor', 'Produtor', 'Motorista', 'Op. Máquina', 'Mecânico', 'Usuário', 'Empresa', 'Armazém', 'Transportadora', 'Contador']

    let tLen = tipo.length
    for (let i = 0; i < tLen; i++) {
      if (tipo[i] === tipoPessoa) {
        cy.get(seletor).contains(tipo[i]).click()
      }
    }
  }
}

export default new SelecionarPessoa()
