const locators = {
  informacoesProduto: {
    selectMaterial: '[data-cy=select-material] .select',
    pesquisarMaterial: '[data-cy=select-material] [placeholder="Pesquisar"]',
    selecionarMaterial: '[data-cy=select-material] .list-items',
    inputQuantidade: '.informacoes [data-cy=input-quantidade] input',
    inputValorUnitario: '[data-cy=input-valor-unitario] input',
    inputDesconto: '[data-cy=input-desconto] > input',
    spanTotal: '[data-cy=span-total]',
    selectCfop: '[data-cy=select-cfop]',
    selecionarCfop: '[data-cy=select-cfop] .list__items',
    spanNcm: '[data-cy=span-ncm]',
    spanUnidadeMedida: '[data-cy=span-unidade-medida]'
  },
  impostos: {
    icms: {
      selectOrigem: '[data-cy=select-origem-icms]',
      selecionarOrigem: '[data-cy=select-origem-icms] .list__items',
      origemSelecionada: '[data-cy=select-origem-icms] .selected',
      selectCst: '[data-cy=select-cst-icms]',
      selecionarCst: '[data-cy=select-cst-icms] .list__items',
      inputBaseCalculo: '[data-cy=input-base-calculo-icms] > input',
      inputAliquota: '[data-cy=input-aliquota-icms] > input',
      spanValor: '[data-cy=span-valor-icms]'
    },
    pis: {
      selectCst: '[data-cy=select-cst-pis]',
      selecionarCst: '[data-cy=select-cst-pis] .list__items',
      inputBaseCalculo: '[data-cy=input-base-calculo-pis] > input',
      inputAliquota: '[data-cy=input-aliquota-pis] > input',
      spanValor: '[data-cy=span-valor-pis]'
    },
    cofins: {
      selectCst: '[data-cy=select-cst-cofins]',
      selecionarCst: '[data-cy=select-cst-cofins] .list__items',
      inputBaseCalculo: '[data-cy=input-base-calculo-cofins] > input',
      inputAliquota: '[data-cy=input-aliquota-cofins] > input',
      spanValor: '[data-cy=span-valor-cofins]'
    },
    fcp: {
      inputBaseCalculo: '[data-cy=input-base-calculo-fcp] > input',
      inputAliquota: '[data-cy=input-aliquota-fcp] > input',
      spanValor: '[data-cy=span-valor-fcp]'
    }
  },
  retencao: {
    selectRetencao: '[data-cy=select-retencao]',
    selecionarRetencao: '[data-cy=select-retencao] .list__items',
    inputValor: '[data-cy=input-valor-retencao] > input',
    buttoAddRetencao: '[data-cy=button-add-delete-retencao] .siagri-icon-plus-xsmall',
    buttoDeleteRetencao: '[data-cy=button-add-delete-retencao] .siagri-icon-trash-alt-xsmall'
  },
  informacoesComplementares: '[data-cy=input-informacoes-complementares]',
  buttonCancelar: '[data-cy=button-cancelar]',
  buttonAdicionar: '[data-cy=button-adicionar]'
}

export default locators
