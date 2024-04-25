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

    const inputs = async () => {
        const titleInput = document.getElementById("title");
        const yearInput = document.getElementById("year");
        const directorInput = document.getElementById("director");
        const durationInput = document.getElementById("duration");
        const rateInput = document.getElementById("rate");
        const posterInput = document.getElementById("poster");

        const titleInputValue = titleInput.value;
        const yearInputValue = yearInput.value;
        const directorInputValue = directorInput.value;
        const durationInputValue = durationInput.value;
        const rateInputValue = rateInput.value;
        const posterInputValue = posterInput.value;

        if (!titleInputValue || !yearInputValue || !directorInputValue || !durationInputValue || !rateInputValue || !posterInputValue) {
            alert("Por favor llene todos los campos.");
            return;
        }

        if (typeof Number(yearInputValue) !== 'number' || Number(yearInputValue) < 1895 || Number(yearInputValue) > new Date().getFullYear()) {
            alert(`Por favor ingrese un año entre 1895 y ${new Date().getFullYear()}.`);
            return;
        }
    
        if (typeof Number(rateInputValue) !== 'number' || Number(rateInputValue) < 0 || Number(rateInputValue) > 10) {
            alert("Por favor ingrese una calificación entre 0 y 10.");
            return;
        }


        const genresTrue = [];
        for (const genre of genres) {
            if (genre.checked) {
                genresTrue.push(genre.name);
            }
        }

        const form = new Form(
            titleInputValue,
            yearInputValue,
            directorInputValue,
            durationInputValue,
            genresTrue,
            rateInputValue,
            posterInputValue
        );
        console.log("Instancia de Form:", form);
        await enviarDatos(form);
    };

    const enviarDatos = async (form) => {
        try {
            const response = await axios.post("http://localhost:3000/movies", form);
            console.log("Respuesta del servidor:", response.data);
            alert("La película se creó exitosamente.");
        } catch (error) {
            console.log("Error al enviar los datos:", error.message);
        }
    };
    
    const agregar = document.getElementById("enviarBtn");
    agregar.addEventListener("click", inputs);

    const clearValues = () => {
        for (const genre of genres) {
            if (genre.checked) {
                genre.checked = false;
            }
        }

        const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
        inputs.forEach(input => input.value = "");
    };

    const vaciarCampos = document.getElementById("limpiarBtn");
    vaciarCampos.addEventListener("click", clearValues);
});
