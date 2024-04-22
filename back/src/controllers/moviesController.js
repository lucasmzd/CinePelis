const {getMovies} = require("../services/moviesService")


const moviesControl = (req, res) =>{
    const movies = getMovies()
    res.status(200).send(movies)
}

module.exports = moviesControl
