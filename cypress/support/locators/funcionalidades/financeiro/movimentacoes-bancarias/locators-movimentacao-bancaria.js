const locators = {
  dashboard: {
    titulo: '[data-cy=header-movimentacao-bancaria]',
    filtroEmpresa: '[data-cy=select-filter-empresa]',
    listaEmpresas: '[data-cy=select-filter-empresa] .list__items',
    abrirFiltro: '.el-button.el-button--text',
    pesquisarMovimentacao: '[data-cy=header-movimentacao-bancaria] [name=search]',
    filtroContaBancaria: '[data-cy=filter-select-conta]',
    filtroDataInicio: '[data-cy=header-movimentacao-bancaria] [placeholder=Início]',
    filtroDataFim: '[data-cy=header-movimentacao-bancaria] [placeholder=Fim]',
    cardMovimentacao: '.el-card__body',
    cardMovimentacaoTipo: '[data-cy=span-tipo-descricao]',
    cardMovimentacaoCategoria: '[data-cy=span-categoria]',
    cardMovimentacaoConta: '[data-cy=span-conta-bancaria]',
    cardMovimentacaoConferido: '[data-cy=span-conferido]',
    cardMovimentacaoValor: '[data-cy=span-valor]',
    saldoDoDia: '[data-cy=text-saldo-diario]',
    mensagemEmptyState: '.container-empty-state'
  },
  detalhes: {
    titulo: '.cnx-page-header__container--title',
    botaoExcluirMovimentacao: '[data-cy=button-excluir-movimentacao]',
    mensagemConfirmacaoExclusao: '.el-message-box__message',
    botaoConfirmarExclusao: '.el-message-box__btns .el-button--primary',
    dataMovimentacao: '[data-cy=span-data-movimentacao]',
    tipoMovimentacao: '[data-cy=span-tipo-movimentacao]',
    contaBancaria: '[data-cy=span-conta-bancaria-movimentacao]',
    valor: '[data-cy=span-valor-movimentacao]',
    observacao: '[data-cy=span-observacao]',
    conferido: '[data-cy=span-conferidos]',
    categorias: '[data-cy=table-lista-categorias]',
    tipoCategoria: '[data-cy=table-lista-categorias] tbody .el-table__row',
    titulos: '[data-cy=table-lista-titulos]',
    listTitulos: '[data-cy=table-lista-titulos] tbody .el-table__row',
    anexoXml: 'button-upload-xml',
    mensagemSucesso: '.el-message__content'
  },
  movimentacaoMenu: {
    dropdownMovimentacoes: '[data-cy=header-movimentacao-bancaria] .el-dropdown-selfdefine',
    conciliacao: '[data-cy=dropdown-concilicao]',
    pagamento: '[data-cy=dropdown-pagamento]',
    recebimento: '[data-cy=dropdown-recebimento]',
    transferencia: '[data-cy=dropdown-transferencia]'
  },
  movimentacoes: {
    titulo: '[style="z-index: 2001;"] > .el-dialog > .el-dialog__header > .el-dialog__title',
    tituloTransferencia: '.el-dialog__wrapper.modais-transferencia .el-dialog__header',
    selectEmpresa: '[data-cy=select-empresa]',
    data: '[data-cy=date-picker-data]',
    horaTransferencia: '[data-cy=time-picker-hora]',
    inputValor: '[data-cy=input-valor]',
    selectContaBancaria: '[data-cy=select-conta]',
    selectContaOrigem: '[data-cy=select-conta-origem]',
    selectContaDestino: '[data-cy=select-conta-destino]',
    selectCategoria: '[data-cy=select-categoria]',
    inputDedutivel: '[data-cy=toggle-dedutivel]',
    inputObservacao: '[data-cy=input-observacao]',
    selectDestino: '[data-cy=select-empresa-destino]',
    adicionarTransferencia: '[data-cy=buttons-submit-transferencia] .el-button--primary',
    adicionarPagamento: '[data-cy=buttons-submit-pagamento] .el-button--primary',
    adicionarRecebimento: '[data-cy=buttons-submit-recebimento] .el-button--primary'
  },
  conciliacaoBancaria:{
    titulo: '[data-cy=header-adicao-conciliacao]',
    uploadOfx: '[data-cy=file-uploader] input',
    mensagemModal: '[data-cy=modal-divergencias] p',
    mensagemAlerta: '[role=alert].el-message'
  }
}

export default locators
