const Movie = require ("../models/Movie")


module.exports = {
  getMovies: async () => {
    try {
        const movies = await Movie.find()
        return movies
    } catch (error) {
        throw error.message
    }
  }
}

// module.exports = {
//   getMovies: () => {
//     return Movie;
//   }
// }