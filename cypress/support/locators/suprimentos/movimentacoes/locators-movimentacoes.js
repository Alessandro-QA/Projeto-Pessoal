const locators = {
  dashboard: {
    titulo: '[data-cy=header-movimentacoes]',
    botaoEntrada: '[data-cy=button-entrada]',
    botaoSaida: '[data-cy=button-saida]',
    botaoTransferencia: '[data-cy=button-transferencia]',
    pesquisar: '[data-cy=page-filter-movimentacoes] .input',
    filtroFazenda: '[data-cy=select-fazenda]',
    filtroUnidadeArmazenamento: '[data-cy=select-unidade-armazenamento]',
    filtroOrigem: '[data-cy=select-origem]',
    filtroTipo: '[data-cy=select-tipo-origem]',
    filtroData: '[data-cy=date-picker-periodo-movimentacao]',
    botaoLimparFiltro: '[data-cy=page-filter-movimentacoes] .btn-secondary',
    cardMovimentacao: '[data-cy=card-movimentacao]',
    tipoMovimentacao: '[data-cy=span-tipo-movimentacao]',
    responsavel: '[data-cy=span-responsavel]',
    origem: '[data-cy=span-origem]',
    unidadeArmazenamento: '[data-cy=span-unidade-armazenamento]',
    valorTotal: '[data-cy=span-valor-total]',
    abrirMovimentacao: '[data-cy=icon-abrir-detalhes-movimentacao]'
  },

  registrarMovimentacao: {
    titulo: '[data-cy=header-movimentacoes] h1',
    dataEntrada: '[data-cy=date-picker-data-entrada]',
    selectUnidadeArmazenamento: '[data-cy=select-unidade-armazenamento]',
    selectResponsavel: '[data-cy=select-responsavel]',
    selectUnidadeArmazenamentoDestino: '[data-cy=select-unidade-armazenamento-destino]',
    inputObservacao: '[data-cy=input-observacao]',
    botaoCancelar: '[data-cy=button-footer-submit] .el-button--secondary',
    botaoAdicionar: '[data-cy=button-footer-submit] .el-button--primary'
  },

  detalhesMovimentacao: {
    titulo: '[data-cy=header-detalhes-movimentacoes] h1',
    botaoExcluirMovimentacao: '[data-cy=header-detalhes-movimentacoes] .siagri-icon-trash-alt-xsmall',
    statusMovimentacao: '[data-cy=span-status]',
    responsavel: '[data-cy=span-responsavel]',
    origem: '[data-cy=span-origem]',
    unidadeArmazenamento: '[data-cy=span-unidade-armazenamento]',
    data: '[data-cy=span-data]',
    quantidadeItens: '[data-cy=span-quantidade-itens]',
    observacoes: '[data-cy=span-observacoes]',
    tabelaDetalheMovimentacoes: '[data-cy=table-detalhes-movimentacoes]'
  }
}

export default locators
