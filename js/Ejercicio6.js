// Ejercicio 6 – Mostrar la URL de sprites.front_default de Charizard
// Autora: Aleyda Quispe
const urlBase = "https://pokeapi.co/api/v2/pokemon/";
const nombrePokemon = "charizard";
const urlFinal = urlBase + nombrePokemon;
fetch(urlFinal)
    .then(res => res.json())
    .then(data => {
        console.log("Sprite front_default de Charizard:", data.sprites.front_default);
    })
    .catch(err => console.error("Error: ", err));

