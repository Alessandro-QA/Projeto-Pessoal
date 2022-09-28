const locators = {
  listagem: {
    titulo: '[data-test=operacao-header] .without-select',
    buttonAdicionar: '#root-cnx-header-title-el-button-nova-operacao',
    buttonAbrirFiltros: '.siagri-icon-filter-xsmall',
    inputPesquisar: '.search.el-input.el-input--suffix input',
    selectTipoOperacao: '[data-cy=select-tipo-operacao]',
    selectFinalidadeOperacao: '[data-cy=select-finalidade-operacao]',
    selectMovimentacaoFinanceira: '[data-cy=select-movimenta-financeiro]',
    selectStatus: '[data-cy=select-status]',
    buttonLimparFiltros: '.el-button.el-button--secondary.btn-secondary.font-family-and-size',
    tabbleOperacoes: '[data-cy=table-operacoes] tbody',
    operacao: '.el-table__row',
    codigoOperacao: '.el-table__row .el-table_1_column_1 .cell',
    nomeOperacao: '.el-table__row .el-table_1_column_2',
    tipoOperacao: '.el-table__row .el-table_1_column_3',
    finalidadeOperacao: '.el-table__row .el-table_1_column_4',
    movimentacaoOperacao: '.el-table__row .el-table_1_column_5',
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
