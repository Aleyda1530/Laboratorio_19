// Ejercicio 10 – Mostrar los Pokémon del 1 al 10 en tarjetas
// Autora: Aleyda Quispe
const urlBase = "https://pokeapi.co/api/v2/pokemon/";
const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
const listaPokemones = [];

async function cargarPokemones() {
    for (let idPokemon = 1; idPokemon <= 10; idPokemon++) {
        const urlFinal = urlBase + idPokemon;
        const respuesta = await fetch(urlFinal);
        const datosPokemon = await respuesta.json();
        listaPokemones.push(datosPokemon);
    }
    mostrarPokemones();
}
function mostrarPokemones() {
    listaPokemones.forEach(pokemon => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjetaPokemon");

        const imagen = document.createElement("img");
        imagen.src = pokemon.sprites.front_default;
        imagen.alt = pokemon.name;

        const nombre = document.createElement("p");
        nombre.textContent = "Nombre: " + pokemon.name;

        const id = document.createElement("p");
        id.textContent = "ID: " + pokemon.id;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(id);
        contenedorTarjetas.appendChild(tarjeta);
    });
}
cargarPokemones();
