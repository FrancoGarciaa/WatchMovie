

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
            alert('Gracias, Vuelva pronto');
        break; 
        case 1:
            let mensajeUno = 'Cartelera:\n\n-BAD BOYS: HASTA LA MUERTE\n-INTENSAMENTE 2\n-MI VILLANO FAVORITO 4\n-TORNADOS\n-BLACK PINK WORLD TOUR BORN PINK';
            alert(mensajeUno);
        break; 
        case 2:
            let mensajeDos = 'Peliculas en estreno:\n\n-LA MATRIARCA\n-UN LUGAR EN SILENCIO: DÍA UNO\n-CLUB CERO\n-DEADPOOL & WOLVERINE';
            alert(mensajeDos);
            let operacion
            do {
            operacion = prompt("Ingrese la operación que desea realizar (+ - * /). Para salir, ingrese la palabra salir");
            switch (operacion) {
            case "salir":
            alert("Gracias, vuelvas prontos!");
            break;
            case "+":
            suma();
            break;
            case "-":
            resta();
            break;
default:
alert("Valor ingresado no es correcto")
break;
}


} while (operacion !== "salir");
        break; 
        case 3:
            let mensajeTres = 'Combos disponibles:\n\n-Balde de Pochoclo + 2 cocas grandes ($7500)\n-2 Bolsas de Pochoclos + 2 cocas grandes ($7000)\n-Nachos con queso + 1 coca grande ($4500)\n-Pizza + 1 coca grande ($5000)\n\n-Ingresar 5 si quiere sumar los precios de los combos';
            alert(mensajeTres);
            
            
            break; 
        case 4:
            let mensajeCuatro = 'Ventas anticipadas\n\n-Avengers 5\n-Thunderbolts\n-Avatar 3\n-Toy Story 5\n-Tron: Ares';
            alert(mensajeCuatro);
        break; 
        default:
            alert('opcion invalida. Ingresa una opcion valida')
        break;
    }

}while(pelicula !==0);

