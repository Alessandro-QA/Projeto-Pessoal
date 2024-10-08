const locators = {
  dashboard: {
    titulo: '.recebimento > h1',
    selectFornecedor: '[data-cy=select-fornecedor]',
    cnpjFornecedor: '[data-cy=span-cnpj-fornecedor]',
    botaoBuscar: '[data-cy=button-buscar]',
    mensagemSucesso: '.el-message__content'
  },

  recebimentoManual: {
    selectFornecedor: '[data-cy=select-fornecedor] > .selected',
    cnpjFornecedor: '[data-cy=span-cnpj-fornecedor]',
    inputNumeroNota: '[data-cy=input-numero-nota] > input',
    inputSerieNota: '[data-cy=input-serie-nota] > input',
    inputDataEmissao: '[data-cy=date-picker-data-emissao] input',
    inputDataRecebimento: '[data-cy=date-picker-data-recebimento] input',
    inputHoraRecebimento: '[data-cy=time-picker-hora-recebimento] input',
    radioDedutivel: '[data-cy=radio-deducao]',
    selectFazenda: '[data-cy=select-fazenda]',
    selectEmpresa: '[data-cy=select-empresa]',
    selecetInscricaoEstadual: '[data-cy=select-inscricao-estadual]',
    selectSafra: '[data-cy=select-safra]',
    botaoAdicionarMaterial: '[data-cy=button-adicionar-material]',
    selectMaterial: '[data-cy=select-material]',
    selectUnidadeArmazenamento: '[data-cy=select-unidade-armazenamento]',
    unidadeMedida: '[data-cy=span-unidade-medida]',
    inputQuantidade: '[data-cy=input-quantidade] input',
    inputPrecoNF: '[data-cy=input-preco-nf] input',
    botaoAddMaterial: '[data-cy=button-add-delete-material] .siagri-icon-plus-xsmall',
    botatoRemoveMaterial: '[data-cy=button-add-delete-material] .siagri-icon-trash-alt-xsmall',
    nomeMaterial: '.materiais label',
    unidadeArmazenamento: '.undArmazenamento .selected',
    quantidadeMaterialRecebido: '.quantidade input',
    precoMaterialRecebido: '[typeinput="financial"]',
    botaoConfirmarMaterial: '.el-switch',
    selectFormaPagamento: '[data-cy=select-forma-pagamento]',
    inputQuantidadeParcelas: '[data-cy=input-quantidade-parcelas] > input',
    checkBoxValorFixo: '[data-cy=checkbox-valor-fixo]',
    valorParcela: '[data-cy=span-valor-parcela]',
    inputVencimentoParcela: '[data-cy=date-picker-data-vencimento] input',
    selectCategoria: '[data-cy=select-categoria]',
    inputPorcentagemCategoria: '[data-cy=input-porcentagem] > input',
    inputValorCategoria: '[data-cy=input-valor] > input',
    checkBoxRateioEntreCiclos: '[data-cy=checkbox-rateio-ciclo]',
    selectCiclo: '[data-cy=select-ciclo]',
    inputPorcentagemCiclo: '[data-cy=input-porcentagem-ciclo] > input',
    inputValorCiclo: '[data-cy=input-valor-ciclo] > input',
    totalRecebimento: '[data-cy=total-recebimento]',
    botaoFinalizarRecebimento: '[data-cy=button-finalizar-recebimento]'
  },
  materiais: {
    tabelaMateriais: '.materials',
    iconeBotao: '.icon_button',
    linhaMaterial: '.suggested_request_line_large',
    nomeMaterial: '.suggested_material_line .span_text-title-green',
    unidadeMedida: '.suggested_material_line .span_text-normal-text',
    collapseMaterial: '.suggested_material_line .icon_button',
    unidadeArmazenamento: '.storage_unity .selected',
    quantidadeMaterialRecebido: '.request_quantity input',
    precoMaterialRecebido: 'input[data-cy=mf-input-valor]',
    precoTotalPedido: '.request_price span',
    precoPedido: '.suggested_request_line_large > :nth-child(6)',
    botaoConfirmarMaterial: 'div.el-switch input[type="checkbox"]'
  }
}

export default locators
