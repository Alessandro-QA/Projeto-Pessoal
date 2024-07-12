const locators = {
    dashboard: {
        titulo:'#root-cnx-header-title-div-culturas-e-fenologia > .dark',
        adicionarCultura:'.container-card-item > .el-button > span',
        pesquisar:'.el-input__inner',
        editarCultura:':nth-child(1) > .el-card > .el-card__body > .row-button > .footer-card > .el-button > :nth-child(1) > span',
        conteinerCultura: '.body-container',
        siagriLoader: '.siagri-loader'
    },

    cadastroCultura: {
        nomeCultura:'div[data-v-b64b91a0] .el-input input[name="descricao"]',
        iconeCultura:'.el-select__caret',
        listaIconesCultura: '.el-select-dropdown__list .el-select-dropdown__item',
        nomeCientifico:'.el-col-24 > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
        unidadeMedida:'.el-form-item__content > .select > .selected',
        buscaUnidadeMedida: '.filter > input',
        materialColheita:'[data-v-b64b91a0=""] > .select > .selected',
        buscaMaterialColheita: '[data-v-b64b91a0=""] > .select > .list > .filter > input',
        botaoAvancar:'[data-cy="footer-cultura"] > .el-button--primary',
        botaoCancelar:'[data-cy="footer-cultura"] > .el-button--secondary > span',
        carregarMaterial:'.select > .el-loading-mask > .el-loading-spinner'
    },

    cadastroFenologia:{
        adicionarFase: '.fase-header-item > .el-button > span',
        excluirFase:'.btn-delete > :nth-child(2) > span',
        editarFase:'.gruop-button > .btn-secondary > :nth-child(1) > span',
        nomeFase:'div[data-v-05731b59] .el-input input[name="descricao"]',
        iconeFase:'.el-select__caret',
        listaIconesFase:'.el-select-dropdown.el-popper .el-select-dropdown__list .el-select-dropdown__item',
        codigoEstadio:'.el-col-6 > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
        descricaoEstadio:'.el-col-16 > .el-form-item > .el-form-item__content > .el-input > .el-input__inner',
        adicionarEstadio:'.el-col > .el-card > .el-card__body > .flex-center',
        excluirEstadio:'.el-tooltip > .el-button > .siagri-icon-trash-alt-xsmall',
        salvarEstadio:'#myDiv-0 > .footer-button > .el-button--primary > span',
        cancelarFase:'#myDiv-0 > .footer-button > .el-button--secondary > span',
        botaoVoltar:'[data-cy="footer-cultura"] > .el-button--secondary > span',
        botaoConcluir:'[data-cy="footer-cultura"] > .el-button--primary', 
    }
  }
  
  export default locators
  