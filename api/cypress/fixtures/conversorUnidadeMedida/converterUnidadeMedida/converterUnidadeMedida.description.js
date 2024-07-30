const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - /ConversorUnidadeMedida/ConverterUnidade" realiza a conversão entre unidades de medida, com base em uma unidade de origem, uma unidade de destino e um valor.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'POST' passando uma Unidade de Medida Origem, uma Unidade de Medida Destino e uma Quantidade, e obtém como resposta a quantidade convertida para a unidade destino. São feitas validações quanto ao tipo de cada dado retornado no response. </span>
      </div>
    `,
}

export default html