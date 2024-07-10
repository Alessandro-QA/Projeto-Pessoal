const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota GET de UnidadeMedida permite a listagem das unidades de medida filtradas por tipo.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'GET' para listar as unidades de medida filtradas por um tipo específico.
        Um tipo é selecionado de forma aleatória entre os tipos disponíveis ('Unitario', 'Volume', 'Comprimento', 'Massa', 'Area', 'Climatica').
        A requisição é feita utilizando o tipo selecionado e os dados retornados pela API são validados para garantir que todos os itens possuem o tipo correto.
      </span>
    </div>
  `,
  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota GET de UnidadeMedida permite a listagem das unidades de medida filtradas por status inativo.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'GET' para listar as unidades de medida filtradas por status inativo.
        Os dados retornados pela API são validados para garantir que todos os itens possuem o status inativo.
      </span>
    </div>
  `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota GET de UnidadeMedida permite a listagem das unidades de medida filtradas pela descrição.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'GET' para listar as unidades de medida filtradas pela descrição.
        A requisição é feita utilizando a descrição fornecida e os dados retornados pela API são validados para garantir que todos os itens possuem a descrição correta.
      </span>
    </div>
  `,
  Ct4: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota GET de UnidadeMedida permite a listagem das unidades de medida filtradas pelo código.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'GET' para listar as unidades de medida filtradas pelo código.
        A requisição é feita utilizando o código fornecido e os dados retornados pela API são validados para garantir que todos os itens possuem o código correto.
      </span>
    </div>
  `
};

export default html;