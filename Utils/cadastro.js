const connection = require('../Conexao/database');

function execSQLQuery(data, res) {
    const sqlQuery = `INSERT INTO Beneficiarios (cd_age, cd_cns, cd_cpf, cd_cardnumber, ds_email, ds_healthplan, id_titular, nm_beneficiario, cd_password, ic_beneficiario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
        data.cd_age,
        data.cd_cns,
        data.cd_cpf,
        data.cd_cardnumber,
        data.ds_email,
        data.ds_healthplan,
        data.id_titular,
        data.nm_beneficiario,
        data.cd_password,
        data.ic_beneficiario
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
