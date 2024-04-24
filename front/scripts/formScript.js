class Form{
    constructor(title, year, director,duration, genre, rate, poster){

        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
}}

document.addEventListener("DOMContentLoaded", () => {
    const genres = document.querySelectorAll('input[type="checkbox"]');

    const inputs = () => {
        const titleInput = document.getElementById("title");
        const titleInputValue = titleInput.value;
        const yearInput = document.getElementById("year");
        const yearInputValue = yearInput.value;
        const directorInput = document.getElementById("director");
        const directorInputValue = directorInput.value;
        const durationInput = document.getElementById("duration");
        const durationInputValue = durationInput.value;
        const rateInput = document.getElementById("rate");
        const rateInputValue = rateInput.value;
        const posterInput = document.getElementById("poster");
        const posterInputValue = posterInput.value;
        
        const genresTrue = [];

        for (const genre of genres) {
            if (genre.checked) {
                genresTrue.push(genre.name);
            }
        }

        const form = new Form(titleInputValue, yearInputValue, directorInputValue, durationInputValue, genresTrue, rateInputValue, posterInputValue);
        console.log("Instancia de Form:", form);
        enviarDatos(form);
    };
const enviarDatos = async (form) => {
        try {
            const response = await axios.post("http://localhost:3000/movies", form);
            console.log("Respuesta del servidor:", response.data);
        } catch (error) {
            console.log("Error al enviar los datos:", error.message);
        }
    };
    
    const agregar = document.getElementById("enviarBtn");
    agregar.addEventListener("click", inputs);


    const clearValues = ()=>{

        const genres = document.querySelectorAll('input[type="checkbox"]');

        for (const genre of genres) {
            if (genre.checked) {
                genre.checked = false;
            }
        }

        const titleInput = document.getElementById("title");
        titleInput.value = "";
        const yearInput = document.getElementById("year");
        yearInput.value = "";
        const directorInput = document.getElementById("director");
        directorInput.value = "";
        const durationInput = document.getElementById("duration");
        durationInput.value = "";
        const rateInput = document.getElementById("rate");
        rateInput.value = "";
        const posterInput = document.getElementById("poster");
        posterInput.value = "";
    }

    const vaciarCampos = document.getElementById("limpiarBtn");
    vaciarCampos.addEventListener("click", clearValues)
});