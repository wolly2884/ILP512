const connection = require('../Conexao/database');

function execSQLQuery(data, res) {
    // Verifica se foi fornecido um ID válido
    if (!data.ID || isNaN(data.ID)) {
        console.error('ID inválido:', data.ID);
        if (res) {
            res.status(400).json({ error: 'ID inválido' });
        }
        return;
    }

    // Constrói a parte da consulta SQL para atualizar os campos dinamicamente
    let setClause = '';
    const values = [];

    for (const key in data) {
        if (key !== 'ID') { // Ignora o campo ID
            setClause += `${key} = ?, `;
            values.push(data[key]);
        }
    }

    // Remove a vírgula extra no final da parte SET
    setClause = setClause.slice(0, -2);

    // Constrói a consulta SQL completa
    const sqlQuery = `UPDATE Beneficiarios SET ${setClause} WHERE ID = ?`;
    values.push(data.ID); // Adiciona o ID ao final do array de valores

    // Executa a consulta SQL no banco de dados
    connection.query(sqlQuery, values, (err, result) => {
        if (err) {
            console.error('Erro ao atualizar os dados no banco de dados:', err);
            if (res) {
                res.status(500).json({ error: 'Erro ao atualizar os dados no banco de dados' });
            }
            return;
        }
        console.log(`Dados atualizados com sucesso para o ID ${data.ID}`);
        if (res) {
            res.json({ success: true });
        }
    });
}

module.exports = { execSQLQuery };
