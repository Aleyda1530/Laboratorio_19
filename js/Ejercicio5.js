// Ejercicio 5 – Obtener altura y peso de Pikachu usando async/await
// Autora: Aleyda Quispe
const urlBase = "https://pokeapi.co/api/v2/pokemon/";
const nombrePokemon = "pikachu";
const urlFinal = urlBase + nombrePokemon;
async function obtenerAlturaYpeso() {
    try {
         const respuesta = await fetch(urlFinal);
         const datosPokemon = await respuesta.json();
         console.log("Altura del Pikachu: ", datosPokemon.height);
         console.log("Peso de pikachu: ", datosPokemon.weight);
    }
    catch(e) {
        console.error("Error: ", e);
    }
}
obtenerAlturaYpeso();
