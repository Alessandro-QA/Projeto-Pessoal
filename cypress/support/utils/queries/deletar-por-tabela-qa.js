// Faz exclusão dos daddos das respectivas tabelas, utilizando
// o ID do Tenant junto com outros ids.

let tenantCenarios = 'ce2f4451-3b23-4513-92a2-5a02301279c2'
let tenantCadastro = '80ff6356-699f-485c-b301-ad287b6387ba'
let contaBancariaId = '1e0ec29f-28ab-4dc3-beea-e73d4ef8d0fa'
let documentoId = '09A35C98-1F33-4AEA-A97A-B4033C3437AE'
let pessoaId = 'EDC6DF6C-A5AB-43D2-B994-429B06AD9638'
let fazendaId = '12ea6038-58da-4b75-b277-354617a445af'

let queries = `
			-- Deletar registro dos testes de cadastro de atores
				DELETE FROM [cicloproducao].[Ciclos] WHERE Descricao = 'Safra Milho - 2021/2021' AND SafraDescricao = '2021/2021' AND TenantId = '${tenantCadastro}';
				DELETE FROM [financeiro].[ContaBancariaEmpresas] WHERE TenantId = '${tenantCadastro}' and ContaBancariaId != '${contaBancariaId}';
				DELETE FROM [financeiro].[Movimentacoes] WHERE TenantId = '${tenantCadastro}' and ContaBancariaId != '${contaBancariaId}';
				DELETE FROM [financeiro].[ContaBancarias] WHERE TenantId = '${tenantCadastro}' and Id != '${contaBancariaId}';
				DELETE FROM [pessoa].[EnderecosDocumentos] WHERE TenantId = '${tenantCadastro}' and DocumentoId != '${documentoId}';
				DELETE FROM [pessoa].[DocumentoFiscais] WHERE TenantId = '${tenantCadastro}' and DocumentoId != '${documentoId}';
				DELETE FROM [pessoa].[Documentos] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[Emails] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[Telefones] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[EnderecosPessoas] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[Empresas] WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				DELETE FROM [pessoa].[ClassificacoesPessoa] WHERE TenantId = '${tenantCadastro}' and PessoaId != '${pessoaId}';
				DELETE FROM [pessoa].[Usuarios] WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				DELETE FROM [pessoa].[Pessoas] WHERE TenantId = '${tenantCadastro}' and Id != '${pessoaId}';
				DELETE FROM [fazenda].[FazendaMatriculas] WHERE TenantId = '${tenantCadastro}' and FazendaId != '${fazendaId}';
				DELETE FROM [fazenda].[UnidadeArmazenamentoTiposMateriais] WHERE TenantId = '${tenantCadastro}' and CreatedByUserName != 'Conta Principal QA';
				DELETE FROM [fazenda].[UnidadesArmazenamentos] WHERE TenantId = '${tenantCadastro}' and FazendaId != '${fazendaId}';
				DELETE FROM [fazenda].[Fazendas] WHERE TenantId = '${tenantCadastro}' and Id != '${fazendaId}';
				DELETE FROM [safra].[Safras] WHERE TenantId = '${tenantCadastro}' AND Id NOT IN ('BA57B4F1-4F41-414F-8C1E-2566D88D41F4', 'BFCB0F35-B72A-41B6-BCA3-37912D702ABD'); 

			-- Deletar registros dos testes de cadastro de documento
				DELETE FROM [financeiro].[LivroCaixas] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[LivroCaixaHistoricos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[MovimentacaoTitulos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[MovimentacaoCategorias] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[Movimentacoes] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[TituloBaixa] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[TituloCategorias] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[TituloHistoricoRecebimentos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[Titulos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoFinanceiroParcelas] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoFinanceiro] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoCategorias] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoCiclos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoMaterialPedidos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoAnexos]	WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[DocumentoMateriais] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[Documentos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[Competencias] WHERE TenantID IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[RegimeCaixas] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[LancamentoContabilCiclos] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[LancamentoContabilCategorias] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');
				DELETE FROM [financeiro].[LancamentoContabeis] WHERE TenantId IN ('${tenantCenarios}', '${tenantCadastro}');

			--Deletar registros dos testes de cadastro e recebimento de pedido
				DELETE FROM  [pedidocompra].[PedidoCategorias] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[PedidoCiclos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[PedidoMateriais] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[PedidoPagamentoParcelas] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[PedidoPagamentos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[Pedidos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoAnexos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoCategorias] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoCiclos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoParcelas] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoFinanceiro] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoMaterialPedidos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoMaterialArmazenamento] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoMateriais] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[RecebimentoMaterialAplicacaoImediatas] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM  [pedidocompra].[Recebimentos] WHERE tenantid = '${tenantCenarios}';

				-- Deletar registros de producao agricola
				DELETE FROM [producaoagricola].[Expedicoes] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[VariedadesColheita] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[Colheitas] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[Pesagens] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].PartilhasMovimentacao WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[Movimentacoes] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[Contratos] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [producaoagricola].[ContratoAnexos] WHERE tenantid = '${tenantCenarios}';

				-- Deletar registros de extrato de materiais
				DELETE FROM [estoque].[movimentacaoEstoqueMateriais] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [estoque].[movimentacoesEstoque] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [fazenda].[FazendaMatriculaPessoaExploracoes] WHERE tenantid = '${tenantCenarios}';
				DELETE FROM [fazenda].[FazendaMatriculas] WHERE tenantid = '${tenantCenarios}';
			`

export default queries
