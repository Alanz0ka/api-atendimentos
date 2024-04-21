// const Router = require("express").Router;
const{ Router } = require("express");
const router = Router();
const AtendimentoController = require("../controllers/AtendimentoController");
const atendimentoController = require("../controllers/atendimentoController");

router.get("/atendimentos", atendimentoController.buscar);

router.post("/atendimentos", atendimentoController.criar)

router.put("/atendimentos/:id", atendimentoController.atualizar)

router.delete("/atendimentos/:id", atendimentoController.delete)

module.exports = router;