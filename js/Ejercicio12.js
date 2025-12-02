// Ejercicio 12 – Mostrar estadísticas base de un Pokémon
// Autora: Aleyda Quispe
async function mostrarEstadisticasPokemon(nombrePokemon) {
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`);
        if (!respuesta.ok)
            throw new Error("Pokémon no encontrado");
        let data = await respuesta.json();
        console.log("Estadística base de: ", data.name);
        data.stats.forEach(stat => {
            console.log(`${stat.stat.name}: ${stat.base_stat}`);
        });
    }
    catch(e) {
        console.error("Error: ", e.message);
    }
}
mostrarEstadisticasPokemon("pikachu");
