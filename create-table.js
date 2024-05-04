const mysql = require("mysql");

// Configuração da conexão
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "lp4"
});

// Conectar ao banco de dados MySQL
connection.connect(function(err) {
  if (err) {
    console.error("Erro ao conectar ao banco de dados MySQL: " + err.stack);
    return;
  }
  console.log("Conectado ao banco de dados MySQL com o ID: " + connection.threadId);

  // Função para criar tabela e inserir dados
  createTableAndInsertData(connection);
});

// Função para criar tabela e inserir dados
function createTableAndInsertData(connection) {
    // Consulta para excluir a tabela
    const dropTableQuery = `
    DROP TABLE IF EXISTS Beneficiarios
  `;
  
  // Executar a consulta para excluir a tabela
  connection.query(dropTableQuery, function(err, result) {
    if (err) {
      console.error("Erro ao excluir a tabela: " + err.message);
      return;
    }
    console.log("Tabela 'Beneficiarios' excluída com sucesso!");
  });

  // Consulta para criar a tabela
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Beneficiarios (
      ID INT AUTO_INCREMENT PRIMARY KEY,
      Nome VARCHAR(150) NOT NULL,
      CPF CHAR(11) NOT NULL,
      Password VARCHAR(20) NOT NULL,
      Age CHAR(3) NOT NULL,
      CardNumber CHAR(20) NOT NULL,
      Email VARCHAR(40) NOT NULL,
      HealthPlan VARCHAR(40) NOT NULL,
      CNS CHAR(17) NOT NULL,
      Tipo_Beneficiario VARCHAR(1) NOT NULL,
      ID_Titular INTEGER(10)
    )
  `;

  // Consulta para inserir dados na tabela
  const insertDataQuery = `
    INSERT INTO Beneficiarios (Nome, CPF, Password, Age, CardNumber, Email, healthPlan, CNS, Tipo_Beneficiario, ID_Titular  ) VALUES
    ('teste1', '33143160896', 121, 28, 123456789, 'teste@teste.com', 'Plano Gold', 12345678765, 'T', 0 ),
    ('teste2', '27426990826', 122, 28, 123456789, 'teste@teste.com', 'Plano Gold', 12345678765, 'D', 1 ),
    ('teste3', '51113543825', 123, 28, 123456789, 'teste@teste.com', 'Plano Gold', 12345678765, 'T', 0 )
  `;

  // Executar a consulta para criar a tabela
  connection.query(createTableQuery, function(err, result) {
    if (err) {
      console.error("Erro ao criar tabela: " + err.message);
      return;
    }
    console.log("Tabela 'Beneficiarios' criada com sucesso!");

    // Executar a consulta para inserir dados na tabela
    connection.query(insertDataQuery, function(err, result) {
      if (err) {
        console.error("Erro ao inserir dados na tabela: " + err.message);
        return;
      }
      console.log("Dados inseridos na tabela com sucesso!");
      // Você pode fazer algo aqui após a inserção dos dados, se desejar
    });
  });
}
