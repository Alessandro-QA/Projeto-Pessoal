const html = {
    Ct1: `
  <div>
    <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
    <span style="color: black;">A rota "GET - /CulturaVariedade/List" traz uma lista de todos as variedades existentes cadastradas, sem nenhum filtro.</span>
  </div>
  <br/>
  <div>
    <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
    <span style="color: black;">Neste teste, a requisição get obtém todas as variedades existentes e verifica se o tipo dos dados confere.</span>
  </div>
  `,
  Ct2: `
  <div>
    <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
    <span style="color: black;">A rota "GET - /CulturaVariedade/List" traz uma lista de variedades a partir de descrição da mesma.</span>
  </div>
  <br/>
  <div>
    <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
    <span style="color: black;">Neste teste, a requisição get passa como parâmetro a descrição de uma cultura, e obtém todas as CulturaVariedade que possuem descrição equivalente. Por fim, verifica se o tipo dos dados confere.</span>
  </div>
  `,
  Ct3: `
  <div>
    <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
    <span style="color: black;">A rota "GET - /CulturaVariedade/List" traz uma lista de variedades a partir da descrição da mesma.</span>
  </div>
  <br/>
  <div>
    <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
    <span style="color: black;">Neste teste, a requisição get passa como parâmetro a descrição de uma cultura, e obtém todas as CulturaVariedade que possuem descrição equivalente. Por fim, verifica se o tipo dos dados confere.</span>
  </div>
  `,
  Ct4: `
  <div>
    <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
    <span style="color: black;">A rota "GET - /CulturaVariedade/List" traz uma lista de CulturaVariedade a partir do nome científico da mesma.</span>
  </div>
  <br/>
  <div>
    <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
    <span style="color: black;">Neste teste, a requisição get passa como parâmetro o nome científico de uma cultura, e obtém todas as CulturaVariedade que possuem nome científico equivalente. Por fim, verifica se o tipo dos dados confere.</span>
  </div>
  `,
  }
  
  export default html
  
  