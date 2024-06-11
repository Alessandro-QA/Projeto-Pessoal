const locators = {
  dashboard: {
    titulo: '[data-cy=header-ciclo-producao] > h1',
    adicionarCiclo: '[data-cy=header-ciclo-producao] > button',
    titleCardCiclo: '[data-cy=descricao-safra]',
    pesquisarCiclo: '[data-cy=page-filter-ciclo] input'
  },

  ciclo: {
    safra: '[data-cy=select-safra]',
    cultura: '[data-cy=select-cultura]',
    nome: '[data-cy=input-nome-ciclo]',
    dataInicio: '[placeholder="Início"]',
    dataFim: '[placeholder="Fim"]',
    valorizacao: '[data-cy=input-valorizacao] > input',
    btnCancelar: '[data-cy=button-submit] > .el-button--secondary',
    btnAdicionar: '[data-cy=button-submit] > .el-button--primary'
  }
}

export default locators
