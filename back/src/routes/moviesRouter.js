const {Router} = require ("express")
const {moviesControl, crearNuevaPelicula} = require("../controllers/moviesController")
const dataCheck = require ("../middlewares/dataCheck")

const moviesRouter = Router()

moviesRouter.get("/movies", moviesControl);
moviesRouter.post("/movies", dataCheck, crearNuevaPelicula);

module.exports = moviesRouter
