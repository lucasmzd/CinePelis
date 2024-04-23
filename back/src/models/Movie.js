const mongoose = require ("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    year: {
        type: Number,
      required: true,
    },
    director: {
        type: String,
        required: true,
    },
    genre: {
        type: Array,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    poster: {
        type: String,
        unique: true,
        required: true,
    },
})

// const movieSchema = new mongoose.Schema({
//     title: String,
//     year: Number,
//     director: String,
//     duration: String,
//     genre: Array,
//     rate: Number,
//     poster: String,
// })

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie
