// Ejercicio 4 – Obtener altura y peso de Pikachu usando .then
// Autora: Aleyda Quispe
const urlBase = "https://pokeapi.co/api/v2/pokemon/";
const nombrePokemon = "pikachu";
const urlFinal = urlBase + nombrePokemon;
fetch(urlFinal)
    .then(res => res.json())
    .then(data => {
        console.log("La altura de pikachu es: ", data.height);
        console.log("El peso de pikachu es: ", data.weight);
    })
    .catch(err => console.error("Error: ", err));
    