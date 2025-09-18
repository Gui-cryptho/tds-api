const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Criar usuário
router.post("/", usuarioController.criar);

// Listar usuários
router.get("/", usuarioController.listar);

// Remover usuário
router.delete("/:id", usuarioController.remover);

module.exports = router;
