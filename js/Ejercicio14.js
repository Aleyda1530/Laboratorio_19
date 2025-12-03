// Ejercicio 14 – Tarjetas con navegación de 3 en 3 (versión corregida)
// Autora: Aleyda Quispe (actualizado)

document.addEventListener("DOMContentLoaded", () => {
    const urlBase = "https://pokeapi.co/api/v2/pokemon/";
    const listaPokemon = [];
    let indiceActual = 0;
    const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
    const botonAnterior = document.querySelector("#botonAnterior");
    const botonSiguiente = document.querySelector("#botonSiguiente");
    const mensajeEstado = document.querySelector("#mensajeEstado"); // opcional, puede estar o no
    if (mensajeEstado) 
        mensajeEstado.textContent = "Cargando Pokémon...";

    async function cargarPokemon() {
        try {
            const peticiones = [];
            for (let id = 1; id <= 12; id++) {
                peticiones.push(fetch(urlBase + id).then(res => {
                    if (!res.ok) throw new Error("HTTP " + res.status);
                    return res.json();
                }));
            }
            const resultados = await Promise.all(peticiones);
            resultados.forEach(data => {
                listaPokemon.push({
                    id: data.id,
                    nombre: data.name,
                    imagen: data.sprites.front_default || "", // puede ser null
                });
            });
            if (mensajeEstado) mensajeEstado.textContent = "";
            mostrarTarjetas();
        } catch (error) {
            console.error("Error al cargar los Pokémon:", error);
            if (mensajeEstado) mensajeEstado.textContent = "Error al cargar Pokémon. Revisa la consola.";
            botonAnterior.disabled = true;
            botonSiguiente.disabled = true;
        }
    }
    function mostrarTarjetas() {
        contenedorTarjetas.innerHTML = "";
        if (listaPokemon.length === 0)
            contenedorTarjetas.innerHTML = "<p>No hay Pokémon para mostrar.</p>";
        const grupo = listaPokemon.slice(indiceActual, indiceActual + 3);
        grupo.forEach(poke => {
            const tarjeta = document.createElement("div");
            tarjeta.className = "tarjetaPokemon";

            const img = document.createElement("img");
            img.src = poke.imagen || "https://via.placeholder.com/120?text=No+img";
            img.alt = poke.nombre;

            const pId = document.createElement("p");
            pId.textContent = `ID: ${poke.id}`;

            const pNombre = document.createElement("p");
            pNombre.textContent = `Nombre: ${poke.nombre}`;

            tarjeta.appendChild(img);
            tarjeta.appendChild(pId);
            tarjeta.appendChild(pNombre);
            contenedorTarjetas.appendChild(tarjeta);
        });
        actualizarBotones();
    }
    function actualizarBotones() {
        botonAnterior.disabled = indiceActual === 0;
        botonSiguiente.disabled = indiceActual >= listaPokemon.length - 3;
    }
    botonSiguiente.addEventListener("click", () => {
        if (indiceActual + 3 < listaPokemon.length) {
            indiceActual += 3;
            mostrarTarjetas();
        }
    });
    botonAnterior.addEventListener("click", () => {
        if (indiceActual - 3 >= 0) {
            indiceActual -= 3;
            mostrarTarjetas();
        }
    });
    cargarPokemon();
});