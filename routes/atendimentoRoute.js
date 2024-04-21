// const Router = require("express").Router;
const{ Router } = require("express");
const router = Router();
const AtendimentoController = require("../controllers/AtendimentoController");
const atendimentoController = require("../controllers/atendimentoController");

router.get("/atendimentos", (req, res)=>{
    const listaAtendimentos = AtendimentoController.buscar();
    listaAtendimentos
    .then((atendimentos) => res.status(200).json(atendimentos))
    .catch((error) => res.status(400).json(error.message))
});

router.post("/atendimentos", (req,res)=>{
    const  novoAtendimento = req.body;
    const atendimento = atendimentoController.criar(novoAtendimento);
    atendimento.then(atendimentoCriado => res.status(201).json(atendimentoCriado))
    .catch(error => res.status(400).json(error.message));
})

router.put("/atendimentos/:id", (req,res)=>{
    const {id} = req.params;
    const atendimentoAtualizado = req.body;
    const atendimento = atendimentoController.atualizar(atendimentoAtualizado, id);
    atendimento.then((resultAtendimentoAtualizado) => res.status(200).json(resultAtendimentoAtualizado)).catch((error) => res.status(400).json(error.message));
})

router.delete("/atendimentos/:id", (req,res)=>{
    const {id} = req.params;
    const atendimento = atendimentoController.delete(id);
    atendimento.then((resultAtendimentoDeletado) => res.status(200).json(resultAtendimentoDeletado)).catch((error) => res.status(400).json(error.message));
})

module.exports = router;