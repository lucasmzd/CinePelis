const renderFilms = require ("./renderFilms");
const axios = require("axios");

const renderPeliculas = async () => {
    try {
        const result = await axios.get("http://localhost:3000/movies");
        renderFilms(result.data);
    } catch (error) {
        console.log(error.message);
    }
}

renderPeliculas();



