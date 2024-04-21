const express = require("express");
app = express();
const port = 3000;
const router = require("./routes/index")
const conexao = require("./infraestrutura/conexão")
const Tabelas = require("./infraestrutura/tabelas")


router(app, express);
Tabelas.init(conexao)



app.listen(port, (error) =>{
    if (error) {
        console.log(`Problema com o servidor ${error}`)
        return;
    }
    console.log(`Servidor rodando na porta ${port}`)
})
