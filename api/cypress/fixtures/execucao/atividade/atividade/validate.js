export const validateAtividade = (response) => {
    // Validar os tipos de campo da resposta
    const responseBody = response.body

    // Validar o campo "success"
    expect(responseBody).to.have.property('success').that.is.a('boolean')
    expect(responseBody.success).to.equal(true)

    const data = responseBody.data

    // Validar campos de data
    expect(data).to.have.property('id').that.is.a('string')
    expect(data).to.have.property('dataPrevistaInicial').that.is.a('string')
    expect(data).to.have.property('dataPrevistaFinal').that.is.a('string')

    // Validar campos de status e percentual
    expect(data).to.have.property('status').that.is.a('string')
    expect(data).to.have.property('atividadeExecutada').that.is.a('boolean')
    expect(data).to.have.property('percentualConclusao').that.is.a('number')

    // Validar campo de observação e planejamento
    expect(data).to.have.property('observacao').that.is.a('string')
    expect(data).to.have.property('planejamentoAtividadeId').that.is.null

    // Validar campo de tipo de atividade
    expect(data).to.have.property('tipoAtividade').that.is.an('object')
    expect(data.tipoAtividade).to.have.property('id').that.is.a('string')
    expect(data.tipoAtividade).to.have.property('descricao').that.is.a('string')

    // Validar campo de atividade
    expect(data).to.have.property('atividade').that.is.an('object')
    expect(data.atividade).to.have.property('id').that.is.a('string')
    expect(data.atividade).to.have.property('descricao').that.is.a('string')

    // Validar campo de safra
    expect(data).to.have.property('safra').that.is.an('object')
    expect(data.safra).to.have.property('id').that.is.a('string')
    expect(data.safra).to.have.property('descricao').that.is.a('string')

    // Validar campo de ciclo
    expect(data).to.have.property('ciclo').that.is.an('object')
    expect(data.ciclo).to.have.property('id').that.is.a('string')
    expect(data.ciclo).to.have.property('descricao').that.is.a('string')
    expect(data.ciclo).to.have.property('icone').that.is.a('string')
    expect(data.ciclo).to.have.property('descricaoCultura').that.is.a('string')

    // Validar campo de fazenda
    expect(data).to.have.property('fazenda').that.is.an('object')
    expect(data.fazenda).to.have.property('id').that.is.a('string')
    expect(data.fazenda).to.have.property('descricao').that.is.a('string')

    // Validar campo de talhão
    expect(data).to.have.property('talhao').that.is.an('object')
    expect(data.talhao).to.have.property('id').that.is.a('string')
    expect(data.talhao).to.have.property('descricao').that.is.a('string')
    expect(data.talhao).to.have.property('area').that.is.a('number')
    expect(data.talhao).to.have.property('urlImagem').that.is.a('string')

    // Validar campo de área aplicada
    expect(data).to.have.property('areaAplicada').that.is.a('number')

    // Validar campo de máquinas
    expect(data).to.have.property('maquinas').that.is.an('array')
    data.maquinas.forEach((maquina) => {
        expect(maquina).to.have.property('id').that.is.a('string')
        expect(maquina).to.have.property('maquina').that.is.an('object')
        expect(maquina.maquina).to.have.property('id').that.is.a('string')
        expect(maquina.maquina).to.have.property('descricao').that.is.a('string')
        expect(maquina).to.have.property('implemento').that.is.an('object')
        expect(maquina.implemento).to.have.property('id').that.is.a('string')
        expect(maquina.implemento).to.have.property('descricao').that.is.null
        expect(maquina).to.have.property('medidor').that.is.an('object')
        expect(maquina.medidor).to.have.property('tipo').that.is.a('string')
        expect(maquina.medidor).to.have.property('inicial').that.is.a('number')
        expect(maquina.medidor).to.have.property('final').that.is.a('number')
        expect(maquina).to.have.property('classificacaoBemId').that.is.a('string')
    })

    // Validar campo de responsáveis
    expect(data).to.have.property('responsaveis').that.is.an('array')
    data.responsaveis.forEach((responsavel) => {
        expect(responsavel).to.have.property('id').that.is.a('string')
        expect(responsavel).to.have.property('responsavel').that.is.an('object')
        expect(responsavel.responsavel).to.have.property('id').that.is.a('string')
        expect(responsavel.responsavel).to.have.property('nome').that.is.a('string')
        expect(responsavel.responsavel).to.have.property('urlImagem').that.is.null
        expect(responsavel).to.have.property('horasTrabalhadas').that.is.a('number')
    })

    // Validar campo de insumos
    expect(data).to.have.property('insumos').that.is.an('array')
    data.insumos.forEach((insumo) => {
        expect(insumo).to.have.property('id').that.is.a('string')
        expect(insumo).to.have.property('quantidade').that.is.a('number')
        expect(insumo).to.have.property('material').that.is.an('object')
        expect(insumo.material).to.have.property('id').that.is.a('string')
        expect(insumo.material).to.have.property('descricao').that.is.a('string')
        expect(insumo).to.have.property('unidadeMedida').that.is.an('object')
        expect(insumo.unidadeMedida).to.have.property('id').that.is.a('string')
        expect(insumo.unidadeMedida).to.have.property('nomeNormalizado').that.is.a('string')
        expect(insumo).to.have.property('unidadeArmazenamento').that.is.an('object')
        expect(insumo.unidadeArmazenamento).to.have.property('id').that.is.a('string')
        expect(insumo.unidadeArmazenamento).to.have.property('descricao').that.is.a('string')
    })
}