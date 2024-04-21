const { response } = require("express")
const conexao = require("../infraestrutura/conexão")
class AtendimentoModel {
    
    executeQuery(sql, parametros = ""){
        return new Promise((resolve, reject) => {
            conexao.query(sql, parametros, (error, resposta) =>{
                if(error){
                    return reject(error);
                }
                return resolve(resposta);
            })
        })
    }
    listar(){
        const sql = "SELECT * FROM atendimentos"
        return this.executeQuery(sql);
    }

    criar(novoAtendimento){
        const sql = "INSERT INTO atendimentos SET ?";
        return this.executeQuery(sql, novoAtendimento)
    }

    atualizar(atendimentoAtualizado, id){
        const sql = "update atendimentos set ? where id = ?";
        return this.executeQuery(sql, [atendimentoAtualizado, id])
    }

    delete(id){
        const sql = "delete from atendimentos where id = ?";
        return this.executeQuery(sql, id)
    }
}

module.exports = new AtendimentoModel()