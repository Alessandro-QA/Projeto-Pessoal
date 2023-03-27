/* eslint no-console: ["error", { allow: ["log"] }] */

const mssql = require('mssql')

class UtilsDatabase {
  // Metodo que faz conexao com o banco e executa uma query recebida via parametro
  preparedStatement(query, dbConfig) {
    return new Promise((resolve, reject) => {
      var conn = new mssql.ConnectionPool(dbConfig)

      conn.connect().then(function () {
        var request = new mssql.Request(conn)
        request.query(query).then(function (result) {
          console.log(`Consulta realizada com sucesso: `, result.recordsets)
          conn.close()
          return resolve(result.recordsets)
        }).catch(function (err) {
          console.log(`Erro ao executar a consulta: `, err)
          conn.close()
          return reject(err)
        })
      }).catch(function (err) {
        console.log('Erro ao conectar ao banco de dados: ', err)
        return reject(err)
      })
    })
  }
}

module.exports = UtilsDatabase
