export const validateOperacao = (operacao) => {
    expect(operacao).to.have.property('id').that.is.a('string');
    expect(operacao).to.have.property('descricao').that.is.a('string');
};

export const validateFornecedor = (fornecedor) => {
    expect(fornecedor).to.have.property('documentoPrincipal').that.is.a('string');
    expect(fornecedor).to.have.property('id').that.is.a('string');
    expect(fornecedor).to.have.property('descricao').that.is.a('string');
};

export const validateSafra = (safra) => {
    expect(safra).to.have.property('id').that.is.a('string');
    expect(safra).to.have.property('descricao').that.is.a('string');
};

export const validateEmpresa = (empresa) => {
    expect(empresa).to.have.property('inscricaoEstadual').that.is.an('object');
    expect(empresa.inscricaoEstadual).to.have.property('id').that.is.a('string');
    expect(empresa.inscricaoEstadual).to.have.property('descricao').that.is.a('string');
    expect(empresa.inscricaoEstadual).to.have.property('valor').that.is.a('string');
    expect(empresa.inscricaoEstadual).to.have.property('isento').that.is.a('boolean');
    expect(empresa).to.have.property('empresaDeSaoPaulo').that.is.a('boolean');
    expect(empresa).to.have.property('id').that.is.a('string');
    expect(empresa).to.have.property('descricao').that.is.a('string');
    expect(empresa).to.have.property('codigo').that.is.a('null');
};

export const validateFazenda = (fazenda) => {
    expect(fazenda).to.have.property('id').that.is.a('string');
    expect(fazenda).to.have.property('descricao').that.is.a('string');
};

export const validateFinanceiro = (financeiro) => {
    expect(financeiro).to.have.property('formaPagamento').that.is.an('object');
    expect(financeiro.formaPagamento).to.have.property('id').that.is.a('string');
    expect(financeiro.formaPagamento).to.have.property('descricao').that.is.a('string');
    expect(financeiro).to.have.property('quantidadeParcelas').that.is.a('number');
    expect(financeiro).to.have.property('valorFixo').that.is.a('boolean');
    expect(financeiro).to.have.property('contaFornecedor').that.is.a('null');
    expect(financeiro).to.have.property('tipoTransferencia').that.is.a('null');
    expect(financeiro).to.have.property('parcelas').that.is.an('array');

    if (financeiro.parcelas.length > 0) {
        const parcela = financeiro.parcelas[0];
        expect(parcela).to.have.property('valor').that.is.a('number');
        expect(parcela).to.have.property('valorAlternativo').that.is.a('null');
        expect(parcela).to.have.property('vencimento').that.is.a('string');
        expect(parcela).to.have.property('numeroBoleto').that.is.a('null');
        expect(parcela).to.have.property('moeda').that.is.a('null');
        expect(parcela).to.have.property('moedaAlternativa').that.is.a('null');
        expect(parcela).to.have.property('cotacao').that.is.a('null');
    }
};

export const validateRateioCategorias = (rateioCategorias) => {
    expect(rateioCategorias).to.be.an('array');
    rateioCategorias.forEach((rateioCategoria) => {
        expect(rateioCategoria).to.have.property('contaContabil').that.is.an('object');
        expect(rateioCategoria.contaContabil).to.have.property('codigo').that.is.a('string');
        expect(rateioCategoria.contaContabil).to.have.property('descricao').that.is.a('string');
        expect(rateioCategoria.contaContabil).to.have.property('dedutivel').that.is.a('boolean');
        expect(rateioCategoria).to.have.property('percentual').that.is.a('number');
        expect(rateioCategoria).to.have.property('valor').that.is.a('number');
    });
};

export const validateData = (data) => {
    expect(data).to.have.property('id').that.is.a('string');
    validateOperacao(data.operacao);
    expect(data).to.have.property('tipoDocumento').that.is.a('number');
    expect(data).to.have.property('numeroNotaFiscal').that.is.a('number');
    expect(data).to.have.property('serieNotaFiscal').that.is.a('number');
    expect(data).to.have.property('dedutivel').that.is.a('boolean');
    expect(data).to.have.property('dataEmissaoNotaFiscal').that.is.a('string');
    validateFornecedor(data.fornecedor);
    validateSafra(data.safra);
    expect(data).to.have.property('data').that.is.a('string');
    validateEmpresa(data.empresa);
    validateFazenda(data.fazenda);
    expect(data).to.have.property('moedaAlternativa').that.is.a('null');
    expect(data).to.have.property('isRecebimentoMultiMoeda').that.is.a('boolean');
    expect(data).to.have.property('cotacao').that.is.a('null');
    expect(data).to.have.property('total').that.is.a('number');
    expect(data).to.have.property('totalAlternativo').that.is.a('null');
    expect(data).to.have.property('observacao').that.is.a('null');
    expect(data).to.have.property('tags').that.is.an('array');
    expect(data).to.have.property('recebimentoMateriais').that.is.an('array');

    if (data.recebimentoMateriais.length > 0) {
        const recebimentoMaterial = data.recebimentoMateriais[0];
        expect(recebimentoMaterial).to.have.property('id').that.is.a('string');
        expect(recebimentoMaterial).to.have.property('recebimentoId').that.is.a('string');
        expect(recebimentoMaterial).to.have.property('unidadeMedida').that.is.an('object');
        expect(recebimentoMaterial.unidadeMedida).to.have.property('codigo').that.is.a('null');
        expect(recebimentoMaterial.unidadeMedida).to.have.property('id').that.is.a('string');
        expect(recebimentoMaterial.unidadeMedida).to.have.property('descricao').that.is.a('string');
        expect(recebimentoMaterial).to.have.property('material').that.is.an('object');
        expect(recebimentoMaterial.material).to.have.property('gtin').that.is.a('null');
        expect(recebimentoMaterial.material).to.have.property('tipoMaterial').that.is.a('null');
        expect(recebimentoMaterial.material).to.have.property('id').that.is.a('string');
        expect(recebimentoMaterial.material).to.have.property('descricao').that.is.a('string');
        expect(recebimentoMaterial).to.have.property('quantidade').that.is.a('number');
        expect(recebimentoMaterial).to.have.property('valorUnitario').that.is.a('number');
        expect(recebimentoMaterial).to.have.property('valorUnitarioAlternativo').that.is.a('number');
        expect(recebimentoMaterial).to.have.property('desconto').that.is.a('number');
        expect(recebimentoMaterial).to.have.property('unidadeArmazenamento').that.is.an('array');

        if (recebimentoMaterial.unidadeArmazenamento.length > 0) {
            const unidadeArmazenamento = recebimentoMaterial.unidadeArmazenamento[0];
            expect(unidadeArmazenamento).to.have.property('id').that.is.a('string');
            expect(unidadeArmazenamento).to.have.property('recebimentoMaterialId').that.is.a('string');
            expect(unidadeArmazenamento).to.have.property('unidadeArmazenamentoId').that.is.a('string');
            expect(unidadeArmazenamento).to.have.property('unidadeArmazenamentoDescricao').that.is.a('string');
        }
    }

    validateFinanceiro(data.financeiro);
    validateRateioCategorias(data.rateioCategorias);
    expect(data).to.have.property('rateioCiclos').that.is.an('array');
    expect(data).to.have.property('anexos').that.is.an('array');
    expect(data).to.have.property('recebimentoNota').that.is.a('boolean');
    expect(data).to.have.property('vinculos').that.is.an('array');
    expect(data).to.have.property('recebimentoMaterialAplicacaoImediatas').that.is.an('array');
    expect(data).to.have.property('movimentaEstoque').that.is.a('boolean');
    expect(data).to.have.property('movimentaDocumento').that.is.a('boolean');
    expect(data).to.have.property('geraTributos').that.is.a('boolean');
    expect(data).to.have.property('documentoItem').that.is.a('boolean');
};