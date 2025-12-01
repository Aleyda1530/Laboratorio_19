// Ejercicio 7 – Listar los primeros 20 Pokémon
// Autora: Aleyda Quispe
const urlPokemones = "https://pokeapi.co/api/v2/pokemon?limit=20";
fetch(urlPokemones)
    .then(res => res.json())
    .then(data => {
        console.log("Los primeros 20 Pokémon son:");
        console.log(data.results); 
    })
    .catch(err => console.error("Error:", err));
