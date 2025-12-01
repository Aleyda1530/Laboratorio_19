// Ejercicio 9 – Buscador visual de Pokémon por ID
// Autora: Aleyda Quispe
const urlBase = "https://pokeapi.co/api/v2/pokemon/";
const inputId = document.querySelector("#inputId");
const botonBuscar = document.querySelector("#botonBuscar");
const imagenPokemon = document.querySelector("#imagenPokemon");
const nombrePokemon = document.querySelector("#nombrePokemon");
const idPokemon = document.querySelector("#idPokemon");
const pesoPokemon = document.querySelector("#pesoPokemon");
const alturaPokemon = document.querySelector("#alturaPokemon");
const habilidadesPokemon = document.querySelector("#habilidadesPokemon");

botonBuscar.addEventListener("click", function () {
    const idIngresado = inputId.value;
    const urlFinal = urlBase + idIngresado;

    fetch(urlFinal)
        .then(res => res.json())
        .then(data => {
            imagenPokemon.src = data.sprites.front_default;
            nombrePokemon.textContent = "Nombre: " + data.name;
            idPokemon.textContent = "ID: " + data.id;
            pesoPokemon.textContent = "Peso: " + data.weight;
            alturaPokemon.textContent = "Altura: " + data.height;
            const listaHabilidades = data.abilities.map(a => a.ability.name);
            habilidadesPokemon.textContent = "Habilidades: " + listaHabilidades.join(", ");
        })
        .catch(err => {
            console.error("Error:", err);
            nombrePokemon.textContent = "Pokémon no encontrado.";
            imagenPokemon.src = "";
            idPokemon.textContent = "";
            pesoPokemon.textContent = "";
            alturaPokemon.textContent = "";
            habilidadesPokemon.textContent = "";
        });
});