const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - Existe Titulo By Operacao/{operacaoId}" verifica a existência de títulos em uma operação específica.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT1:</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'GET' para verificar a existência de títulos em uma operação por ID:
        <ul>
          <li><strong>CT1 - Existe Títulos na Operação (Falso):</strong> Verifica se não há títulos na operação especificada.</li>
        </ul>
        O teste valida o status da resposta, se a resposta é um booleano indicando a existência de títulos, e se o valor booleano corresponde ao esperado (false).
      </span>
    </div>
  `,
  Ct2: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "GET - Existe Titulo By Operacao/{operacaoId}" verifica a existência de títulos em uma operação específica.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste - CT2:</span>
      <span style="color: black;">
        Este teste realiza uma requisição do tipo 'GET' para verificar a existência de títulos em uma operação por ID:
        <ul>
          <li><strong>CT2 - Existe Títulos na Operação (Verdadeiro):</strong> Verifica se há títulos na operação especificada.</li>
        </ul>
        O teste valida o status da resposta, se a resposta é um booleano indicando a existência de títulos, e se o valor booleano corresponde ao esperado (true).
      </span>
    </div>
  `,
}

export default html;
