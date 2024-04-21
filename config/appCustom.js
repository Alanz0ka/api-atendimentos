const router = require("../routes")
const conexao = require("../infraestrutura/conexão")
const Tabelas = require("../infraestrutura/tabelas")



module.exports = (app, express) => {
    router(app, express);
    Tabelas.init(conexao)
}