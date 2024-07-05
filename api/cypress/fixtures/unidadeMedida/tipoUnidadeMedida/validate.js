//Validação para os Campos de Unidade

function validate(data) {
    expect(data).to.have.property('id').that.is.a('string');
    expect(data).to.have.property('descricao').that.is.a('string');
    expect(data).to.have.property('codigo').that.is.a('string');
    expect(data).to.have.property('tipo').that.is.a('string');
    expect(data).to.have.property('ativo').that.is.a('boolean');
  }
  

  module.exports = {
    validate,
  };