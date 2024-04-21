class Tabelas {
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS atendimentos (
            id int not null auto_increment primary key,
            data date,
            servico varchar(100),
            cliente varchar(100),
            status enum("pendente", "realizado", "cancelado") default "pendente"
        );`
        this.conexao.query(sql, (error)=> {
            if(error) {
                console.log(`Erro ao criar a tabela`);
                console.log(error.message);
                return;
            }
            console.log(`Deu tudo certo`)
        })
    }
}

module.exports = new Tabelas();