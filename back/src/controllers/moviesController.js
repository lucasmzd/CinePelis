const moviesService = require("../services/moviesService")
const {getMovies} = require("../services/moviesService")

const moviesControl = async (req, res) =>{
    const movies = await getMovies()
    res.status(200).send(movies)
}

const crearNuevaPelicula = async (req, res) => {
    try {
        const {title, year, director, duration, genre, rate, poster}=req.body
        const respuestaCrearNuevaPelicula = await moviesService.createMovie({title, year, director, duration, genre, rate, poster})
        res.status(201).json({ message: "Película creada correctamente", respuestaCrearNuevaPelicula });
    } catch (error) {
        res.status(500).json({ error: "No se pudo crear la película" });
    }
}

module.exports = {moviesControl, crearNuevaPelicula}

