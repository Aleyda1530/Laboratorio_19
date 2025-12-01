// Ejercicio 11 – Mostrar nombre, imagen y tipos de un Pokémon
// Autora: Aleyda Quispe

let inputPokemon = document.querySelector("#inputPokemon");
let botonBuscar = document.querySelector("#botonBuscar");
let contenedorResultado = document.querySelector("#resultado");

botonBuscar.addEventListener("click", async function() {
    let valorIngresado = inputPokemon.value.trim().toLowerCase();
    if(valorIngresado === "")
        contenedorResultado.innerHTML = "<p>Por favor, ingresa un nombre o ID válido.</p>";
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${valorIngresado}`);
        if(!respuesta.ok)
            throw new Error("Pokémon no encontrado");
        let data = await respuesta.json();
        let nombre = data.name;
        let imagen = data.sprites.front_default;
        let tipos = data.types.map(tipo => tipo.type.name);
        
        contenedorResultado.innerHTML = `
            <div class="tarjetaPokemon">
                <img src="${imagen}" alt="Imagen de ${nombre}">
                <p>Nombre: ${nombre}</p>
                <p>Tipos: ${tipos.join(", ")}</p>
            </div>
        `;
    }
    catch(e) {
        contenedorResultado.innerHTML = "<p>Error: Pokémon no encontrado.</p>";
    }
});