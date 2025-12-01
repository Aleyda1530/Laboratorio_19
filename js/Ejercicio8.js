// Ejercicio 8 – Obtener un Pokémon aleatorio (ID del 1 al 898)
// Autora: Aleyda Quispe
const urlBase = "https://pokeapi.co/api/v2/pokemon/";
const idAleatorio = Math.floor(Math.random()*898) + 1;
const urlFinal = urlBase + idAleatorio;

console.log("ID aleatorio generado: ", idAleatorio);
fetch(urlFinal)
    .then(res => res.json())
    .then(data => {
        console.log("Datos del Pokémon aleatorio obtenido: ");
        console.log("Nombre: ", data.name);
        console.log("ID: ", data.id);
        console.log("Altura: ", data.height);
        console.log("Peso: ", data.weight);
    })
    .catch(err => console.log("Error: ", err));
    