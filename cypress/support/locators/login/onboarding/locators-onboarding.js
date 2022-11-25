const locators = {
  dashboard: {
    msgWelcome: '.welcome-message',
    iptNomeFazenda: '.el-input__inner',
    btnAvancar: '.el-button',
    btnCadastrar: '.el-button.acao.el-button--primary',
    btnJaCompletei: '.el-button--secondary',
    btnRegistrarDocumento: '.acoes > .el-button',
    processoFinalizado: '.mensagem',
    fecharGuia: '.close'
  },
  notification: {
    msgSucesso: '.el-message__content'
  },
  cards: {
    financeiro: '.hold-modules > :nth-child(1)',
    producaoAgricola: '.hold-modules > :nth-child(2)',
    atividadesAgricolas: '.hold-modules > :nth-child(3)'
  },
  guias: {
    contaPagar: ':nth-child(1) > .guide-container',
    contasReceber: ':nth-child(2) > .guide-container',
    livroCaixa: ':nth-child(3) > .guide-container'
  },
  cadastroEmpresa: {
    fisica: '.siagri-template__toggle > .el-radio-group > .is-active > .el-radio-button__inner',
    nome: '#root-empresa-cadastro-empresa-cnx-input-el-col-razao-social > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    cpf: '#root-empresa-cadastro-empresa-cnx-input-el-col-documento-principal > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    cep: '#root-empresa-cadastro-empresa-cnx-input-el-col-cep > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    novaIe: '#root-empresa-cadastro-empresa-cnx-button-icon-div-adicionar-nova-inscricao > button',
    novaIeCollapse: '.subtitle-collapse:nth-child(4)',
    ie: '#root-empresa-cadastro-empresa-inscricao-estadual-cnx-input-el-col-inscricao-estadual > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    ieDescricao: '#root-empresa-cadastro-empresa-inscricao-estadual-cnx-input-el-col-descricao > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    btnAtualizar: '#root-empresa-cadastro-empresa-cnx-button-submit-el-button-adicionar'

  },
  cadastroCiclo: {
    safra: ':nth-child(1) > .el-col > .el-form-item > .el-form-item__content > #root-etapas-wrapper-cnx-onboarding-etapas-cnx-onboarding-etapa-item-cnx-modal-ciclo-new-ciclo-form-siagri-select-div-siagri-select > .selected',
    selectSafra: ':nth-child(1) > .el-col > .el-form-item > .el-form-item__content > #root-etapas-wrapper-cnx-onboarding-etapas-cnx-onboarding-etapa-item-cnx-modal-ciclo-new-ciclo-form-siagri-select-div-siagri-select > .list > .list__items > #root-etapas-wrapper-cnx-onboarding-etapas-cnx-onboarding-etapa-item-cnx-modal-ciclo-new-ciclo-form-siagri-select-li-item-0',
    cultura: ':nth-child(2) > .el-col > .el-form-item > .el-form-item__content > #root-etapas-wrapper-cnx-onboarding-etapas-cnx-onboarding-etapa-item-cnx-modal-ciclo-new-ciclo-form-siagri-select-div-siagri-select > .selected',
    selectCultura: ':nth-child(2) > .el-col > .el-form-item > .el-form-item__content > #root-etapas-wrapper-cnx-onboarding-etapas-cnx-onboarding-etapa-item-cnx-modal-ciclo-new-ciclo-form-siagri-select-div-siagri-select > .list > .list__items > #root-etapas-wrapper-cnx-onboarding-etapas-cnx-onboarding-etapa-item-cnx-modal-ciclo-new-ciclo-form-siagri-select-li-item-0',
    valorizacao: '#root-etapas-wrapper-cnx-onboarding-etapas-cnx-onboarding-etapa-item-cnx-modal-ciclo-new-ciclo-form-siagri-input-number-input-siagri-input-number',
    btnAdicionar: '#root-etapas-wrapper-cnx-onboarding-etapas-cnx-onboarding-etapa-item-cnx-modal-ciclo-new-ciclo-form-cnx-button-submit-el-button-adicionar'
  },
  cadastroContaBancaria: {
    nomeConta: ':nth-child(2) > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    empresaTitular: ':nth-child(3) > .el-form-item > .el-form-item__content > #root-form-conta-bancaria-siagri-select-div-siagri-select > .selected',
    selectEmpresaTitular: ':nth-child(3) > .el-form-item > .el-form-item__content > #root-form-conta-bancaria-siagri-select-div-siagri-select > .list > .list__items > #root-form-conta-bancaria-siagri-select-li-item-0',
    contaPrincipal: ':nth-child(4) > .el-checkbox > .el-checkbox__input',
    empresasHabilitadas: '.el-col-8 > .el-form-item > .el-form-item__content > #root-form-conta-bancaria-siagri-select-div-siagri-select > .selected',
    dataSaldoInicial: '.el-date-editor > .el-input__inner',
    saldoInicial: ':nth-child(3) > .el-form-item > .el-form-item__content > #root-form-conta-bancaria-siagri-input-number-div-siagri-input-number > #root-form-conta-bancaria-siagri-input-number-input-siagri-input-number',
    banco: '.el-col-12 > .el-form-item > .el-form-item__content > #root-form-conta-bancaria-siagri-select-div-siagri-select > .selected',
    selectBanco: '.el-col-12 > .el-form-item > .el-form-item__content > #root-form-conta-bancaria-siagri-select-div-siagri-select > .list > .list__items > #root-form-conta-bancaria-siagri-select-li-item-0',
    agencia: ':nth-child(2) > .el-form-item > .el-form-item__content > .el-input-number > .el-input > .el-input__inner',
    digitoAgencia: ':nth-child(3) > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
    numeroConta: ':nth-child(4) > .el-form-item > .el-form-item__content > .el-input-number > .el-input > .el-input__inner',
    digitoConta: '[data-testid=contaDigitoVerificador] > .el-form-item__content > .el-input > .el-input__inner',
    btnAdicionar: '#root-form-conta-bancaria-cnx-button-submit-el-button-adicionar',
    btnCancelar: '#root-form-conta-bancaria-cnx-button-submit-cnx-button-el-button-cancelar'
  },
  cadastroDocumento: {
    operacao: '#root-view-documentos-cadastro-de-documentos-cnx-select-div-operacao',
    pesquisaOperacao: '#root-view-documentos-cadastro-de-documentos-cnx-select-operacao-input-pesquisar',
    selectOperacao: '#root-view-documentos-cadastro-de-documentos-cnx-select-operacao-li-item-11',
    tipoDocumento: '#root-view-documentos-cadastro-de-documentos-siagri-select-div-tipo-documento',
    numeroDocumento: '#root-view-documentos-cadastro-de-documentos-siagri-input-number-input-siagri-input-number',
    pessoa: '#root-view-documentos-cadastro-de-documentos-siagri-select-div-fornecedor',
    selectPessoa: '#root-view-documentos-cadastro-de-documentos-siagri-select-fornecedor-li-item-0',
    fazenda: '#root-view-documentos-cadastro-de-documentos-cnx-select-fazenda-cnx-select-div-cnx-select',
    cpfCnpj: ':nth-child(4) > .el-form-item > .el-form-item__content > span',
    safra: '#root-view-documentos-cadastro-de-documentos-siagri-select-div-safra',
    selectSafra: '#root-view-documentos-cadastro-de-documentos-siagri-select-safra-li-item-0',
    empresa: '#root-view-documentos-cadastro-de-documentos-siagri-select-div-empresa',
    selectEmpresa: '#root-view-documentos-cadastro-de-documentos-siagri-select-empresa-li-item-0',
    ieEmpresa: '#root-view-documentos-cadastro-de-documentos-siagri-select-div-empresa-ie',
    valorTotal: '#root-view-documentos-cadastro-de-documentos-siagri-input-number-valor-total-input-valor-total',
    jaFoiPago: '[data-test=check-documento-pago] > .el-checkbox__label',
    rateioEntreCiclos: ':nth-child(3) > .el-form-item > .el-form-item__content > .el-checkbox > .el-checkbox__label',
    formaPagamento: '#root-view-documentos-cadastro-de-documentos-siagri-select-div-forma-de-pagamento',
    selectFormaPagamento: '#root-view-documentos-cadastro-de-documentos-siagri-select-forma-de-pagamento-li-item-0',
    contaBancaria: '#root-view-documentos-cadastro-de-documentos-siagri-select-div-conta-bancaria',
    selectContaBancaria: '#root-view-documentos-cadastro-de-documentos-siagri-select-conta-bancaria-li-item-0',
    parcelaUnica: '.el-col-5 > .el-form-item > .el-form-item__content > #root-view-documentos-cadastro-de-documentos-siagri-input-number-div-siagri-input-number > #root-view-documentos-cadastro-de-documentos-siagri-input-number-input-siagri-input-number',
    ciclo: '#root-view-documentos-cadastro-de-documentos-list-rateio-ciclo-form-rateio-ciclos-cnx-select-div-cnx-select',
    valorCiclo: '#root-view-documentos-cadastro-de-documentos-list-rateio-ciclo-form-rateio-ciclos-siagri-input-number-input-siagri-input-number',
    addCiclo: '#root-view-documentos-cadastro-de-documentos-list-rateio-ciclo-form-rateio-ciclos-cnx-button-delete-add-cnx-button-one-two-cnx-button-icon-with-border-div-cnx-button-icon-with-border > .el-tooltip > .el-button',
    selectCiclo: '#root-view-documentos-cadastro-de-documentos-list-rateio-ciclo-form-rateio-ciclos-cnx-select-li-item-0',
    btnAdicionar: '#root-view-documentos-cadastro-de-documentos-cnx-button-submit-el-button-adicionar-documento'
  }
}

export default locators
