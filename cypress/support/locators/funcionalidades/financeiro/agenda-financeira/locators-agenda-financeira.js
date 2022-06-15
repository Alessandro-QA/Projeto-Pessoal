const locators = {
  dashboard: {
    titulo: '[data-cy=header-agenda-financeira] > h1',
    filtroEmpresa: '[data-cy=select-filter-empresa]',
    filtroFazenda: '[data-cy=select-filter-fazenda]',
    pesquisarDocumento: '[data-cy=input-pesquisar]',
    buttonFiltros: '[data-cy=icon-filtro]',
    checkBoxTipoPagamento: '[data-cy=checkbox-tipo]',
    cardAgenda: '[data-cy=card-agenda]',
    statusDocumento: '.pago li',
    cardNomePessoa: '[data-cy=card-pessoa]',
    cardValor: '[data-cy=card-valor]',
    cardSaldoAPagar: '[data-cy=card-saldo]',
    cardNumeroDocumento: '[data-cy=card-numero]',
    buttonAgendar: '[data-cy=button-agendar]',
    buttonReceberOuPagar: '[data-cy=button-receber-pagar]',
    buttonConfirmarPagamento: '[data-cy=button-confirmar-pagamento]',
    mensagemSucessoPagamento: '.el-message__content'
  },

  detalhesTitulo: {
    statusTitulo: '[data-cy=span-status-titulo]',
    valorTitulo: '[data-cy=span-valor-titulo]',
    formaPagamento: '[data-cy=span-forma-pagamento]',
    condicaoPagamento: '[data-cy=span-condicao-pagamento]',
    fornecedor: '[data-cy=span-fornecedor]',
    cnpj: '[data-cy=span-cnpj]',
    tabelaHistoricoPagamento: '.el-table__row .cell'
  }
}

export default locators
