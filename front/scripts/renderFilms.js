function renderFilms(data) {
    const seccionPelicula = document.getElementById("sectionPeliculas");

    data.forEach((pelicula) => {
        const articuloPelicula = document.createElement("article");
        const divPelicula = document.createElement("div");

        articuloPelicula.classList.add("articlePelicula");
        divPelicula.classList.add("divPelicula");

        articuloPelicula.innerHTML = `<img src="${pelicula.poster}" alt="${pelicula.title}">`;
        divPelicula.innerHTML = `<h3 class="divPelicula_nombre">${pelicula.title} (${pelicula.year})</h3>
                                    <p class="divPelicula_director"><strong>Director: </strong>${pelicula.director}</p>
                                    <p class="divPelicula_duracion"><strong>Duración: </strong>${pelicula.duration}</p>
                                    <p class="divPelicula_genero"><strong>Género: </strong>${pelicula.genre.join(', ')}</p>
                                    <p class="divPelicula_puntuacion"><strong>Puntuación: </strong>${pelicula.rate}</p>`;
        
        articuloPelicula.appendChild(divPelicula);
        seccionPelicula.appendChild(articuloPelicula);
    });
}

module.exports = renderFilms;
