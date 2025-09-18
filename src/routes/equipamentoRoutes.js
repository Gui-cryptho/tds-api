const express = require("express");
const router = express.Router();
const equipamentoController = require("../controllers/equipamentoController");

// Criar equipamento
router.post("/", equipamentoController.criar);

// Listar equipamentos
router.get("/", equipamentoController.listar);

// Remover equipamento
router.delete("/:id", equipamentoController.remover);

module.exports = router;
