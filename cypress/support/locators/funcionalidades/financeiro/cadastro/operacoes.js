const locators = {
  listagem: {
    titulo: '[data-test=operacao-header] .without-select',
    buttonAdicionar: '#root-cnx-header-title-el-button-nova-operacao',
    buttonAbrirFiltros: '.siagri-icon-filter-xsmall',
    inputPesquisar: '.search.el-input.el-input--suffix input',
    selectTipoOperacao: '[data-cy=select-tipo-operacao]',
    tipoOperacaoSelecionado: '[data-cy=select-tipo-operacao] .selected',
    selectFinalidadeOperacao: '[data-cy=select-finalidade-operacao]',
    finalidadeOperacaoSelecionado: '[data-cy=select-finalidade-operacao] .selected',
    selectMovimentaFinanceiro: '[data-cy=select-movimenta-financeiro]',
    movimentaFinanceiroSelecionado: '[data-cy=select-movimenta-financeiro] .selected',
    selectStatus: '[data-cy=select-status]',
    statusSelecionado: '[data-cy=select-status] .selected',
    buttonLimparFiltros: '.el-button.el-button--secondary.btn-secondary.font-family-and-size',
    tabbleOperacoes: '[data-cy=table-operacoes] tbody',
    operacao: '.el-table__row',
    codigoOperacao: '.el-table__row .el-table_1_column_1 .cell',
    nomeOperacao: '.el-table_1_column_2',
    tipoOperacao: '.el-table_1_column_3',
    finalidadeOperacao: '.el-table_1_column_4',
    movimentacaoOperacao: '.el-table_1_column_5',
    buttonEditar: '[data-cy=button-editar]',
    buttonDuplicar: '[data-cy=button-duplicar]',
    buttonTributaria: '[data-cy=button-matriz-tributaria]',
    buttonContabil: '[data-cy=button-matriz-contabil]'
  },

  cadastroEditar: {
    titulo: '.header-container',
    inputNome: '[data-cy=input-dados-nome-operacao]',
    selectTipoDocumento: '[data-cy=select-dados-tipo-documento]',
    inputHistorico: '.el-autocomplete.inline-input',
  }
}

export default locators
