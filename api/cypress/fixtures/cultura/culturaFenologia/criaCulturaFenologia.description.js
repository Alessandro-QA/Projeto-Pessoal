const html = {
  Ct1: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "POST - /CulturaFenologia" cria fases fenológicas em uma cultura já existente.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'POST', criando 3 fases fenológicas para uma Cultura já existente. O response é validado para que o tipo de cada dado seja consistente. Por fim, os IDs da cultura e de uma das fases, assim como o response são salvos para uso futuro.</span>
      </div>
    `,
  Ct2: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "GET - /CulturaFenologia/fases/cultura/{idCultura}" obtém todas as fases fenológicas de uma cultura já existente, a partir do ID dessa cultura.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'GET', passando o ID de uma cultura específica. Em seguida, valida o conteúdo de cada fase obtida para que o tipo de cada dado seja consistente.</span>
      </div>
    `,
  Ct3: `
      <div>
        <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
        <span style="color: black;">A rota "PUT - /CulturaFenologia" altera fases fenológicas de uma cultura já existente.</span>
      </div>
      <br/>
      <div>
        <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
        <span style="color: black;">Este teste faz uma requisição do tipo 'PUT', alterando a descrição de uma fase existente. Em seguida, valida o conteúdo da fase obtida para que o tipo de cada dado seja consistente. Por fim, compara o response obtido na requisição com o payload atualizado para garantir que a edição de fato foi feita.</span>
      </div>
    `,
  Ct4: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "DELETE - /CulturaFenologia/{idFase}" apaga uma fase fenológica a partir do seu ID.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Este teste faz uma requisição do tipo 'DELETE', passando o ID de uma fase fenológica existente. Inicialmente o array de fases desse teste tinha 3 fases, portanto o teste verifica se ao final da requisição, o tamanho do array cai para 2.</span>
    </div>
  `,
  Ct5: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "DELETE - /CulturaFenologia/fases/cultura/{idCultura}" apaga todas as fases fenológicas de uma cultura já existente, a partir do ID da cultura.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">Este teste faz uma requisição do tipo 'DELETE', passando o ID de um Cultura existente. Em seguida verifica se ao final da requisição, o tamanho do array cai para 0, garantindo que todas as fases foram excluidas.</span>
    </div>
  `
}

export default html