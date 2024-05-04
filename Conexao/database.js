const { Client } = require('pg');

// Configuração da conexão
const client = new Client({
  user: 'root',
  host: 'cora6ca1hbls73f3a0og-a/lp4',
  database: 'lp4',
  password: '5QO9yXRGoSCAHAjQsY4QUKtQUhZN93S0',
  port: 5432, // Porta padrão do PostgreSQL
  ssl: { rejectUnauthorized: false } // Necessário para conexão com o Render
});

client.connect()
  .then(() => console.log('Conectado ao banco de dados'))
  .catch(err => console.error('Erro ao conectar ao banco de dados', err));

module.exports = client;
