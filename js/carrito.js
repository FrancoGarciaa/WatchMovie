let peliculasEnCarrito = localStorage.getItem("peliculas-en-carrito");
peliculasEnCarrito = JSON.parse(peliculasEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritopeliculas = document.querySelector("#carrito-peliculas");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-pelicula-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarpeliculasCarrito() {
    if (peliculasEnCarrito && peliculasEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritopeliculas.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritopeliculas.innerHTML = "";
    
        peliculasEnCarrito.forEach(pelicula => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-pelicula");
            div.innerHTML = `
                <img class="carrito-pelicula-imagen" src="${pelicula.imagen}" alt="${pelicula.titulo}">
                <div class="carrito-pelicula-titulo">
                    <small>Título</small>
                    <h3>${pelicula.titulo}</h3>
                </div>
                <div class="carrito-pelicula-cantidad">
                    <small>Cantidad</small>
                    <p>${pelicula.cantidad}</p>
                </div>
                <div class="carrito-pelicula-precio">
                    <small>Precio</small>
                    <p>$${pelicula.precio}</p>
                </div>
                <div class="carrito-pelicula-subtotal">
                    <small>Subtotal</small>
                    <p>$${pelicula.precio * pelicula.cantidad}</p>
                </div>
                <button class="carrito-pelicula-eliminar" id="${pelicula.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritopeliculas.append(div);
        })
    
    actualizarBotonesEliminar();
    actualizarTotal();
	
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritopeliculas.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

}

cargarpeliculasCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-pelicula-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    Toastify({
        text: "pelicula eliminada",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, #4b33a8, #785ce9)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem' 
        },
        onClick: function(){}
    }).showToast();

    const idBoton = e.currentTarget.id;
    const index = peliculasEnCarrito.findIndex(pelicula => pelicula.id === idBoton);
    
    peliculasEnCarrito.splice(index, 1);
    cargarpeliculasCarrito();

    localStorage.setItem("peliculas-en-carrito", JSON.stringify(peliculasEnCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        imageUrl: "./assets/meme1.jpeg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        html: `Se van a borrar ${peliculasEnCarrito.reduce((acc, pelicula) => acc + pelicula.cantidad, 0)} peliculas.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            peliculasEnCarrito.length = 0;
            localStorage.setItem("peliculas-en-carrito", JSON.stringify(peliculasEnCarrito));
            cargarpeliculasCarrito();
        }
    })
}


function actualizarTotal() {
    const totalCalculado = peliculasEnCarrito.reduce((acc, pelicula) => acc + (pelicula.precio * pelicula.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    Swal.fire({
        title: "Gracias",
        text: "Por tu compra",
        imageUrl: "./assets/meme3.jpeg",
        imageWidth: 350,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonText: "Denada", 
    });
    peliculasEnCarrito.length = 0;
    localStorage.setItem("peliculas-en-carrito", JSON.stringify(peliculasEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritopeliculas.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}