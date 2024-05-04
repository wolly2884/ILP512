const express = require('express');
const router  = express.Router();
const connection = require('../Conexao/database'); // Importa a conexão com o banco de dados

// Função para executar consultas SQL
function ConsultSQLQuery(sqlQuery, res) {
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


// Função para executar consultas SQL
function execSQLQuery(sqlQuery, values, res) {
  connection.query(sqlQuery, values, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta SQL:', err);
      res.status(500).json({ error: 'Erro ao executar a consulta SQL' });
      return;
    }
    console.log('Consulta SQL executada com sucesso:', results);
    res.json(results);
  });
}

router.post('/Beneficiario', (req, res) => {
  // Verifica se o corpo da solicitação contém uma matriz de usuários
  if (!Array.isArray(req.body)) {
    res.status(400).json({ error: 'O corpo da solicitação deve ser uma matriz de usuários' });
    return;
  }

  const users = req.body.map(user => [
    user.Nome,
    user.CPF, 
    user.Password, 
    user.Age, 
    user.CardNumber, 
    user.Email, 
    user.HealthPlan, 
    user.CNS,
    user.Tipo_Beneficiario,
    user.ID_Titular
  ]);

  // Query de inserção
  const insertQuery = 'INSERT INTO Beneficiarios (Nome, CPF, Password, Age, CardNumber, Email, HealthPlan, CNS, Tipo_Beneficiario, ID_Titular) VALUES ?';

  // Executa a consulta de inserção
  execSQLQuery(insertQuery, [users], res);
});


router.get('/', (req, res) => {
  const sqlQuery = 'SELECT * FROM Beneficiarios';
  ConsultSQLQuery(sqlQuery, res);
});

module.exports = router;
