const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - /CulturaVariedade/Count" busca pela quantidade de registros a serem retornados na requisição.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'post', passando um payload genérico, e retorna um valor que corresponde a quantidade de variedades existentes na busca. A validação verifica se o corpo da resposta equivale a um número.</span>
      </div>
    `,
}

export default html