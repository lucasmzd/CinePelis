const seccionPelicula = document.getElementById("sectionPeliculas");

tempData.map ((pelicula) => {
    const articuloPelicula = document.createElement ("article");
    const divPelicula = document.createElement ("div");

    articuloPelicula.classList.add ("articlePelicula");
    divPelicula.classList.add ("divPelicula");

    articuloPelicula.innerHTML = `<img src="${pelicula.poster}" alt="${pelicula.title}">`;
    divPelicula.innerHTML = `<h3 class="divPelicula_nombre">${pelicula.title} (${pelicula.year})</h3>
                                <p class="divPelicula_director"><strong>Director: </strong>${pelicula.director}</p>
                                <p class="divPelicula_duracion"><strong>Duración: </strong>${pelicula.duration}</p>
                                <p class="divPelicula_genero"><strong>Género: </strong>${pelicula.genre}</p>
                                <p class="divPelicula_puntuacion"><strong>Puntuación: </strong>${pelicula.rate}</p>`;
    
    articuloPelicula.appendChild(divPelicula);
    seccionPelicula.appendChild(articuloPelicula);
});

// callBack = (data) => {
//     const contenedor = document.getElementById("sectionPeliculas")
//     data.forEach(element => {
        
//         contenedor.appendChild(..(element))

//     });
// }
// $.get("https://students-api.up.railway.app/movies", (data)=>{
//     callBack(data)
// });