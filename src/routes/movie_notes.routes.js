const { Router } = require("express");
const MovieNotesController = require("../controllers/MovieNotesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const movieNotesRoutes = Router();

movieNotesRoutes.use(ensureAuthenticated)

const movieNotesController = new MovieNotesController();

movieNotesRoutes.post("/", movieNotesController.create);
movieNotesRoutes.get("/", movieNotesController.index);
movieNotesRoutes.get("/:id", movieNotesController.show);
movieNotesRoutes.delete("/:id", movieNotesController.delete);

module.exports = movieNotesRoutes;

// [Rota das notas] desestruturando o Router do express e dando um export na rota.