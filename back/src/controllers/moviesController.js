const {getMovies} = require("../services/moviesService")


const moviesControl = async (req, res) =>{
    const movies = await getMovies()
    res.status(200).send(movies)
}

module.exports = moviesControl
