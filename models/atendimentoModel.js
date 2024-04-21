const conexao = require("../infraestrutura/conexão")
class AtendimentoModel {
    listar(){
        const sql = "SELECT * FROM atendimentos"
        return new Promise((resolve, reject)=>{
            conexao.query(sql, {}, (error, resposta)=> {
                if (error){
                    console.log("Erro no listar:", error);
                    reject(error);
                }
                console.log("Resultado da consulta no listar:", resposta);
                resolve(resposta);
            })
        })
    }

    criar(novoAtendimento){
        const sql = "INSERT INTO atendimentos SET ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoAtendimento, (error, resposta) => {
                if(error){
                    console.log("Erro ao criar", error)
                    reject(error);
                }
                console.log("Criado com sucesso")
                resolve(resposta)
            })
        })
    }

    atualizar(atendimentoAtualizado, id){
        const sql = "update atendimentos set ? where id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, [atendimentoAtualizado, id ], (error, resposta) => {
                if(error){
                    console.log("Erro ao criar", error)
                    reject(error);
                }
                console.log("Criado com sucesso")
                resolve(resposta)
            })
        })
    }

    delete(id){
        const sql = "delete from atendimentos where id = ?";
        return new Promise((resolve, reject) => {
            conexao.query(sql, id , (error, resposta) => {
                if(error){
                    console.log("Erro ao apagar", error)
                    reject(error);
                }
                console.log("Apagado com sucesso")
                resolve(resposta)
            })
        })
    }
}

module.exports = new AtendimentoModel()