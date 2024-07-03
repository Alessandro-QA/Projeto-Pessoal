const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota POST de RECEBIMENTOS realiza o recebimento de Suprimentos gerando também um documentos para o mesmo</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'POST' para cadastrar um recebimento definido em Fixtures.
        Após criação do recebimento é copiado o ID do gerado para testes posteriores e então verificado cada campo se possuem as propriedades corretamente de acordo o cadastrado
      </span>
    </div>
  `,
  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota PUT de RECEBIMENTOS realiza a atualização de dados de todo o rercebimento já cadastrado</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste</span>
      <span style="color: black;">
        Este teste atualiza as data de vencimento do documento de recebimento e datas de emissões do mesmo, alguns outros campos ficam bloqueados de edição após o envio. 
        Após a edição é validado se os campos atualizados receberam o devido valor e se os outros campos também se manteram conforme desejado.
      </span>
    </div>
  `,
  Ct3: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota PATCH de RECEBIMENTOS realiza a atualização de campos específicos do recebimento sem necessidade de passar um body com todos os campos novamente</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste</span>
      <span style="color: black;">
        Este teste atualiza os campos de números do recebimento como numeroNotaFiscal e serieNotaFiscal.
        Após a edição é validado se os campos atualizados receberam o devido valor e se os outros campos também se manteram conforme desejado.
      </span>
    </div>
  `,
  Ct4: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota GET de RECEBIMENTOS recupera todos os dados de um recebimento</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste</span>
      <span style="color: black;">
        Este teste recupera os dados do recebimento cadastrado e atualizado nos testes anteriores.
        Após o GET é validado se os campos atualizados receberam o devido valor, se passou pelas modificações e se os outros campos também se manteram conforme desejado, além do tipo e propriedade dos demais se possuem os dados que deveriam.
      </span>
    </div>
  `,
  Ct5: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota DELETE de RECEBIMENTOS faz a deleção de um recebimento pelo seu ID</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste</span>
      <span style="color: black;">
        Este teste DELETA o documento anterior, além de validar a rota é feito a limpeza de dados gerados após execução
      </span>
    </div>
  `
}

export default html;
