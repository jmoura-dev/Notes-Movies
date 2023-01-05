const { Router } = require("express");
const MovieTagsController = require("../controllers/MovieTagsController");
const movieTagsRoutes = Router();

const movieTagsController = new MovieTagsController();

movieTagsRoutes.get("/:user_id", movieTagsController.index);

module.exports = movieTagsRoutes;

// [Rota das tags] - desestruturando o Router do express e dando um export na rota.