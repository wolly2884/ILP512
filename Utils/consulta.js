// consulta.js

const connection = require('../Conexao/database');

function execSQLQuery(sqlQuery, res) {
  connection.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta SQL:', err);
      res.status(500).json({ error: 'Erro ao executar a consulta SQL' });
      return;
    }
    console.log('Consulta SQL executada com sucesso:', results);
    res.json(results);
  });
}

module.exports = { execSQLQuery };