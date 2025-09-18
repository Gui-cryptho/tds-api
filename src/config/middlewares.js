const express = require("express");

function setupMiddlewares(app) {
  // Middleware para processar JSON
  app.use(express.json());
}

module.exports = setupMiddlewares;
