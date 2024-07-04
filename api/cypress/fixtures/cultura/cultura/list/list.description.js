const html = {
  Ct1: `
<div>
  <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
  <span style="color: black;">A rota "GET - /Culturas/List" traz uma lista de todos as culturas existentes cadastradas, sem nenhum filtro.</span>
</div>
<br/>
<div>
  <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
  <span style="color: black;">Neste teste, a requisição get obtém todas as culturas existentes e verifica se o tipo dos dados confere.</span>
</div>
`,
Ct2: `
<div>
  <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
  <span style="color: black;">A rota "GET - /Culturas/List" traz uma lista de culturas a partir da descrição da mesma.</span>
</div>
<br/>
<div>
  <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
  <span style="color: black;">Neste teste, a requisição get passa como parâmetro a descrição de uma cultura, e obtém todas as culturas que possuem descrição equivalente. Por fim, verifica se o tipo dos dados confere.</span>
</div>
`,
Ct3: `
<div>
  <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
  <span style="color: black;">A rota "GET - /Culturas/List" traz uma lista de culturas a partir do nome científico da mesma.</span>
</div>
<br/>
<div>
  <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
  <span style="color: black;">Neste teste, a requisição get passa como parâmetro o nome científico de uma cultura, e obtém todas as culturas que possuem nome científico equivalente. Por fim, verifica se o tipo dos dados confere.</span>
</div>
`,
Ct4: `
<div>
  <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
  <span style="color: black;">A rota "GET - /Culturas/List" traz uma lista de culturas a partir de um Id.</span>
</div>
<br/>
<div>
  <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
  <span style="color: black;">Neste teste, a requisição get passa como parâmetro o Id de uma cultura, e obtém todas as culturas que possuem Id equivalente. Por fim, verifica se o tipo dos dados confere.</span>
</div>
`,
}

export default html

