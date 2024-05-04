// database.js
const mysql = require('mysql');

// Configuração da conexão
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "lp4"
});

module.exports = connection;
