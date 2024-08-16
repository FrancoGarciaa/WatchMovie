const nombre = prompt("Ingresá tu nombre");
const apellido = prompt("Ingresá tu apellido");


const persona1 = {
    nombre: nombre,
    apellido: apellido,
}

switch (Pregunta3) {
    case 1:
        const terceraSugerencia = ["INTENSAMENTE 2", "MI VILLANO FAVORITO 4"];
        terceraSugerencia.forEach((peliculasanimadas) => alert(persona1.nombre + " " + persona1.apellido + " " + "te recomendamos:" + " -" + peliculasanimadas));
    break;
    case 2:
        alert("Perdon no tenemos lo que buscas. :(")
    break;
    case 0:
        alert("Volviste atras");
    break; 
    default:
        alert("opcion invalida. Ingresa una opcion valida")
    break;
    } 