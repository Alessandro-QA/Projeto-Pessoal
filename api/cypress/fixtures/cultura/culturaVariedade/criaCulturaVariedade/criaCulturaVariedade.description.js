const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - /CulturaVariedade" cria uma nova Variedade.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'post', criando uma nova Variedade com descrição, nome científico e demais informações.</span>
      </div>
    `,
    Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "PUT - /CulturaVariedade" edita uma Variedade já existente.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'put' e altera dados de descrição e nome científico de uma Variedade, e atualiza o registro.</span>
      </div>
    `,
    Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - /CulturaVariedade" traz uma lista de todos as Variedades existentes cadastradas, sem nenhum filtro.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Neste teste, a requisição get obtém todas as Variedades existentes e verifica se o tipo dos dados confere.</span>
    </div>
  `,
  Ct4: `
   <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - /CulturaVariedade/{id}" busca por uma Variedade específica a partir de seu ID.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Neste teste, a requisição get obtém a Variedade correspondente ao id especificado e verifica se o tipo dos dados confere.</span>
    </div>
  `,
  Ct5: `
  <div>
     <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
     <span style="color: black;">A rota "DELETE - /CulturaVariedade/{id}" apaga uma Variedade específica a partir de seu Id.</span>
   </div>
   <br/>
   <div>
     <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
     <span style="color: black;">Neste teste, a requisição exclui a Variedade correspondente ao id especificado, isso para que na próxima execução não hajam problemas com Variedades já criadas com os mesmos dados.</span>
   </div>
 `,
}

export default html