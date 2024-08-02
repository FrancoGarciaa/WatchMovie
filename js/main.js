const nombre = prompt("Ingresá tu nombre");
const apellido = prompt("Ingresá tu apellido");


const persona1 = {
    nombre: nombre,
    apellido: apellido,
}

function saludarPersona(){
alert("Bienvenido, " + nombre + " " + apellido);
};

saludarPersona();

let pelicula;

alert("Bienvenido a WatchMovie");


do {

pelicula = parseInt(prompt("Marca la opcion\n\n1. Cartelera\n2. Mostrar peliculas recien en estreno\n3. Mostrar combos disponibles\n4. Ventas ancipadas de estrenos\n5. Para querer alguna sugerencia\n\nPara salir, ingrese 0"));

    switch (pelicula) {
        case 0:
            alert("Gracias, Vuelva pronto");
        break; 
        case 1:
            let primeraOpcion = "Cartelera:\n\n-BAD BOYS: HASTA LA MUERTE\n-INTENSAMENTE 2\n-MI VILLANO FAVORITO 4\n-TORNADOS\n-BLACK PINK WORLD TOUR BORN PINK";
            alert(primeraOpcion);
        break; 
        case 2:
            let segundaOpcion = "Peliculas en estreno:\n\n-LA MATRIARCA\n-UN LUGAR EN SILENCIO: DÍA UNO\n-CLUB CERO\n-DEADPOOL & WOLVERINE\n-El último conjuro";
            alert(segundaOpcion);
        break; 
        case 3:
            let terceraOpcion = "Combos disponibles:\n\n1. Balde de Pochoclo + 2 cocas grandes ($7500)\n2. 2 Bolsas de Pochoclos + 2 cocas grandes ($7000)\n3. Nachos con queso + 1 coca grande ($4500)\n4. Pizza + 1 coca grande ($5000)\n\nPara sumar pulse ACEPTAR";
            alert(terceraOpcion);
            let operacion
            do {
                function suma() {
                    const combo1 = parseInt(prompt("INGRESE EL PRECIO DEL PRIMER COMBO QUE QUIERA SUMAR\n\n1. Balde de Pochoclo + 2 cocas grandes ($7500)\n2. 2 Bolsas de Pochoclos + 2 cocas grandes ($7000)\n3. Nachos con queso + 1 coca grande ($4500)\n4. Pizza + 1 coca grande ($5000)"));
                    const combo2 = parseInt(prompt("INGRESE EL PRECIO DEL SEGUNDO COMBO QUE QUIERA SUMAR\n\n1. Balde de Pochoclo + 2 cocas grandes ($7500)\n2. 2 Bolsas de Pochoclos + 2 cocas grandes ($7000)\n3. Nachos con queso + 1 coca grande ($4500)\n4. Pizza + 1 coca grande ($5000)"));
                    let resultado1 = alert("El  resultado es $" + (combo1 + combo2));
                    };
            operacion = prompt("Confirme de sumar combos ingresando el numero 5\n\nPara volver al menu principal ingrese 6");

                switch (operacion) {
                case "6": 
                    break;
                case "5":
                    suma();
                break;
                default:
                    alert("Numero de combo ingresado no es correcto");
                    break;
        }
        } while (operacion !== "6");
            break; 
        case 4:
            let mensajeCuatro = "Proximamente\n\n-Avengers 5\n-Thunderbolts\n-Avatar 3\n-Toy Story 5\n-Tron: Ares";
            alert(mensajeCuatro);
        break; 
        case 5:
            let mensajeCinco = "Se le informa al usuario que tendra que responder preguntas con si/no para recibir algunas sugerencias de nuestra cartelera";
            alert(mensajeCinco);
            do {
                Pregunta1 = parseInt(prompt("¿Te gustan las peliculas de comedia?\n\n1. Si\n2. No\n\n0. Para volver al menu principal"))


                switch (Pregunta1) {
                    case 1:
                        const primeraSugerencia = ["DEADPOOL & WOLVERINE", "BAD BOYS: HASTA LA MUERTE", "La matriarca"];
                        primeraSugerencia.forEach((peliculascomedia) => alert(persona1.nombre + " " + persona1.apellido + ", " + "te recomendamos:" + " -" + peliculascomedia));
                    break;
                    case 2:
                        do {
                            Pregunta2 = parseInt(prompt("¿Te gustan las peliculas de terror?\n\n1. Si\n2. No\n\n0. Para volver atras"))


                            switch (Pregunta2) {
                                case 1:
                                    const segundaSugerencia = ["UN LUGAR EN SILENCIO: DIA UNO", "El último conjuro"];
                                    segundaSugerencia.forEach((peliculasterror) => alert(persona1.nombre + " " + persona1.apellido + " " + "te recomendamos:" + " -" + peliculasterror));
                                break;
                                case 2:
                                    do {
                                        Pregunta3 = parseInt(prompt("¿Te gustan las peliculas animadas?\n\n1. Si\n2. No\n\n0. Para volver atras"))


                                        switch (Pregunta3) {
                                            case 1:
                                                const terceraSugerencia = ["INTENSAMENTE 2", "MI VILLANO FAVORITO 4"];
                                                terceraSugerencia.forEach((peliculasanimadas) => alert(persona1.nombre + " " + persona1.apellido + " " + "te recomendamos:" + " -" + peliculasanimadas));
                                            break;
                                            case 2:
                                                if (2) {
                                                    return(pelicula)
                                                } else {
                                                }
                                                /*alert("Este cine no es para ti, Bye <3!")*/
                                            break;
                                            case 0:
                                                alert("Volviste atras");
                                            break; 
                                            default:
                                                alert("opcion invalida. Ingresa una opcion valida")
                                            break;
                                            }
                                        }
                                    while (Pregunta1 !==0, Pregunta2 !==0, Pregunta3 !==0);
                                break;
                                case 0:
                                    alert("Volviste atras");
                                break; 
                                default:
                                    alert("opcion invalida. Ingresa una opcion valida")
                                break;
                            } 
                        }
                        while (Pregunta1 !==0, Pregunta2 !==0);
                    break;
                    case 0:
                        alert("Volviste al menu principal");
                    break; 
                    default:
                        alert("opcion invalida. Ingresa una opcion valida")
                    break;
                }
            } while (Pregunta1 !==0);
        break; 
        default:
            alert("opcion invalida. Ingresa una opcion valida")
        break;
    
    }
}
while(pelicula !==0);








