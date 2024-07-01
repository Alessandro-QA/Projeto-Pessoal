const locators = {
  dashboard: {
    titulo: '[data-cy=header-ciclo-producao] > h1',
    adicionarCiclo: '#root-ciclo-listagem-cnx-header-title-el-button-adicionar-novo-ciclo',
    titleCardCiclo: '[data-cy=descricao-safra]',
    subtitleCardCiclo: '[data-cy=ano-safra]',
    periodoCardCiclo: '[data-cy=periodo-safra]',
    pesquisarCiclo: '[data-cy=page-filter-ciclo] input',
    filtroCiclo: 'button .siagri-icon-filter-xsmall',
    filtrarSafra: '[data-cy="select-filtro-safra"]',
    filtrarDataInicio: '[placeholder="Início"]',
    filtrarDataFim: '[placeholder="Fim"]',
    filtroSituacao: '[data-cy="select-filtro-situacao"]',
    iconeEdicao: '.siagri-icon-edit-xsmall'

  },

  ciclo: {
    safra: '[data-cy=select-safra]',
    cultura: '[data-cy=select-cultura]',
    nome: '[data-cy=input-nome-ciclo]',
    dataInicio: '[placeholder="Início"]',
    dataFim: '[placeholder="Fim"]',
    valorizacao: '[data-cy=input-valorizacao] > input',
    btnCancelar: '[data-cy=button-submit] > .el-button--secondary',
    btnAdicionar: '[data-cy=button-submit] > .el-button--primary',
    situacao: '[data-cy="radio-situacao"]',
    apagarData: '.el-range__close-icon',
  
  }
}

export default locators
