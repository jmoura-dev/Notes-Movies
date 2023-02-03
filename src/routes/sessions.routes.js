const { Router } = require("express");
const SessionsController = require("../controllers/SessionsController");
const sessionsRoutes = Router();


const sessionsController = new SessionsController();

sessionsRoutes.post("/", sessionsController.create);

module.exports = sessionsRoutes;

// [Rota dos usuários] desestruturando o Router do express e dando um export na rota.