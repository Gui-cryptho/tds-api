const express = require("express");
const serverConfig = require("./config/server");
const setupMiddlewares = require("./config/middlewares");
const setupRoutes = require("./config/routes");
const startServer = require("./config/server-start");

const app = express();

// Configuração dos middlewares
setupMiddlewares(app);

// Configuração das rotas
setupRoutes(app);

// Iniciando o servidor
startServer(app, serverConfig);
