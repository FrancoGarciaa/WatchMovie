

const nombre = prompt("Ingresá tu nombre");

function saludarPersona(){
alert("Bienvenido, " + nombre);
};

saludarPersona();

let pelicula;

alert("Bienvenido a WatchMovie");


do {

pelicula = parseInt(prompt("Marca la opcion\n\n1. Cartelera\n2. Mostrar peliculas recien en estreno\n3. Mostrar combos disponibles\n4. Ventas ancipadas de estrenos\n\nPara salir, ingrese 0"));

    switch (pelicula) {
        case 0:
            alert("Gracias, Vuelva pronto");
        break; 
        case 1:
            let primeraOpcion = "Cartelera:\n\n-BAD BOYS: HASTA LA MUERTE\n-INTENSAMENTE 2\n-MI VILLANO FAVORITO 4\n-TORNADOS\n-BLACK PINK WORLD TOUR BORN PINK";
            alert(primeraOpcion);
        break; 
        case 2:
            let segundaOpcion = "Peliculas en estreno:\n\n-LA MATRIARCA\n-UN LUGAR EN SILENCIO: DÍA UNO\n-CLUB CERO\n-DEADPOOL & WOLVERINE";
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
            operacion = prompt("Confirme de sumar combos ingresando el numero 5\n\nPara volver al menu ingrese 6");
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
        default:
            alert("opcion invalida. Ingresa una opcion valida")
        break;
    }

}while(pelicula !==0);




