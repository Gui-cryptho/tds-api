const express = require("express");
const usuarioRoutes = require("../routes/usuarioRoutes");
const peixeRoutes = require("../routes/peixeRoutes");
const equipamentoRoutes = require("../routes/equipamentoRoutes");
const errorHandler = require("../middlewares/errorHandler");

function setupRoutes(app) {
  // Rota principal
  app.get("/", (req, res) => {
    res.json({ 
      message: "API TDS - Sistema de Gerenciamento de Aquários",
      version: "1.0",
      status: "online"
    });
  });

  // Rotas da API
  app.use("/usuarios", usuarioRoutes);
  app.use("/peixes", peixeRoutes);
  app.use("/equipamentos", equipamentoRoutes);

  // Middleware de tratamento de erros
  app.use(errorHandler);
}

module.exports = setupRoutes;
