const html = {
    Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - Fazendas/ListagemFazendas" recupera a lista de fazendas ativas do sistema.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
        <span style="color: black;">
          Este teste realiza uma requisição 'GET' para buscar todas as fazendas ativas. O teste verifica se a resposta da API retorna um status '200' 
          e se o corpo da resposta é um array. Para cada fazenda no array, o teste valida que as propriedades 'ativo', 'id', 'nome' e 'quantidadeTalhoes' 
          estão presentes e são do tipo correto.
        </span>
      </div>
    `,
  };
  
  export default html;
  