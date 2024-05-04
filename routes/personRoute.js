const express = require('express');
const router = express.Router();
const connection = require('../Conexao/database'); // Importa a conexão com o banco de dados


// Função para executar consultas SQL
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

router.get('/', (req, res) => {
  const sqlQuery = 'SELECT * FROM Clientes';
  execSQLQuery(sqlQuery, res);
});

// Rota para adicionar uma pessoa
router.post('/persons', (req, res) => {
  const { name } = req.body;
  const newPerson = { id: persons.length + 1, name };
  persons.push(newPerson);
  res.status(201).json(newPerson);
});

module.exports = router;
