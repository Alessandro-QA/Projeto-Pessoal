const locators = {
  titulo: '[data-cy=header-consulta] h1',
  botaoExpandirFiltros: '[data-cy=page-filter-consulta] .el-button--text',
  inputPesquisar: '[data-cy=page-filter-consulta] .el-input__inner',
  filtroFazenda: '[data-cy=select-filter-fazenda]',
  filtroUnidadeArmazenamento: '[data-cy=select-filter-unidade-armazenamento]',
  cardListItens: '[data-cy=header-listagem-itens]',
  valorTotal: '[data-cy=valor-total]',
  itensTabela: '[data-cy=span-itens]',
  botaoEstoque: '[data-cy=button-estoque]',
  unidadeArmazenamento: '[data-cy=span-unidade-armazenamento]',
  material: '[data-cy=span-material]',
  unidadeMedida: '[data-cy=span-unidade-medida]',
  quantidadeAtual: '[data-cy=span-quantidade-atual]',
  quantidadeAjustada: '[data-cy=input-quantidade-ajustada] > input',
  precoUnitario: '[data-cy=input-preco-unitario] > input',
  valorTotalSpan: '[data-cy=span-valor-total]',
  botaoCancelar: '[data-cy=button-cancelar]',
  botaoSalvar: '[data-cy=button-salvar]'
}

export default locators
