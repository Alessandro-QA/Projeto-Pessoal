const html = {
  Ct1: `
    <div>
      <span style="font-weight: bold; color: black;">Funcionalidade da API:</span>
      <span style="color: black;">A rota "POST - details" traz os detalhes do título.</span>
    </div>
    <br/>
    <div>
      <span style="font-weight: bold; color: black;">Descrição do Teste:</span>
      <span style="color: black;">
        Este teste faz uma requisição do tipo 'POST' para trazer os detalhes do título e valida os seguintes campos:
        <ul>
          <li>Verifica se a resposta contém um array com um título.</li>
          <li>Valida os campos do título como id, valor, saldo, formaPagamento, condicaoRecebimento, vencimento, fornecedor, cnpj, parcela, documentoId, numero.</li>
          <li>Valida a estrutura do objeto empresa.</li>
          <li>Valida a estrutura do objeto operacao.</li>
          <li>Verifica o status do título, histórico de recebimento e número do boleto.</li>
        </ul>
      </span>
    </div>
  `
};

export default html