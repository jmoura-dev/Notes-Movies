const { Router } = require("express");
const MovieNotesController = require("../controllers/MovieNotesController");
const movieNotesRoutes = Router();


const movieNotesController = new MovieNotesController();

movieNotesRoutes.get("/", movieNotesController.index);
movieNotesRoutes.post("/:user_id", movieNotesController.create);
movieNotesRoutes.get("/:id", movieNotesController.show);
movieNotesRoutes.delete("/:id", movieNotesController.delete);

module.exports = movieNotesRoutes;

// [Rota das notas] desestruturando o Router do express e dando um export na rota.