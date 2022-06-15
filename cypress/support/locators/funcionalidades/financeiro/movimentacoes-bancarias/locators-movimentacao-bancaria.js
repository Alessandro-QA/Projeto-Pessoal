const locators = {
  dashboard: {
    titulo: '[data-cy=header-movimentacao-bancaria]',
    filtroEmpresa: '[data-cy=select-filter-empresa]',
    listaEmpresas: '[data-cy=select-filter-empresa] .list__items',
    pesquisarMovimentacao: '[data-cy=header-movimentacao-bancaria] [name=search]',
    cardMovimentacaoTipo: '[data-cy=span-tipo-descricao]',
    cardMovimentacaoCategoria: '[data-cy=span-categoria]',
    cardMovimentacaoConta: '[data-cy=span-conta-bancaria]',
    cardMovimentacaoConferido: '[data-cy=span-conferido]',
    cardMovimentacaoValor: '[data-cy=span-valor]',
    saldoDoDia: '[data-cy=text-saldo-diario]',
    mensagemEmptyState: '.container-empty-state'
  },
  detalhes: {
    botaoExcluirMovimentacao: '[data-cy=button-excluir-movimentacao]',
    mensagemConfirmacaoExclusao: '.el-message-box__message',
    botaoConfirmarExclusao: '.el-message-box__btns .el-button--primary',
    mensagemSucesso: '.el-message__content'
  }
}

export default locators
