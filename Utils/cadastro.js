const connection = require('../Conexao/database');

function execSQLQuery(data, res) {
    const sqlQuery = `INSERT INTO Beneficiarios (Age, CNS, CPF, CardNumber, Email, HealthPlan, ID_Titular, Nome, Password, Tipo_Beneficiario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        data.Age,
        data.CNS,
        data.CPF,
        data.CardNumber,
        data.Email,
        data.HealthPlan,
        data.ID_Titular,
        data.Nome,
        data.Password,
        data.Tipo_Beneficiario
    ];

    connection.query(sqlQuery, values, (err, result) => {
        if (err) {
            console.error('Erro ao inserir dados no banco de dados:', err);
            if (res) {
                res.status(500).json({ error: 'Erro ao inserir dados no banco de dados' });
            }
            return;
        }
        console.log('Dados inseridos com sucesso no banco de dados:', result);
        if (res) {
            res.json({ success: true });
        }
    });
}

module.exports = { execSQLQuery };