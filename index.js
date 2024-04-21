const express = require("express");
app = express();
const port = 3000;
const appCustom = require("./config/appCustom");

appCustom(app, express);

app.listen(port, (error) =>{
    if (error) {
        console.log(`Problema com o servidor ${error}`)
        return;
    }
    console.log(`Servidor rodando na porta ${port}`)
})
