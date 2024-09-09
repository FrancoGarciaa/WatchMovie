let peliculas = [];

fetch("./js/peliculas.json")
    .then(response => response.json())
    .then(data => {
        peliculas = data;
        cargarpeliculas(peliculas);
    })


const contenedorpeliculas = document.querySelector("#contenedor-peliculas");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".pelicula-agregar");
const numeroCantidad = document.querySelector("#numeroCantidad");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    header.classList.remove("header-visible");
}))


function cargarpeliculas(peliculasElegidos) {
    contenedorpeliculas.innerHTML = "";

    peliculasElegidos.forEach(pelicula => {
        if (pelicula.categoria.id !== 'sugerencia') {  
            const div = document.createElement("div");
            div.classList.add("pelicula");
            div.innerHTML = 
                `<img class="pelicula-imagen" src="${pelicula.imagen}" alt="${pelicula.titulo}">
                <div class="pelicula-detalles">
                    <h3 class="pelicula-titulo">${pelicula.titulo}</h3>
                    <p class="pelicula-precio">$${pelicula.precio}</p>
                    <button class="pelicula-agregar" id="${pelicula.id}">Agregar</button>
                </div>`;

            contenedorpeliculas.append(div);
        }
    });

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todos") {
            const peliculasCategoria = peliculas.filter(pelicula => pelicula.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = e.currentTarget.innerText;
            cargarpeliculas(peliculasCategoria);
        } else {
            tituloPrincipal.innerText = "CARTELERA";
            const peliculasSinCombos = peliculas.filter(pelicula => pelicula.categoria.id !== "combos");
            cargarpeliculas(peliculasSinCombos);
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".pelicula-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let peliculasEnCarrito;

let peliculasEnCarritoLS = localStorage.getItem("peliculas-en-carrito");

if (peliculasEnCarritoLS) {
    peliculasEnCarrito = JSON.parse(peliculasEnCarritoLS);
    actualizarNumerito();
} else {
    peliculasEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const peliculaAgregada = peliculas.find(pelicula => pelicula.id === idBoton);
    
    let mensajeToast;
    if (peliculaAgregada.id.startsWith('combo')) {
        mensajeToast = "Agregar combo";
    } else if (peliculaAgregada.id.startsWith('estreno')) {
        mensajeToast = "Agregar entrada de estrenos";
    } else if (peliculaAgregada.id.startsWith('preeventa')) {
        mensajeToast = "Agregar entrada de preestreno";
    } else {
        mensajeToast = "Agregar item";
    }

    Toastify({
        text: mensajeToast,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #352a35, #352a35)",
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

    if (peliculasEnCarrito.some(pelicula => pelicula.id === idBoton)) {
        const index = peliculasEnCarrito.findIndex(pelicula => pelicula.id === idBoton);
        peliculasEnCarrito[index].cantidad++;
    } else {
        peliculaAgregada.cantidad = 1;
        peliculasEnCarrito.push(peliculaAgregada);
    }

    actualizarNumerito();

    localStorage.setItem("peliculas-en-carrito", JSON.stringify(peliculasEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = peliculasEnCarrito.reduce((acc, pelicula) => acc + pelicula.cantidad, 0);
    numeroCantidad.innerText = nuevoNumerito;
}


    addEventListener('DOMContentLoaded', () => {

        const imagenes = ['assets/publicidad1.jpeg', 'assets/publicidad2.jpeg', 'assets/publicidad3.jpeg' ,'assets/publicidad4.jpeg',
                        'assets/publicidad5.jpeg', 'assets/publicidad6.jpeg', 'assets/publicidad7.jpeg', 'assets/publicidad8.jpeg', 'assets/publicidad9.jpeg', 'assets/publicidad10.jpeg']
        let i = 1
        const img1 = document.querySelector('#img1')
        const img2 = document.querySelector('#img2')
        const progressBar = document.querySelector('#progress-bar')
        const divIndicadores = document.querySelector('#indicadores')
        let porcentaje_base = 100/imagenes.length
        let porcentaje_actual = porcentaje_base
    
        for (let index = 0; index < imagenes.length; index++) {
            const div = document.createElement('div')
            div.classList.add('circles')
            div.id = index
            divIndicadores.appendChild(div)
        }
    
        progressBar.style.width = `${porcentaje_base}%`
        img1.src = imagenes[0]
        const circulos = document.querySelectorAll('.circles')
        circulos[0].classList.add('resaltado')
    
        const slideshow = () => {
            img2.src = imagenes[i]
            const circulo_actual = Array.from(circulos).find(el => el.id == i)
            Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'))
            circulo_actual.classList.add('resaltado')
    
            img2.classList.add('active')
            i++
            porcentaje_actual+=porcentaje_base
            progressBar.style.width = `${porcentaje_actual}%`
            if (i == imagenes.length) {
                i = 0
                porcentaje_actual = porcentaje_base - porcentaje_base
            }
    
            setTimeout(() => {
                img1.src = img2.src
                img2.classList.remove('active')
            }, 1000)
        }
        setInterval(slideshow, 4000)
    })

