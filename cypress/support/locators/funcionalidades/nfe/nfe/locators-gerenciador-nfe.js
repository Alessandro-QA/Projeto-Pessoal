const locators = {
  titulo: '[data-cy=header-gerenciador-nfe] h1',
  selectEmissor: '[data-cy=select-emitente]',
  selecionarEmissor: '[data-cy=select-emitente] .list',
  selectAmbiente: '[data-cy=select-ambiente]',
  selecionarAmbiente: '[data-cy=select-ambiente] .list',
  buttonNovaNfe: '[data-cy=header-gerenciador-nfe] > .el-button',
  inputPesquisar: '[data-cy=page-filter-nfe] [name="search"]',
  cardMaisAcoes: '[data-cy=mais-acoes]',
  cardNFe: '[data-cy=card-nota] .el-card__body',
  numeroNota: '[data-cy=span-numero-nota]',
  dataNota: '[data-cy=span-data-nota]',
  destinatario: '[data-cy=span-destinatario]',
  finalidade: '[data-cy=span-finalidade]',
  valorTotal: '[data-cy=span-valor-total]',
  statusNota: '[data-cy=card-nota] .el-card__body .minitext',
  collapseCard: '[data-cy=collapse-nota]',
  btnSelecionarNfe: '[data-cy=card-nota] .radio',
  btnAcoesDownload: '[data-cy=mais-acoes] .el-button--secondary'
}

export default locators
