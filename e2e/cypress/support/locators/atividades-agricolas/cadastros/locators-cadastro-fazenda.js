const locators = {
  dashboard: {
    titulo: '[data-cy=header-cadastro-fazenda] > h1',
    nomeFazenda: '[data-cy=card-nome-fazenda]',
    editarFazenda: '[data-cy=card-icon-editar-fazenda]',
    pesquisarFazenda: '[data-cy=div-filtro-pesquisa] input',
    btnNovaFazenda: '[data-cy=header-cadastro-fazenda] > button'
  },

  cadastroFazenda: {
    nome: '[data-cy=input-nome-fazenda] input',
    email: '[data-cy=input-email] input',
    telefone: '[data-cy=input-telefone] input',
    cep: '[data-cy=input-cep] input',
    pais: '[data-cy=select-pais] .select',
    estado: '[data-cy=select-estado] .select',
    municipio: '[data-cy=select-municipio] .select',
    bairro: '[data-cy=input-bairro]',
    numero: '[data-cy=input-numero]',
    complemento: '[data-cy=input-complemento]',
    endereco: '[data-cy=input-endereco]',
    matricula: '[data-cy=button-adicionar-matricula]',
    btnSalvar: '[data-cy=button-salvar-adicionar]'
  },

  matricula: {
    adicionarMatricula: '[data-cy=button-adicionar-matricula]',
    novaMatricula: '[data-cy=card-matricula]',
    descricao: '[data-cy=input-descricao-matricula]',
    empresa: '[data-cy=select-empresa]',
    ieEmpresa: '[data-cy=select-ie-empresa]',
    cafir: '[data-cy=input-cafir]',
    caepf: '[data-cy=input-caepf]',
    tipoExploracao: '[data-cy=select-tipo-exploracao]',
    btnCancelar: '[data-cy=button-cancelar]',
    btnSalvar: '[data-cy=button-salvar-adicionar]',
    btnAddRemoverMatricula: '[data-cy=button-add-remover-matricula] > div > div > button'
  }
}

export default locators
