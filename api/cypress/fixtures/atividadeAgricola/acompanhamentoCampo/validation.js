/**
 * Valida um objeto de acompanhamento.
 * @param {Object} acompanhamento - O objeto de acompanhamento a ser validado.
 */
export function validateAcompanhamento(acompanhamento) {
    // Verifica o tipo das propriedades
    expect(acompanhamento.id).to.be.a('string');
    expect(acompanhamento.planejamentoSafraId).to.be.a('string');
    expect(acompanhamento.fazendaId).to.be.a('string');
    expect(acompanhamento.fazendaDescricao).to.be.a('string');
    expect(acompanhamento.safraId).to.be.a('string');
    expect(acompanhamento.safraDescricao).to.be.a('string');
    expect(acompanhamento.talhaoId).to.be.a('string');
    expect(acompanhamento.talhaoDescricao).to.be.a('string');
    expect(acompanhamento.area).to.be.a('number');
    expect(acompanhamento.culturaId).to.be.a('string');
    expect(acompanhamento.culturaDescricao).to.be.a('string');
    expect(acompanhamento.variedadeId).to.be.a('string');
    expect(acompanhamento.variedadeDescricao).to.be.a('string');
    expect(acompanhamento.cicloId).to.be.a('string');
    expect(acompanhamento.cicloDescricao).to.be.a('string');
    expect(acompanhamento.estadioFenologicoId).to.be.oneOf([null, 'string']); // Pode ser null ou string
    expect(acompanhamento.estadioFenologicoDescricao).to.be.oneOf([null, 'string']); // Pode ser null ou string
    expect(acompanhamento.pms).to.be.oneOf([null, 'number']); // Pode ser null ou number
    expect(acompanhamento.dataEmergencia).to.be.oneOf([null, 'string']); // Pode ser null ou string
    expect(acompanhamento.contagemPrevistaStand).to.be.oneOf([null, 'number']); // Pode ser null ou number
    expect(acompanhamento.contagemRealizadaStand).to.be.oneOf([null, 'number']); // Pode ser null ou number
    expect(acompanhamento.dae).to.be.a('number');
    expect(acompanhamento.variacaoStand).to.be.a('number');
    expect(acompanhamento.dataPlantioPrevisto).to.be.oneOf([null, 'string']); // Pode ser null ou string
    expect(acompanhamento.dataInicioPlantio).to.be.oneOf([null, 'string']); // Pode ser null ou string
    expect(acompanhamento.dataFimPlantio).to.be.oneOf([null, 'string']); // Pode ser null ou string
    expect(acompanhamento.produtividadeEstimada).to.be.a('number');
    expect(acompanhamento.dataColheitaPrevista).to.be.oneOf([null, 'string']); // Pode ser null ou string
    expect(acompanhamento.dataInicioColheita).to.be.oneOf([null, 'string']); // Pode ser null ou string
    expect(acompanhamento.dataFimColheita).to.be.oneOf([null, 'string']); // Pode ser null ou string
    expect(acompanhamento.porcentagemColhida).to.be.a('number');
    expect(acompanhamento.produtividadeMediaHa).to.be.a('number');
    expect(acompanhamento.produtividadeTotalEmSacas).to.be.a('number');
    expect(acompanhamento.cicloVariedade).to.be.a('number');
    expect(acompanhamento.espacamento).to.be.oneOf([null, 'number']); // Pode ser null ou number
    expect(acompanhamento.producaoPHa).to.be.a('number');
  }