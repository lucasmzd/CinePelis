const {Router} = require ("express")
const {moviesControl, crearNuevaPelicula} = require("../controllers/moviesController")

const moviesRouter = Router()

moviesRouter.get("/movies", moviesControl);
moviesRouter.post("/movies", crearNuevaPelicula);

module.exports = moviesRouter
