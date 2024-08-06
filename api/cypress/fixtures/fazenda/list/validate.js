const validateFazendaListResponse = (response) => {
    // Verifica se a resposta é um array
    expect(response.body).to.be.an('array');
    
    response.body.forEach((fazenda) => {
        // Valida propriedades de nível superior da fazenda
        expect(fazenda).to.be.an('object');
        expect(fazenda.ativo).to.be.a('boolean');
        expect(fazenda.id).to.be.a('string');
        expect(fazenda.nome).to.be.a('string');
        expect(fazenda.latitude).to.be.a('number');
        expect(fazenda.longitude).to.be.a('number');
        expect(fazenda.codigo).to.be.a('number');
        
        // Valida propriedades do objeto pais
        expect(fazenda.pais).to.be.an('object');
        expect(fazenda.pais.id).to.be.a('string');
        expect(fazenda.pais.descricao).to.be.a('string');
        
        // Valida propriedades do objeto estado
        expect(fazenda.estado).to.be.an('object');
        expect(fazenda.estado.id).to.be.a('string');
        expect(fazenda.estado.descricao).to.be.a('string');
        expect(fazenda.estado.sigla).to.be.a('string');
        
        // Valida propriedades do objeto municipio
        expect(fazenda.municipio).to.be.an('object');
        expect(fazenda.municipio.id).to.be.a('string');
        expect(fazenda.municipio.descricao).to.be.a('string');
        expect(fazenda.municipio.codigo).to.be.a('number');
        
        // Valida propriedades do array inscricoesEstaduais
        expect(fazenda.inscricoesEstaduais).to.be.an('array');
        
        // Valida propriedades do array fazendaMatriculas
        expect(fazenda.fazendaMatriculas).to.be.an('array');
        fazenda.fazendaMatriculas.forEach((matricula) => {
            expect(matricula).to.be.an('object');
            expect(matricula.id).to.be.a('string');
            
            // Valida propriedades do objeto empresa
            expect(matricula.empresa).to.be.an('object');
            expect(matricula.empresa.id).to.be.a('string');
            expect(matricula.empresa.nome).to.be.a('string');
            
            // Valida propriedades do objeto inscricaoEstadual dentro de empresa
            expect(matricula.empresa.inscricaoEstadual).to.be.an('object');
            expect(matricula.empresa.inscricaoEstadual.id).to.be.a('string');
            expect(matricula.empresa.inscricaoEstadual.descricao).to.be.a('string');
            expect(matricula.empresa.inscricaoEstadual.valor).to.be.a('string');
            expect(matricula.empresa.inscricaoEstadual.isento).to.be.a('boolean');
            expect(matricula.empresa.inscricaoEstadual.ativo).to.be.a('boolean');
            
            // Valida outras propriedades de fazendaMatricula
            expect(matricula.cafir).to.be.a('string');
            expect(matricula.caepf).to.be.a('string');
            expect(matricula.descricao).to.be.a('string');
            expect(matricula.codigo).to.be.a('number');
            
            // Valida fazendaMatriculaPessoaExploracoes como array
            expect(matricula.fazendaMatriculaPessoaExploracoes).to.be.an('array');
        });
    });
};

module.exports = { validateFazendaListResponse };