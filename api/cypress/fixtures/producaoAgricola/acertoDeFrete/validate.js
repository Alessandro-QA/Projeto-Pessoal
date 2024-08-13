export const validateAcertoFreteResponse = (response) => {
    const { success, data } = response

    // Verifica se a resposta é bem-sucedida
    expect(success).to.be.true

    // Verifica os campos principais
    expect(data).to.have.property('id').that.is.a('string')
    expect(data).to.have.property('numero').that.is.a('number')
    expect(data).to.have.property('dataAcerto').that.is.a('string')
    expect(data).to.have.property('statusAcerto').that.is.a('number')

    // Verifica os campos do motorista
    expect(data.motorista).to.have.property('id').that.is.a('string')
    expect(data.motorista).to.have.property('documentoPrincipal').that.is.a('string')
    expect(data.motorista).to.have.property('inscricaoEstadual').that.is.a('string')
    expect(data.motorista).to.have.property('descricao').that.is.a('string')

    // Verifica os campos do veículo
    expect(data.veiculo).to.have.property('id').that.is.a('string')
    expect(data.veiculo).to.have.property('placa').that.is.a('string')

    // Verifica os campos de valores
    expect(data).to.have.property('tipoValorManual').that.is.a('number')
    expect(data).to.have.property('valorManual').that.is.a('number')
    expect(data).to.have.property('valorTotal').that.is.a('number')

    // Verifica os romaneios (array pode ser vazio)
    expect(data).to.have.property('romaneios').that.is.an('array')
    if (data.romaneios.length > 0) {
        data.romaneios.forEach(romaneio => {
            expect(romaneio).to.have.property('id').that.is.a('string')
            expect(romaneio).to.have.property('valor').that.is.a('number')
            expect(romaneio).to.have.property('ticket').that.is.a('number')
            expect(romaneio).to.have.property('data').that.is.a('string')
            expect(romaneio).to.have.property('origem').that.is.an('object')
            expect(romaneio.origem).to.have.property('id').that.is.a('string')
            expect(romaneio.destino).to.have.property('id').that.is.a('string')
            expect(romaneio.destino).to.have.property('descricao').that.is.a('string')
            expect(romaneio.motorista).to.have.property('id').that.is.a('string')
            expect(romaneio.motorista).to.have.property('documentoPrincipal').that.is.a('string')
            expect(romaneio.veiculo).to.have.property('id').that.is.a('string')
            expect(romaneio.veiculo).to.have.property('placa').that.is.a('string')
            expect(romaneio).to.have.property('quantidadePesagem').that.is.a('number')
            expect(romaneio).to.have.property('tipo').that.is.a('number')
            expect(romaneio).to.have.property('possuiRomaneio').that.is.a('boolean')
        })
    }

    // Verifica as despesas (array pode ser vazio)
    expect(data).to.have.property('despesas').that.is.an('array')
    if (data.despesas.length > 0) {
        data.despesas.forEach(despesa => {
            expect(despesa).to.have.property('id').that.is.a('string')
            expect(despesa).to.have.property('acertoFreteId').that.is.a('string')
            expect(despesa).to.have.property('documentoId').that.is.a('string')
            expect(despesa).to.have.property('valor').that.is.a('number')
            expect(despesa).to.have.property('numero').that.is.a('string')
            expect(despesa).to.have.property('data').that.is.a('string')
            expect(despesa.pessoa).to.have.property('documentoPrincipal').that.is.a('string')
            expect(despesa.operacao).to.have.property('id').that.is.a('string')
            expect(despesa.operacao).to.have.property('descricao').that.is.a('string')

            // Verifica os detalhes dentro das despesas
            expect(despesa).to.have.property('detalhes').that.is.an('array')
            despesa.detalhes.forEach(detalhe => {
                expect(detalhe).to.have.property('valor').that.is.a('number')
                expect(detalhe).to.have.property('saldo').that.is.a('number')
                expect(detalhe).to.have.property('status').that.is.a('number')
            })
        })
    }
}