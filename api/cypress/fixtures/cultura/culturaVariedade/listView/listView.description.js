const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - /CulturaVariedade/ListView" faz uma requisição para listar variedades a partir de um payload.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'post', passando um payload que define página e quantidade de valores a serem listados, além de outros parâmetros, e retorna uma lista de todas as variedades correspondentes e seus respectivos dados. Por fim, o teste valida se o tipo de cada dado retornado é o esperado.</span>
      </div>
    `,
}

export default html