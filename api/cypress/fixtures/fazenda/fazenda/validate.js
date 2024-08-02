
const validateFazendaResponse = (response) => {
    const data = response.body.data;
    
    // Validar propriedades de nível superior
    expect(response.body.success).to.be.a('boolean');
    expect(data.ativo).to.be.a('boolean');
    expect(data.id).to.be.a('string');
    expect(data.nome).to.be.a('string');
    expect(data.latitude).to.be.a('number');
    expect(data.longitude).to.be.a('number');
    expect(data.codigo).to.be.a('number');
    
    // Validar propriedades do objeto pais
    expect(data.pais).to.be.an('object');
    expect(data.pais.id).to.be.a('string');
    expect(data.pais.descricao).to.be.a('string');
    
    // Validar propriedades do objeto estado
    expect(data.estado).to.be.an('object');
    expect(data.estado.id).to.be.a('string');
    expect(data.estado.descricao).to.be.a('string');
    expect(data.estado.sigla).to.be.a('string');
    
    // Validar propriedades do objeto municipio
    expect(data.municipio).to.be.an('object');
    expect(data.municipio.id).to.be.a('string');
    expect(data.municipio.descricao).to.be.a('string');
    
    // Validar propriedades do array fazendaMatriculas
    expect(data.fazendaMatriculas).to.be.an('array');
    data.fazendaMatriculas.forEach((matricula) => {
        expect(matricula).to.be.an('object');
        expect(matricula.id).to.be.a('string');
        
        // Validar propriedades do objeto empresa
        expect(matricula.empresa).to.be.an('object');
        expect(matricula.empresa.id).to.be.a('string');
        expect(matricula.empresa.nome).to.be.a('string');
        
        // Validar propriedades do objeto inscricaoEstadual dentro de empresa
        expect(matricula.empresa.inscricaoEstadual).to.be.an('object');
        expect(matricula.empresa.inscricaoEstadual.id).to.be.a('string');
        expect(matricula.empresa.inscricaoEstadual.descricao).to.be.a('string');
        expect(matricula.empresa.inscricaoEstadual.valor).to.be.a('string');
        expect(matricula.empresa.inscricaoEstadual.isento).to.be.a('boolean');
        expect(matricula.empresa.inscricaoEstadual.ativo).to.be.a('boolean');
        
        // Validar outras propriedades de fazendaMatricula
        expect(matricula.cafir).to.be.a('string');
        expect(matricula.caepf).to.be.a('string');
        expect(matricula.descricao).to.be.a('string');
        expect(matricula.codigo).to.be.a('number');
        
        // Validar fazendaMatriculaPessoaExploracoes como array
        expect(matricula.fazendaMatriculaPessoaExploracoes).to.be.an('array');
    });
};

module.exports = {
    validateFazendaResponse
};

