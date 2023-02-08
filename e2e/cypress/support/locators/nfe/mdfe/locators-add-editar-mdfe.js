const locators = {
    buttonExcluirMdfe: '[data-cy=header-informacoes-gerais] .siagri-icon-trash-alt-xsmall',
    buttonAvancar: '.el-button--primary',
    buttonCancelar: '.el-button--secondary',
    buttonTransmitir: '[data-cy=button-totalizadores] .el-button--primary',
    modalAutorizacao: '.el-dialog .el-dialog__body',
    manifesto: {
        checkGerarRascunho: '[data-cy=checkbox-mdfe-rascunho] [type=checkbox]',
        selectTipoEmitente: '[data-cy=select-tipo-emitente] > .selected',
        selectTipoTransportador: '[data-cy=select-tipo-transportador] > .selected',
        radioIndicadorCarregamentoPosterior: '[data-cy=toggle-ind-carrega-posterior] [aria-checked=true].is-active',
        spanTipoAmbiente: '[data-cy=span-tipo-ambiente] span',
        spanModelo: '[data-cy=span-modelo] span',
        spanNumeroDoManisfesto: '[data-cy=span-numero-manifesto] span',
        spanDataHora: '[data-cy=span-data-hora] span',
        spanModalidadeTransporte: '[data-cy=span-modalidade] span'
    },
    emitente: {
        collapse: '[data-cy=toggle-emitente] .siagri-icon-arrow-right-xsmall',
        selectEmitente: '[data-cy=select-empresa]',
        listaEmitente: '[data-cy=select-empresa] .list__items',
        spanCpfCnpj: '[data-cy=cpf-cnpj-emitente] span',
        spanInscricaoEstadual: '[data-cy=inscricao-estadual] span',
        linkExibirEndereco: '.link',
        cep: '[data-test=exibicaoCep]',
        pais: '[data-test=exibicaoPais]',
        estado: '[data-test=exibicaoEstado]',
        municipio: '[data-test=exibicaoMunicipio]',
        bairro: '[data-test=exibicaoBairro]',
        complemento: '[data-test=exibicaoComplemento]',
        logradouro: '[data-test=exibicaoLogradouro]',
        numero: '[data-test=exibicaoNumero]'
    },
    notasFiscais: {
        collapse: '[data-cy=toggle-notas] .siagri-icon-arrow-right-xsmall',
        selectOrigemNotas: '[data-cy=select-origem-nota]',
        listaOrigemNotas: '[data-cy=select-origem-nota] .list__items',
        selectNotasFiscais: '[data-cy=select-notas-emitidas]',
        listaNotasFiscaisEmitidas: '[data-cy=select-notas-emitidas] .list__items',
        spanSerie: '[data-cy=toggle-notas] .mt-10',
        inputSerie: '[data-cy=input-serie-nota]',
        inputChaveAcesso: '[data-cy=input-chave-acesso]',
        buttonAddNota: '[data-cy=button-add-nota] .siagri-icon-plus-xsmall',
        buttonDeleteNota: '[data-cy=button-delete-nota] .siagri-icon-trash-alt'
    },
    veiculo: {
        collapse: '[data-cy=toggle-veiculo] .siagri-icon-arrow-right-xsmall',
        selectPlaca: '[data-cy=select-placa]',
        listaPlaca: '[data-cy=select-placa] .list__items',
        inputRenavam: '[data-cy=input-renavam] input',
        selectTipoCarroceria: '[data-cy=select-carroceria]',
        listaTipoCarroceria: '[data-cy=select-carroceria] .list__items',
        selectUfLicenciamento: '[data-cy=select-estado]',
        listaUfLicenciamento: '[data-cy=select-estado] .list__items',
        inputTara: '[data-cy=input-tara] input',
        inputCapacidadeKg: '[data-cy=input-capacidade-kg] input',
        inputCapacidadeM3: '[data-cy=input-capacidade-m3] input',
        selectTipoRodado: '[data-cy=select-tipo-rodado]',
        listaTipoRodado: '[data-cy=select-tipo-rodado] .list__items',
        radioProprietarioVeiculo: '[data-cy=toggle-proprietario] [aria-checked=true].is-active'
    },
    condutor: {
        collapse: '[data-cy=toggle-condutor] .siagri-icon-arrow-right-xsmall',
        selectCondutor: '[data-cy=select-condutor]',
        listaCondutor: '[data-cy=select-condutor] .list__items',
        buttonAddCondutor: '[data-cy=toggle-condutor] .siagri-icon-plus-xsmall',
        buttonDeleteCondutor: '[data-cy=toggle-condutor] .siagri-icon-trash-alt-xsmall'
    },
    reboque: {
        collapse: '[data-cy=toggle-reboque] .siagri-icon-arrow-right-xsmall',
        buttonAddReboque: '[data-cy=toggle-reboque] .siagri-icon-plus-xsmall',
        selectPlacaVeiculo: '[data-cy=toggle-reboque] [data-cy=select-placa]',
        listaPlacaVeiculo: '[data-cy=toggle-reboque] [data-cy=select-placa] .list__items',
        inputRenavam: '[data-cy=toggle-reboque] [data-cy=input-renavam] input',
        selectTipoCarroceria: '[data-cy=toggle-reboque] [data-cy=select-carroceria]',
        listaTipoCarroceria: '[data-cy=toggle-reboque] [data-cy=select-carroceria] .list__items',
        selectUfLicenciamento: '[data-cy=toggle-reboque] [data-cy=select-estado]',
        listaUfLicenciamento: '[data-cy=toggle-reboque] [data-cy=select-estado] .list__items',
        inputTara: '[data-cy=toggle-reboque] [data-cy=input-tara] input',
        inputCapacidadeKg: '[data-cy=toggle-reboque] [data-cy=input-capacidade-kg] input',
        inputCapacidadeM3: '[data-cy=toggle-reboque] [data-cy=input-capacidade-m3] input',
        radioProprietarioVeiculo: '[data-cy=toggle-reboque] [data-cy=toggle-proprietario]'
    },
    carregamento: {
        selectEstado: '[data-cy=select-estado-carregamento] .select',
        listaEstado: '[data-cy=select-estado-carregamento] .list__items',
        selectMunicipio: '[data-cy=select-municipio-carregamento]',
        municipioSelecionado: '[data-cy=select-municipio-carregamento] .selected',
        pesquisarMunicipio: '[data-cy=select-municipio-carregamento] [placeholder="Pesquisar"]',
        listaMunicipio: '[data-cy=select-municipio-carregamento] .list__items'
    },
    descarregamento: {
        selectEstado: '[data-cy=select-estado-descarregamento]',
        listEstado: '[data-cy=select-estado-descarregamento] .list__items',
        selectMunicipio: '[data-cy=select-municipio-descarregamento]',
        pesquisarMunicipio: '[data-cy=select-municipio-descarregamento] [placeholder="Pesquisar"]',
        listaMunicipio: '[data-cy=select-municipio-descarregamento] .list__items'
    },
    totaisDeCarga: {
        radioUnidadeMedida: '[data-cy=toggle-unidade-medida]',
        inputValorTotalCarga: '[data-cy=input-valor-total-carga] input',
        inputPesoBrutoTotal: '[data-cy=input-peso-bruto-total] input',
        spanTotalNfe: '[data-cy=span-total-nfe] span',
        spanUnidadeMedidaCarga: '[data-cy=span-unidade-medida-carga] span'
    }
}

export default locators
