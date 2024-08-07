const html = {
  Ct1: `
  <div>
    <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
    <span style="color: black;">A rota "PUT - Atribuir Atividades" atribui atividades para uma Execução já criada.</span>
  </div>
  <br/>
  <div>
    <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
    <span style="color: black;">
      Este teste realiza uma requisição 'PUT' para atribuir atividades agrícolas utilizando um payload específico.
      Verifica se a API retorna um status '200' e valida diversos campos da resposta, como 'success', 'atividadesAgricolas', 'maquinas', 'responsaveis', datas previstas e 'unidadeArmazenamento'.
    </span>
  </div>
`,

Ct2: `
  <div>
    <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
    <span style="color: black;">A rota "PUT - Excluir Atividade Atribuída" exclui as atividades agrícola já atribuídas a uma execução.</span>
  </div>
  <br/>
  <div>
    <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
    <span style="color: black;">
      Este teste realiza uma requisição 'PUT' para excluir uma atividade agrícola atribuída utilizando um parâmetro específico.
      Verifica se a API retorna um status '200' e se o corpo da resposta contém a propriedade 'success' com valor 'true'.
    </span>
  </div>
`,
}

export default html