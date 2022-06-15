const locators = {
  titulo: '[data-cy=header-extrato] h1',
  selectMaterial: '[data-cy=select-material] > .select',
  pesquisarMaterial: '[data-cy=select-material] input',
  listaMateriais: '[data-cy=select-material] .list-items',
  selectUnidadadeArmazenamento: '[data-cy=select-unidade-armazenamento]',
  cardMaterial: '[data-cy="card-extrato-material"]',
  spanStatus: '[data-cy="empty-state-status"]',
  spanQuantidadeAtual: '[data-cy=span-quantidade-atual]',
  btnExportarRelatorio: '[data-cy=button-exportar-csv]',
  btnFiltros: '[data-cy=page-filter-extrato] .el-button--text',
  iptPesquisar: '[data-cy=page-filter-extrato] [name="search"]',
  filtroData: '[data-cy=date-picker-filtro-periodo]',
  selectOrigem: '[data-cy=select-origem]',
  selectTipoMovimentacao: '[data-cy=select-tipo-movimentacao]',
  btnLimparFiltro: '[data-cy=page-filter-extrato] .btn-secondary',
  spanData: '[data-cy=span-data]',
  spanOrigem: '[data-cy=span-origem]',
  spanTipo: '[data-cy=span-tipo]',
  spanQuantidade: '[data-cy=span-quantidade]',
  spanQuantidadeEstoque: '[data-cy=span-quantidade-estoque]',
  spanValorUnitario: '[data-cy=span-valor-unitario]',
  spanTotal: '[data-cy=span-total]',
  spanValorEstoque: '[data-cy=span-valor-estoque]',
  spanPrecoMedio: '[data-cy=span-preco-medio]',
  btnAcao: '[data-cy=button-abrir-movimentacao]'
}

export default locators
