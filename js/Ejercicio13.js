// Ejercicio 13 – Mostrar stats de un Pokémon en una tabla
// Autora: Aleyda Quispe
let inputPokemon = document.querySelector("#inputPokemon");
let botonBuscar = document.querySelector("#botonBuscar");
let contenedorStats = document.querySelector("#contenedorStats");

botonBuscar.addEventListener("click", async function() {
    let valorIngresado = inputPokemon.value.trim().toLowerCase();
    if (valorIngresado === "") 
        contenedorStats.innerHTML = "<p>Ingresa un nombre o ID válido.</p>";
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valorIngresado}`);
        if (!respuesta.ok)
            throw new Error("Pokémon no encontrado");
        let data = await respuesta.json();
        let filas = "";
        data.stats.forEach(stat => {
            filas += `
                <tr>
                    <td>${stat.stat.name}</td>
                    <td>${stat.base_stat}</td>
                </tr>
            `;
        });
        contenedorStats.innerHTML = `
            <h2>Estadísticas de: ${data.name}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    ${filas}
                </tbody>
            </table>
        `;
    } catch (error) {
        contenedorStats.innerHTML = "<p>Error: Pokémon no encontrado.</p>";
    }
});
