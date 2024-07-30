const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - /ConversorUnidadeMedida/{UnidadeMedidaConvertidaId}/List" lista todas as conversões existentes para uma determinada Unidade de Medida Destino, a partir de seu ID.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'GET' passando o ID de uma Unidade de Medida Destino, e obtém como resposta os dados de cada conversão correspondente. São feitas validações quanto ao tipo de cada dado retornado no response. </span>
      </div>
    `,
}

export default html