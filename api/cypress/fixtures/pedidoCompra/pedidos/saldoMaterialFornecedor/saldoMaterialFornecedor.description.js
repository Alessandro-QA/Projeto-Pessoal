const html = {
    Ct1: `
      <div>
        <p><strong>CT1 - Saldo do Material:</strong></p>
        <ul>
          <li>Envia uma requisição POST para "/Pedidos/SaldoMaterialFornecedor".</li>
          <li>Verifica se o status da resposta é 200.</li>
          <li>Confirma que a resposta contém os seguintes dados:</li>
          <ul>
            <li>O material tem o ID "98557ad4-929f-4f68-a97c-9a3f32fe1fce" e a descrição "Milho".</li>
            <li>O saldo do material é 0.</li>
            <li>O valor unitário é 0.</li>
            <li>Outros campos e a estrutura da resposta são validados.</li>
          </ul>
        </ul>
      </div>
    `,
};

export default html;
