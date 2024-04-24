const Movie = require ("../models/Movie")

module.exports = {
  getMovies: async () => {
    try {
        const movies = await Movie.find()
        return movies
    } catch (error) {
        throw error.message
    }
  },
  createMovie: async (movie) => {
    try {
      const newMovie = await Movie.create(movie)
      return newMovie
    } catch (error) {
      return error.message
    }
  }
}
