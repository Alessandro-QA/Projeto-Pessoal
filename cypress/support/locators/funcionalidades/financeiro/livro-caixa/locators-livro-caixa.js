const locators = {
  dashboard: {
    titulo: '[data-cy=header-livro-caixa] > h1',
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
    filtroEmpresa: '[data-cy=select-filter-produtor]',
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

  editarLancamento: {
    tipoLancamento: '[data-cy=radio-tipo-lancamento]',
    tipoLancamentoAtivo: '[data-cy=radio-tipo-lancamento] .is-active',
    tipoDeducao: '[data-cy=radio-tipo-deducao] .is-active',
    tipoDeducaoAtivo: '[data-cy=radio-tipo-deducao] .is-active',
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
  }
}

export default locators
