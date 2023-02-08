const locators = {
  dashboard: {
    titulo: '[data-cy=header-cadastro-safra] > h1',
    nomeSafra: '[data-cy=nome-safra]',
    pesquisarSafra: '[data-cy=page-filter-safra] input',
    btnNovaSafra: '[data-cy=header-cadastro-safra] button'
  },

  cadastroSafra: {
    descricaoSafra: '[data-cy=input-descricao-safra]',
    periodoInicial: '[placeholder="Início"]',
    periodoFinal: '[placeholder="Fim"]',
    btnSalvar: '[data-cy=button-cancelar-salvar] > .el-button--primary'
  }
}

export default locators
