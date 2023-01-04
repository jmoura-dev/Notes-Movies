const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const usersRoutes = Router();


const usersController = new UsersController();

usersRoutes.post("/", usersController.create)

module.exports = usersRoutes;

// [Rota dos usuários] desestruturando o Router do express e dando um export na rota.