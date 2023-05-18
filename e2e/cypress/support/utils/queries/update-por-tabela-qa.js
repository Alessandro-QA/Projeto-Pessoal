// Faz exclusão dos daddos das respectivas tabelas, utilizando
// o ID do Tenant junto com outros ids.

let tenantCenarios = 'ce2f4451-3b23-4513-92a2-5a02301279c2'
let tenantCadastro = '80ff6356-699f-485c-b301-ad287b6387ba'
let contaBancariaId = '1e0ec29f-28ab-4dc3-beea-e73d4ef8d0fa'
let documentoId = '09A35C98-1F33-4AEA-A97A-B4033C3437AE'
let pessoaId = 'EDC6DF6C-A5AB-43D2-B994-429B06AD9638'
let fazendaId = '12ea6038-58da-4b75-b277-354617a445af'

let queries = `
			--  Exclusao Logica dos registros dos testes de cadastro de atores
				UPDATE [cicloproducao].[Ciclos] SET Visible = 0 WHERE Descricao = 'Safra Milho - 2021/2021' AND SafraDescricao = '2021/2021' AND TenantId = '${tenantCadastro}';
				UPDATE [financeiro].[ContaBancariaEmpresas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and ContaBancariaId != '${contaBancariaId}';
				UPDATE [financeiro].[Movimentacoes] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and ContaBancariaId != '${contaBancariaId}';
				UPDATE [financeiro].[ContaBancarias] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${contaBancariaId}';
				UPDATE [pessoa].[EnderecosDocumentos] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and DocumentoId != '${documentoId}';
				UPDATE [pessoa].[DocumentoFiscais] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and DocumentoId != '${documentoId}';
				UPDATE [pessoa].[Documentos] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[Emails] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[Telefones] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[EnderecosPessoas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[Empresas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				UPDATE [pessoa].[ClassificacoesPessoa] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				UPDATE [pessoa].[Usuarios] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				UPDATE [pessoa].[Pessoas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				UPDATE [fazenda].[FazendaMatriculas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and FazendaId != '${fazendaId}';
				UPDATE [fazenda].[UnidadeArmazenamentoTiposMateriais] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and CreatedByUserName != 'Conta Principal QA';
				UPDATE [fazenda].[UnidadesArmazenamentos] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and FazendaId != '${fazendaId}';
				UPDATE [fazenda].[Fazendas] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' and Id != '${fazendaId}';
				UPDATE [safra].[Safras] SET Visible = 0 WHERE TenantId = '${tenantCadastro}' AND Id NOT IN ('BA57B4F1-4F41-414F-8C1E-2566D88D41F4', 'BFCB0F35-B72A-41B6-BCA3-37912D702ABD'); 

			--  Exclusao Logica dos registros dos testes de cadastro de documento
			    UPDATE [financeiro].[LivroCaixaAnexos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LivroCaixas] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LivroCaixaHistoricos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[MovimentacaoTitulos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[MovimentacaoCategorias] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[Movimentacoes] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[TituloBaixa] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[TituloCategorias] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[TituloHistoricoRecebimentos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[Titulos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoFinanceiroParcelas] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoFinanceiro] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoCategorias] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoCiclos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoMaterialPedidos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoAnexos]	SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[DocumentoMateriais] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[Documentos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[Competencias] SET Visible = 0 WHERE TenantID IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[RegimeCaixas] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LancamentoContabilCiclos] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LancamentoContabilCategorias] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				UPDATE [financeiro].[LancamentoContabeis] SET Visible = 0 WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');

			-- Exclusao Logica dos registros dos testes de cadastro e recebimento de pedido
				UPDATE  [pedidocompra].[PedidoCategorias] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[PedidoCiclos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[PedidoMateriais] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[PedidoPagamentoParcelas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[PedidoPagamentos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[Pedidos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoAnexos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoCategorias] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoCiclos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoParcelas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoFinanceiro] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoMaterialPedidos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoMaterialArmazenamento] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoMateriais] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[RecebimentoMaterialAplicacaoImediatas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE  [pedidocompra].[Recebimentos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';

			--  Exclusao Logica dos registros de producao agricola
				UPDATE [producaoagricola].[Expedicoes] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[VariedadesColheita] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[Colheitas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[Pesagens] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].PartilhasMovimentacao SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[Movimentacoes] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[Contratos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [producaoagricola].[ContratoAnexos] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';

			--  Exclusao Logica dos registros de extrato de materiais
				UPDATE [estoque].[movimentacaoEstoqueMateriais] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [estoque].[movimentacoesEstoque] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [fazenda].[FazendaMatriculaPessoaExploracoes] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
				UPDATE [fazenda].[FazendaMatriculas] SET Visible = 0 WHERE tenantid = '${tenantCenarios}';
			`

export default queries
