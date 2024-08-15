function validateFazenda(fazenda) {
    expect(fazenda).to.have.property('ativo').that.is.a('boolean');
    expect(fazenda).to.have.property('id').that.is.a('string');
    expect(fazenda).to.have.property('nome').that.is.a('string');
    expect(fazenda).to.have.property('latitude').that.is.a('number');
    expect(fazenda).to.have.property('longitude').that.is.a('number');
    expect(fazenda).to.have.property('codigo').that.is.a('number');

    // Validar o objeto pais, se existir
    if (fazenda.pais) {
        expect(fazenda.pais).to.be.an('object');
        expect(fazenda.pais).to.have.property('id').that.is.a('string');
        expect(fazenda.pais).to.have.property('descricao').that.is.a('string');
    } else {
        expect(fazenda).to.not.have.property('pais');
    }

    // Validar o objeto estado, se existir
    if (fazenda.estado) {
        expect(fazenda.estado).to.be.an('object');
        expect(fazenda.estado).to.have.property('id').that.is.a('string');
        expect(fazenda.estado).to.have.property('descricao').that.is.a('string');
        expect(fazenda.estado).to.have.property('sigla').that.is.a('string');
    }

    // Validar o objeto municipio, se existir
    if (fazenda.municipio) {
        expect(fazenda.municipio).to.be.an('object');
        expect(fazenda.municipio).to.have.property('id').that.is.a('string');
        expect(fazenda.municipio).to.have.property('descricao').that.is.a('string');
        expect(fazenda.municipio).to.have.property('codigo').that.is.a('number');
    }

    // Validar o array inscricoesEstaduais
    expect(fazenda.inscricoesEstaduais).to.be.an('array');
    fazenda.inscricoesEstaduais.forEach((inscricao) => {
        expect(inscricao).to.have.property('id').that.is.a('string');
        expect(inscricao).to.have.property('empresaNome').that.is.a('string');
        expect(inscricao).to.have.property('empresaId').that.is.a('string');
        expect(inscricao).to.have.property('documentoPrincipal').that.is.a('string');
        expect(inscricao.inscricaoEstadual).to.be.an('object');
        expect(inscricao.inscricaoEstadual).to.have.property('id').that.is.a('string');
        expect(inscricao.inscricaoEstadual).to.have.property('valor').that.is.a('string');
        expect(inscricao.inscricaoEstadual).to.have.property('isento').that.is.a('boolean');
        expect(inscricao.inscricaoEstadual).to.have.property('ativo').that.is.a('boolean');
        expect(inscricao).to.have.property('deleted').that.is.a('boolean');
    });

    // Validar o array fazendaMatriculas
    expect(fazenda.fazendaMatriculas).to.be.an('array');
    fazenda.fazendaMatriculas.forEach((matricula) => {
        expect(matricula).to.have.property('id').that.is.a('string');
        expect(matricula).to.have.property('empresa').that.is.an('object');
        expect(matricula.empresa).to.have.property('id').that.is.a('string');
        expect(matricula.empresa).to.have.property('nome').that.is.a('string');
        expect(matricula.empresa.inscricaoEstadual).to.be.an('object');
        expect(matricula.empresa.inscricaoEstadual).to.have.property('id').that.is.a('string');
        expect(matricula.empresa.inscricaoEstadual).to.have.property('descricao').that.is.a('string');
        expect(matricula.empresa.inscricaoEstadual).to.have.property('valor').that.is.a('string');
        expect(matricula.empresa.inscricaoEstadual).to.have.property('isento').that.is.a('boolean');
        expect(matricula.empresa.inscricaoEstadual).to.have.property('ativo').that.is.a('boolean');
        expect(matricula).to.have.property('tipoExploracao').that.is.a('number');
        expect(matricula).to.have.property('cafir').that.is.a('string');
        expect(matricula).to.have.property('caepf').that.is.a('string');
        expect(matricula).to.have.property('descricao').that.is.a('string');
        expect(matricula).to.have.property('codigo').that.is.a('number');
        expect(matricula).to.have.property('fazendaMatriculaPessoaExploracoes').that.is.an('array');
    });
}

module.exports = { validateFazenda };
