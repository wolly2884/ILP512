const express = require('express');
const router = express.Router();
const Consulta = require('../Utils/consulta'); // Importe a função execSQLQuery
const Cadastro = require('../Utils/cadastro'); // Importe a função execSQLQuery
const Alteracao = require('../Utils/alteracao'); // Importe a função execSQLQuery

router.get('/', (req, res) => {
  const sqlQuery = 'SELECT * FROM Beneficiarios';
  Consulta.execSQLQuery(sqlQuery, res); 
});

router.get('/find/:id', (req, res) => {
  let id = req.params.id;
  const sqlQuery = `SELECT * FROM Beneficiarios WHERE CPF = ${id} OR Email = ${id}`;
  console.log(sqlQuery);
  Consulta.execSQLQuery(sqlQuery, res); 
});

router.get('/get/:id', (req, res) => {
  let id = parseInt(req.params.id);
  const sqlQuery = `SELECT * FROM Beneficiarios WHERE ID = ${id} OR ID_Titular = ${id}`;
  console.log(sqlQuery);
  Consulta.execSQLQuery(sqlQuery, res); 
});

router.put('/', (req, res) => {
  Alteracao.execSQLQuery(req.body, res);
});

router.post('/', (req, res) => {
  Cadastro.execSQLQuery(req.body, res); 
});

router.delete('/', (req, res) => {
  const sqlQuery = 'SELECT * FROM Clientes'; // Consulta SQL desejada
  Query.execSQLQuery(sqlQuery, res); // Chame a função execSQLQuery e passe a consulta SQL e o objeto de resposta
});

module.exports = router;
