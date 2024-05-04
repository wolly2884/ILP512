const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração das rotas
const indexRoute = require('./routes/index');
const personRoute = require('./routes/personRoute');
const BeneficiarioRoute = require('./routes/BeneficiarioRoute');
const input = require('./routes/input.js');

// Middleware
app.use(express.json()); // Para análise de corpos de solicitação JSON

// Rotas
app.use('/', indexRoute);
app.use('/persons', personRoute);
app.use('/inputcad', BeneficiarioRoute);
app.use('/input', input);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} teste`);
});
