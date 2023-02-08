// Cursor T-SQL que consulta as tabelas que possuem colunas com o nome "TENANTID",
// remove as constraints dessas tabelas, apaga os dados dessas respectivas tabelas
// utilizando como clausula o ID do Tenant e o nome do usuario que criou o registro,
// e insere novamente as constraints removidas.

const queries = `
USE projetoXDevDb

DECLARE @tenantId UNIQUEIDENTIFIER
DECLARE @userName VARCHAR(200)
DECLARE @delete varchar(600)
DECLARE @noCheckConstraint varchar(600)
DECLARE @checkConstraint varchar(600)
DECLARE @deleteAspNetUsers varchar(600)
DECLARE @schemaName VARCHAR(200)
DECLARE @tablename VARCHAR(200)		

SET @userName = 'conta_teste_qa_028@hubconexa.com'

-- Verifica se existe tenantId para o e-mail (@userName)
IF EXISTS (SELECT tenantId from tenant.TenantUser WHERE UserId = (SELECT Id FROM idsvr.AspNetUsers Where userName = @userName))
BEGIN
		-- Atribui o tenantId na variavel @tenantId atraves de consulta por e-mail
		SELECT @tenantId = tenantId from tenant.TenantUser WHERE UserId = (SELECT Id FROM idsvr.AspNetUsers Where userName = @userName)	

		-- Cursor para percorrer o banco, encontrar as tabelas que tem a coluna "TENANTID" e atribuir o schema e tabela nas variaveis @schemaName e @tablename
		DECLARE cur CURSOR FOR
			SELECT DISTINCT
						col.TABLE_SCHEMA,
						col.TABLE_NAME
				FROM
						INFORMATION_SCHEMA.COLUMNS col
				INNER JOIN INFORMATION_SCHEMA.TABLES ta ON  ta.TABLE_NAME = col.TABLE_NAME
						AND ta.TABLE_SCHEMA = col.TABLE_SCHEMA
						AND ta.TABLE_CATALOG = col.TABLE_CATALOG
				WHERE
				TABLE_TYPE = 'BASE TABLE'
				AND
						COLUMN_NAME = 'TENANTID'
		OPEN cur

		FETCH NEXT FROM cur INTO @schemaName, @tablename
		WHILE @@FETCH_STATUS = 0

	-- Ignorando tabelas que tem demora na execucao das consultas e schemas de outros produtos
	IF @tablename = '_MovimentacaoEstoque' OR @tablename = '_TempMovimentacaoEstoque' 
		OR @tablename = 'Audit' OR @tablename = 'PrevisoesClimaticas'
		OR @schemaName = 'agriq' OR @schemaName = 'assineicofre' OR @schemaName = 'assineidocumento'
		OR @schemaName = 'assineiparticipante' OR @schemaName = 'audit' OR @schemaName = 'daascultivar'
		OR @schemaName = 'dbo' OR @schemaName = 'eExport' OR @schemaName = 'HangFire' OR @schemaName = 'hangfireassinei'
		OR @schemaName = 'hangfirenotification'
		BEGIN
			FETCH NEXT FROM cur	INTO @schemaName, @tablename
		END

	ELSE
		-- Remove as contraints, deleta os regitros utilizando o @tenantId e cria novamente as contraints
		BEGIN
			SELECT @noCheckConstraint = 'ALTER TABLE [' + @schemaName + '].[' + @tableName + '] NOCHECK CONSTRAINT ALL'
			EXEC (@noCheckConstraint)
			SELECT @delete = 'DELETE FROM [' + @schemaName + '].[' + @tableName + '] WHERE TENANTID = ''' + CONVERT(VARCHAR(36),@tenantId) + ''''
			EXEC (@delete)
			SELECT @checkConstraint = 'ALTER TABLE [' + @schemaName + '].[' + @tableName + '] CHECK CONSTRAINT ALL'
			EXEC (@checkConstraint)
			FETCH NEXT FROM cur	INTO @schemaName, @tablename
		END	
	CLOSE cur
	DEALLOCATE cur

	-- Deleta o usuario na tabela AspNetUsers, para que seja recriado novamente sem problemas
	-- E tambem registros de tabelas remanescentes que tem conflitos com referencia
	BEGIN 
		DELETE FROM idsvr.AspNetUsers WHERE UserName = @userName;
		DELETE FROM [fazenda].[Fazendas] WHERE TENANTID = @tenantId
		DELETE FROM [pessoa].[Enderecos] WHERE TENANTID = @tenantId
		DELETE FROM [pessoa].[Pessoas] WHERE TENANTID = @tenantId
	END
END
`
export default queries
