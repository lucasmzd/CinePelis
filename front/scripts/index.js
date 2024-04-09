console.log(tempData);
function instanceToHML (tempData) {
    const {title, year, director, duration, genre, rate, poster} = tempData

    const titulo = document.createElement("h3");
    const ano = document.createElement("a");
    const directores = document.createElement("a");
    const duracion = document.createElement("a");
    const genero = document.createElement("a");
    const calificacion = document.createElement("a");
    const posters = document.createElement("img");

    titulo.innerHTML = title;
    ano.innerHTML = year;
    directores.innerHTML = director;
    duracion.innerHTML = duration;
    genero.innerHTML = genre;
    calificacion.innerHTML = rate;
    posters.src = poster;

    titulo.classList.add("tituloContenedor");
    ano.classList.add("anoContenedor");
    directores.classList.add("directoresContenedor");
    duracion.classList.add("duracionContenedor");
    genero.classList.add("generoContenedor");
    calificacion.classList.add("calificacionContenedor");
    posters.classList.add("postersContenedor");


    const contenedorCreado = document.createElement("div");

    contenedorCreado.classList.add("contenedorInterno");

    contenedorCreado.appendChild(titulo);
    contenedorCreado.appendChild(ano);
    contenedorCreado.appendChild(directores);
    contenedorCreado.appendChild(duracion);
    contenedorCreado.appendChild(genero);
    contenedorCreado.appendChild(calificacion);
    contenedorCreado.appendChild(posters);

    return contenedorCreado;
}

function convertir() {
    const seleccionContExt = document.querySelector(".contenedorExterno")
    seleccionContExt.innerHTML="";

    const listadoPelis = array.tempData();
    const mapear = listadoPelis.map (instanceToHML);
    mapear.forEach(elementos => {
        seleccionContExt.appendChild(elementos);
    })
}

const datos = [
    { title: "Pelicula 1", year: 2020, director: "Director 1", duration: "120 min", genre: "Acción", rate: 8.5, poster: "poster1.jpg" },
    { title: "Pelicula 2", year: 2019, director: "Director 2", duration: "110 min", genre: "Drama", rate: 7.8, poster: "poster2.jpg" },
];

convertir(datos);