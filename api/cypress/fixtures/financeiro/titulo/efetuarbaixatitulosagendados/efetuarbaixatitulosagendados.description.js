const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "POST - Efetuar Baixa Titulos Agendados" é usada para efetuar a baixa de títulos agendados.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">
        Este teste faz uma série de ações para garantir que a funcionalidade de baixa de títulos agendados está funcionando corretamente:
        <ul>
          <li>Cria um documento.</li>
          <li>Gera uma agenda para o documento criado.</li>
          <li>Agenda o título em questão.</li>
          <li>Chama a rota para efetuar a baixa dos títulos agendados.</li>
          <li>Verifica se a baixa foi efetuada corretamente.</li>
        </ul>
        Este fluxo garante que todas as etapas necessárias para a baixa de títulos agendados sejam validadas.
      </span>
    </div>
  `
};

export default html