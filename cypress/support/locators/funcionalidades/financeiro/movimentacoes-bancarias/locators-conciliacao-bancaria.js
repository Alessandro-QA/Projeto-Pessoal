const locators = {
  dashboard: {
    titulo: '[data-cy=header-movimentacao-bancaria]'
  },
  movimentacaoMenu: {
    dropdownMovimentacoes: '[data-cy=header-movimentacao-bancaria] .el-dropdown-selfdefine',
    conciliacao: '[data-cy=dropdown-concilicao]',
    pagamento: '[data-cy=dropdown-pagamento]',
    recebimento: '[data-cy=dropdown-recebimento]',
    transferencia: '[data-cy=dropdown-transferencia]'
  },
  adicaoConciliacaoBancaria: {
    titulo: '[data-cy=header-adicao-conciliacao]',
    uploadOfx: '[data-cy=file-uploader] input',
    mensagemModal: '[data-cy=modal-divergencias] p',
    mensagemAlerta: '[role=alert].el-message',
    buttonClose: '.conciliationValidationModal > .el-dialog > .el-dialog__header > .el-dialog__headerbtn > .el-dialog__close',
    continuarConciliacao: '[data-cy=button-editar-continuar]',
  },
  validacaoDivergencias: {
    periodoReferencia: '[data-cy=header-divergencias] .referencePeriod--period',
    footer: '[data-cy=footer-extrato]',
    buttoFinalizarConciliacao: '[data-cy=button-finalizar-conciliacao]',
    mensagemSucesso: '.el-message--success .el-message__content',
    divergenciasExtratoBancario: '[data-cy=divergencia-extrato-bancario]',
    extratoBancario: {
      banco: '.divergenceExtractHeader--title',
      saldoTotal: '[data-testid=saldo-extrato]',
      dataLancamento: '[data-testid=divergence-validation-extract-daily] > .mf_text--color_green',
      descricaoItem: '[data-cy=card-lancamento-presente] .itemDescriptionContainer > .mf_text--normal_text',
      cardLancamentoIndevido: '[data-cy=card-lancamento-ausente]',
      valorItem: '[data-cy=card-lancamento-presente] > [data-testid=description-value] > .valueContainer > .mf_text',
      dataItem: '[data-cy=card-lancamento-presente] .el-input__inner',
      saldoDoDia: '[data-cy=card-conciliacao-dia] .mf_text--bold'
    },
    divergenciasExtratoMyFarm: '[data-cy=divergencia-extrato-myfarm]',
    extratoMyFarm: {
      banco: '.divergenceExtractHeader--title',
      saldoTotal: '[data-cy=info-extrato] > [data-testid=saldo-extrato]',
      dataLancamento: '[data-testid=divergence-validation-extract-daily] > .mf_text--color_green',
      cardLancamentoAusente: '[data-cy=card-lancamento-ausente]',
      conciliacaoDoDia: '[data-cy=card-conciliacao-dia] .mf_text--bold',
      saldoDoDia: '[data-cy=card-conciliacao-dia] .mf_text--bold'
    }
  }
}

export default locators
