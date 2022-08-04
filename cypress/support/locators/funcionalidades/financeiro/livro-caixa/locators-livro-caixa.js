const locators = {
  dashboard: {
    titulo: '[data-cy=header-livro-caixa] > h1',
    filtroProdutor: '[data-cy=select-filter-produtores]',
    filtroAno: '[data-cy=datepicker-filter-ano] > div > input',
    cardComparativo: '[data-cy=card-comparativos] .progress-card.full',
    cardProdutores: '[data-cy=card-produtores]',
    cardProdutoresProdutor: '[data-cy=card-produtor-nome]',
    cardProdutoresCpf: '[data-cy=card-produtor-cpf]',
    cardProdutoresTotalEntrada: '[data-cy=card-produtor-total-entradas]',
    cardProdutoresTotalSaida: '[data-cy=card-produtor-total-saidas]',
    cardProdutoresSaldo: '[data-cy=card-produtor-saldo-atualizado]',
    cardProdutoresIRRF: '[data-cy=card-produtor-estimativa-irrf]'
  },
  lancamentos: {
    titulo: '[data-cy=header-lancamentos-livro-caixa] > h1',
    abrirLivroCaixa: '[data-cy=header-lancamentos-livro-caixa] .el-button.right-button.el-button--primary',
    abrirFiltros: '[data-cy=page-filter-lancamento-livro-caixa] .el-button--medium',
    adicionarLancamento: '[data-cy=button-adicionar-lancamento]',
    filtroProdutor: '[data-cy=select-filter-produtor]',
    filtroEmpresa: '[data-cy=select-filter-produtor]',
    filtroDataInicio: '[data-cy=datepicker-filter-data] [placeholder="Data Inicial"]',
    filtroDataFim: '[data-cy=datepicker-filter-data] [placeholder="Data Final"]',
    selectConta: '[data-cy=select-filter-conta-contabil]',
    selectFazenda: '[data-cy=select-filter-fazenda]',
    selectPessoa: '[data-cy=select-filter-pessoa]',
    selectTipo: '[data-cy=select-filter-tipo]',
    selectOrigem: '[data-cy=select-filter-origem]',
    selectStatus: '[data-cy=select-filter-status]',
    selectStatusDedutivel: '[data-cy=select-filter-dedutivel]',
    buttonExportarCSV: '[data-cy=button-exportar]',
    cardLivroCaixa: '.card-lancamento',
    cardLancamentosConta: '[data-cy=span-conta-contabil]',
    cardLancamentosHistorico: '[data-cy=span-historico]',
    cardLancamentosValor: '[data-cy=span-saldo]',
    cardLancamentosInfo: '[data-cy=span-info]',
    cardLateralSaldoAnterior: '[data-cy=info-card-saldo-anterior]',
    cardLateralSaldoAtual: '[data-cy=info-card-saldo-atual]',
    cardLateralDeducao: '[data-cy=info-card-deducao]',
    cardLateralEstimativaIRRF: '[data-cy=info-card-estimativa-irrf]'
  },
  adicionarLancamento: {
    tituloModal: '[data-cy=modal-lancamento] h1',
    tipoLancamento: '[data-cy=radio-tipo-lancamento]',
    tipoLancamentoAtivo: '[data-cy=radio-tipo-lancamento] .is-active',
    tipoDeducao: '[data-cy=radio-tipo-deducao]',
    fecharModalConta: '.el-dialog__wrapper .el-dialog__header .el-dialog__headerbtn',
    tipoDeducaoAtivo: '[data-cy=radio-tipo-deducao] .is-active',
    data: '[data-cy=date-picker-data-lancamento]',
    valor: '[data-cy=input-valor-lancamento] input',
    contaContabil: '[data-cy=select-conta-contabil]',
    fazenda: '[data-cy=select-fazenda]',
    historico: '[data-cy=input-historico]',
    tipoDocumento: '[data-cy=select-tipo-documento]',
    empresa: '[data-cy=select-empresa]',
    inscricaoEstadual: '[data-cy=select-inscricao-estadual]',
    contaBancaria: '[data-cy=select-conta-bancaria]',
    pessoa: '[data-cy=select-pessoa]',
    statusLancamento: '[data-cy=radio-status-lancamento]',
    statusLancamentoAtivo: '[data-cy=radio-status-lancamento] .is-active',
    cancelar: '[data-cy=modal-lancamento] .el-dialog__footer .el-button--secondary',
    salvar: '[data-cy=modal-lancamento] .el-dialog__footer .el-button--primary'
  },
  livroCaixa: {
    selectProdutor: '[data-cy=select-produtor-livro-caixa]',
    dataAno: '[data-cy=date-picker-ano-livro-caixa] > div > input',
    abrirFiltros: '[data-cy=page-filter-extrato-livro-caixa] .el-button',
    filtroStatus: '[data-cy=select-status-extrato-livro-caixa]',
    butaoExportar: '[data-cy=header-extrato-livro-caixa] .el-button--secondary',
    tabelaLivroCaixa: '[data-cy=table-extrato-livro-caixa] .el-table__body .el-table__row'
  }
}

export default locators
