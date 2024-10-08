const locators = {
  dashboard: {
    titulo: '[data-cy=header-pedidos] h1',
    botaoNovoPedido: '[data-cy=header-pedidos] .el-button',
    selectSafra: '[data-cy=select-filter-safra]',
    limparSelectSafra: '[data-cy=select-filter-safra] .siagri-icon-close',
    selectFazenda: '[data-cy=select-filter-fazenda]',
    limparSelectFazenda: '[data-cy=select-filter-fazenda] .siagri-icon-close',
    selectEmpresa: '[data-cy=select-filter-empresa]',
    limparSelectEmpresa: '[data-cy=select-filter-empresa] .siagri-icon-close',
    botaoExpandirFiltros: '[data-cy=page-filter-pedidos] .siagri-icon-filter-xsmall',
    botaoMudarVisualizacao: '[data-cy=icon-visualizacao] .siagri-icon-menu-xsmall',
    inputPesquisar: '.el-input__inner[placeholder="Pesquisar"]',
    dataInicio: '[placeholder="Início"]',
    dataFinal: '[placeholder="Fim"]',
    selectStatus: '[data-cy=select-status]',
    selectFornecedor: '[data-cy=select-fornecedor]',
    inputData: '[data-cy=date-picker-periodo]',
    botaoLimparFiltro: '[data-cy=page-filter-pedidos] .btn-secondary',
    cardPedidos: '.line--wrapper',
    statusPedido: '[data-cy=label-status-pedido]',
    fazenda: '[data-cy=label-fazenda]',
    nomeFornecedor: '[data-cy=span-nome-fornecedor]',
    cnpjFornecedor: '[data-cy=span-cnpj-fornecedor]',
    safra: '[data-cy=nome-safra]',
    numeroPedido: '[data-cy=numero-pedido]',
    numeroPedidoFornecedor: '[data-cy=numero-pedido-no-fornecedor]',
    dataPedido: '[data-cy=data-do-pedido]',
    mensagemSucesso: '.el-message__content',
    mensagemNenhumPedido: '[data-cy=msg-empty-state]',
    cardPedido:{
      codigo: '.line--item-id .line--text',
      data: '.line--item-date .line--text',
      fazenda: '.line--item-farm .line--text',
      safra: '.line--item-harvest .line--text',
      fornecedor: '.line--item-provider .line--text',
      cnpj: '.line--item-cnpj .line--text',
      numeroPedidoFornecedor: '.line--item-provider_number .line--text',
    },
  },

  registrarEditarPedido: {
    titulo: '[data-cy=header-cadastro-pedido] > h1',
    inputDataPedido: '[data-cy=date-picker-data-pedido] input',
    selectFornecedor: '[data-cy=select-fornecedor]',
    cnpjFornecedor: '[data-cy=span-cnpj]',
    inputNumeroPedidoFornecedor: '[data-cy=input-numero-pedido-fornecedor] input',
    selectSafra: '[data-cy=select-safra]',
    selectFazenda: '[data-cy=select-fazenda] > .select',
    checkBoxMesmoLocalEntrega: '[data-cy=checkbox-mesmo-local-entrega]',
    selectEmpresa: '[data-cy=select-empresa]',
    selectInscricaoEstadual: '[data-cy=select-inscricao-estadual]',
    inputDataEntrega: '[data-cy=date-picker-data-entrega] input',
    selectLocalEntrega: '[data-cy=select-local-entrega]',
    selectMaterial: '[data-cy=select-material]',
    pesquisarMaterial: '[data-cy=select-material] input',
    listItemsMaterial: '[data-cy=select-material] .list-items',
    labelUnidadeMaterial: '[data-cy=material-item]',
    inputQuantidadeMaterial: '[data-cy=input-quantidade-material] input',
    inputPrecoUnitarioMaterial: '[data-cy=material-item] .input-value .input',
    valorTotal: '[data-cy=span-valor-total]',
    valorTotalMateriais: '[data-cy=span-valor-total-material]',
    botaoAddMaterial: '[data-cy=button-adicionar] button',
    botaoRemoverMaterial: '[data-cy=button-remover]',
    selectFormaPagamento: '[data-cy=select-forma-pagamento]',
    inputQuantidadeParcelas: '[data-cy=input-quantidade-parcelas]',
    checkBoxValorFixo: '[data-cy=checkbox-valor-fixo]',
    valorParcela: '[data-cy=span-valor-parcela]',
    inputDataVencimento: '[data-cy=date-picker-data-vencimento]',
    selectCategoria: '[data-cy=select-categoria]',
    categoriaSelecionada: '[data-cy=select-categoria] .selected',
    inputPorcentagemCategoria: '[data-cy=input-porcentagem] input',
    inputValorCategoria: '[data-cy=input-valor] input',
    checkBoxRateioEntreCiclos: '[data-cy=checkbox-rateio-ciclo]',
    selectCiclo: '[data-cy=select-ciclo]',
    inputPorcentagemCiclo: '[data-cy=input-porcentagem-ciclo] input',
    inputValorCiclo: '[data-cy=input-valor-ciclo] input',
    botaoCancelar: '[data-cy=button-cancelar]',
    botaoFinalizarAdicionar: '[data-cy=button-finalizar-adicionar]'
  },

  detalhesPedido: {
    titulo: '[data-cy=header-cadastro-pedido] > h1',
    statusPedido: '[data-cy=label-status-pedido]',
    botaoEditar: '[data-cy=button-editar-pedido]',
    botaoExcluir: '[data-cy=button-deletar]',
    dataPedido: '[data-cy=span-data-pedido]',
    fornecedor: '[data-cy=span-razao-social-fornecedor]',
    cnpjFornecedor: '[data-cy=span-cnpj-fornecedor]',
    numeroPedidoFornecedor: '[data-cy=span-numero-pedido-fornecedor]',
    safra: '[data-cy=span-safra]',
    fazenda: '[data-cy=span-fazenda]',
    empresa: '[data-cy=span-empresa]',
    inscricaoEstadual: '[data-cy=span-inscricao-estadual]',
    dataEntrega: '[data-cy=span-data-entrega]',
    tabelaMateriais: '[data-cy=table-lista-materiais]',
    expandirTabela: '[data-cy=table-lista-materiais] .el-table__expand-icon',
    material: '[data-cy=table-lista-materiais] td.el-table_1_column_2',
    unidade: '[data-cy=table-lista-materiais] td.el-table_1_column_3',
    quantidade: '[data-cy=span-quantidade-material]',
    precoUnitario: '[data-cy=span-preco-unitario]',
    valorTotal: '[data-cy=span-preco-total]',
    valorTotalMateriais: '[data-cy=span-valor-total-material]',
    notaMaterial: '[data-cy=span-numero-nota]',
    dataNotaMaterial: '[data-cy=span-data-emissao]',
    quantidadeNotaMaterial: '[data-cy=span-quantidade]',
    precoUnitarioNotaMaterial: '[data-cy=span-valor-unitario]',
    descontoNotaMaterial: '[data-cy=span-desconto]',
    valorTotalNotaMaterial: '[data-cy=span-valor-total]',
    tabelaNotasRecebidas: '[data-cy=table-notas-recebidas]',
    valorTotalNotasRecebidas: '[data-cy=span-valor-total-notas]',
    formaPagamento: '[data-cy=span-forma-pagamento]',
    quantidadeParcelas: '[data-cy=span-quantidade-parcelas]',
    numeroParcela: '[data-cy=span-numero-parcela]',
    dataVencimento: '[data-cy=span-vencimento-parcela]',
    valorParcela: '[data-cy=span-valor-parcela]',
    categoria: '[data-cy=span-categoria]',
    porcentagemCategoria: '[data-cy=span-porcentagem]',
    valorCategoria: '[data-cy=span-valor]',
    ciclo: '[data-cy=span-ciclo]',
    porcentagemCiclo: '[data-cy=span-porcentagem-ciclo]',
    valorCiclo: '[data-cy=span-valor-ciclo]',
    voltar: '[data-cy="header-cadastro-pedido"] > .dark'
  }
}

export default locators
