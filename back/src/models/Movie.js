const mongoose = require ("mongoose")

const movieSchema = new mongoose.Schema({
    // title: {
    //     type: String,
    //     requiere: true
    //    }
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String,
})

const Movie = mongoose.model("Movie", movieSchema)
// const Movie = new mongoose.model("Movie", movieSchema)


module.exports = Movie
