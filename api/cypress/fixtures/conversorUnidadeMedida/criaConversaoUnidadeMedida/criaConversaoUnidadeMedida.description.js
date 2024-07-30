const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - /ConversorUnidadeMedida" cadastra uma configuração de conversão entre unidades de medida, informando uma unidade-base, uma unidade-destino e um fator de conversão.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'POST' passando uma Unidade de Medida Base, uma Unidade de Medida Destino e o fator de conversão entre essas unidades, e obtém como resposta os dados gravados no cadastro. São feitas validações quanto ao tipo de cada dado retornado no response. </span>
      </div>
    `,
    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "PUT - /ConversorUnidadeMedida" edita uma configuração de conversão entre unidades de medida, podendo-se alterar a unidade-base, a unidade-destino ou o fator de conversão.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'PUT' alterando a Unidade de Medida Base e o fator de conversão, e obtém como resposta os dados gravados no cadastro. São feitas validações quanto ao tipo de cada dado retornado no response e verificado se os dados editados foram persistidos. </span>
      </div>
    `,
    Ct3: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - /ConversorUnidadeMedida/{id}" obtém uma conversão existente que já esteja configurada, a partir de um ID.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'GET' passando o ID de uma conversão entre unidades específica, e obtém como resposta os dados gravados no cadastro desse ID. São feitas validações quanto ao tipo de cada dado retornado no response. </span>
      </div>
    `,
    Ct4: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - /ConversorUnidadeMedida" obtém todas as conversões configuradas existentes.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'GET' para obter um array dos dados gravados no cadastro de cada conversão existente. São feitas validações quanto ao tipo de cada dado retornado no response. </span>
      </div>
    `,
    Ct5: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "DELETE - /ConversorUnidadeMedida/{id}" apaga uma conversão existente, a partir de um ID.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Este teste faz uma requisição do tipo 'DELETE' passando o ID de uma conversão entre unidades específica, e verifica se a resposta obtida foi 'True', confirmando a exclusão.</span>
    </div>
  `
}

export default html