const renderFilms = require ("./renderFilms");
const axios = require("axios");

const renderPeliculas = async () => {
    try {
        const result = await axios.get("https://students-api.up.railway.app/movies");
        // result.data.forEach(renderFilms);
        renderFilms(result.data);
    } catch (error) {
        console.log(error.message);
    }
}

renderPeliculas();
// const promise = axios.get('https://students-api.up.railway.app/movies')

// promise
//   .then((res) => {
//     renderFilms(res.data);
//   })
//   .catch((err) => {
//     alert(err.message);
//   });








// $.get("https://students-api.up.railway.app/movies", (data) => {
//     renderFilms(data);
// }).fail(() => alert("Error al cargar las películas"));


