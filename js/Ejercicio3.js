// Ejercicio 3 – Pedir ID de Pokémon y mostrar su nombre en consola
// Autora: Aleyda Quispe

const urlBase = "https://pokeapi.co/api/v2/pokemon/";
let idIngresado = prompt("Ingrese el ID de un Pokémon:");
let urlFinal = urlBase + idIngresado;
fetch(urlFinal)
    .then(res => res.json())
    .then(data => console.log("Nombre del Pokémon:", data.name))
    .catch(err => console.error("Error:", err));
    