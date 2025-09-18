const express = require("express");
const router = express.Router();
const peixeController = require("../controllers/peixeController");

// Criar peixe
router.post("/", peixeController.criar);

// Listar peixes
router.get("/", peixeController.listar);

// Remover peixe
router.delete("/:id", peixeController.remover);

module.exports = router;
