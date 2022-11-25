const locators = {
  dashboard: {
    titulo: '[data-cy=header-agenda-financeira] > h1',
    filtroEmpresa: '[data-cy=select-filter-empresa]',
    filtroFazenda: '[data-cy=select-filter-fazenda]',
    pesquisarDocumento: '[data-cy=input-pesquisar]',
    buttonFiltros: '[data-cy=icon-filtro]',
    limparFiltros: '[data-cy=button-limpar-filtros]',
    checkBoxTipoPagamento: '[data-cy=checkbox-tipo]',
    checkBoxTipoPagamentoNome: '[data-cy=checkbox-tipo]',
    cardAgenda: '[data-cy=card-agenda]',
    cardBoard: '.el-card__body',
    marcarCard: '.siagri-icon-circle-check',
    statusPago: '.pago li',
    statusRecebido: '.recebido li',
    cardNomePessoa: '[data-cy=card-pessoa]',
    cardValor: '[data-cy=card-valor]',
    cardSaldoAPagar: '[data-cy=card-saldo]',
    cardNumeroDocumento: '[data-cy=card-numero]',
    efetuarPagamento: "[data-cy=button-pagamento]",
    buttonAgendar: '[data-cy=button-agendar]',
    buttonReceberOuPagar: '[data-cy=button-receber-pagar]',
    buttonConfirmarPagamento: '[data-cy=button-confirmar-pagamento]',
    mensagemSucessoPagamento: '.el-message__content'
  },

  pagamentoRecebimentoLote: {
    titulo: '[data-cy=header-title]',
    retornarModal: '[data-cy=header-title] .siagri-icon-arrow-left',
    formaPagamento: '[data-cy=select-forma-pagamento]',
    selectFormaPagamento: '[data-cy=select-forma-pagamento] .list__items',
    dataPagamento: '[data-cy=date-picker-data] input',
    contaBancaria: '[data-cy=select-conta-bancaria]',
    selectContaBancaria: '[data-cy=select-conta-bancaria] .list__items',
    inputCheque: '[data-cy=input-numero-chque] input',
    listaTitulo: '[data-cy=list-titulo]',
    inputValor: '[data-cy=input-valor] input',
    inputJuros: '[data-cy=input-juros] input',
    inputMulta: '[data-cy=input-multa] input',
    inputDesconto: '[data-cy=input-desconto]',
    totalPagar: '[data-cy=input-valor-total] input',
    valorTotal: '[data-cy=span-valor-total]',
    anexos: '[data-test=fileupload]',
    observacao: '[data-cy=input-observacao-adicional]',
    buttonConfirmarPagamentoRecebimento: '[data-cy=button-confirmar-pagamento-recebimento]'
  },

  detalhesTitulo: {
    statusTitulo: '[data-cy=span-status-titulo]',
    valorTitulo: '[data-cy=span-valor-titulo]',
    formaPagamento: '[data-cy=span-forma-pagamento]',
    condicaoPagamento: '[data-cy=span-condicao-pagamento]',
    editarDataPagamento: '[data-cy=icon-editar-data-vencimento]',
    fornecedor: '[data-cy=span-fornecedor]',
    cnpj: '[data-cy=span-cnpj]',
    tabelaHistoricoPagamento: '.el-table__row .cell',
    efetuarPagamento: '[data-cy=button-efetuar-pagamento-recebimento]',
  },

  pagamentoRecebimento: {
    formaPagamento: '[data-cy=select-forma-pagamento]',
    dataPagamento: '[data-cy=data-picker-data]',
    contaBancaria: '[data-cy=select-conta-bancaria]',
    valor: '[data-cy=input-valor]',
    juros: '[data-cy=input-juros]',
    multa: '[data-cy=input-multa]',
    descontos: '[data-cy=input-desconto]',
    total: '[data-cy=input-total-pagar]',
    tags: '[data-cy=select-tag]',
    observacao: '[data-cy=input-informacoe-adicionais]',
    anexo: '[data-cy=button-upload-xml]',
    botaoCancelar: '[data-cy=button-cancelar]',
    botaoPagarReceber: '[data-cy=button-pagamento-recebimento]',
    mensagemSucessoPagamento: '.el-message__content'
  }
}

export default locators
