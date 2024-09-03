const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})

//do {
    //                 Pregunta1 = parseInt(prompt("¿Te gustan las peliculas de comedia?\n\n1. Si\n2. No\n\n0. Para volver al menu principal"))
    
    
    //                 switch (Pregunta1) {
    //                     case 1:
    //                         const primeraSugerencia = ["DEADPOOL & WOLVERINE", "BAD BOYS: HASTA LA MUERTE", "La matriarca"];
    //                         primeraSugerencia.forEach((peliculascomedia) => alert(persona1.nombre + " " + persona1.apellido + ", " + "te recomendamos:" + " -" + peliculascomedia));
    //                     break;
    //                     case 2:
    //                         do {
    //                             Pregunta2 = parseInt(prompt("¿Te gustan las peliculas de terror?\n\n1. Si\n2. No\n\n0. Para volver atras"))
    
    
    //                             switch (Pregunta2) {
    //                                 case 1:
    //                                     const segundaSugerencia = ["UN LUGAR EN SILENCIO: DIA UNO", "El último conjuro"];
    //                                     segundaSugerencia.forEach((peliculasterror) => alert(persona1.nombre + " " + persona1.apellido + " " + "te recomendamos:" + " -" + peliculasterror));
    //                                 break;
    //                                 case 2:
    //                                     do {
    //                                         Pregunta3 = parseInt(prompt("¿Te gustan las peliculas animadas?\n\n1. Si\n2. No\n\n0. Para volver atras"))
    
    
    //                                         switch (Pregunta3) {
    //                                             case 1:
    //                                                 const terceraSugerencia = ["INTENSAMENTE 2", "MI VILLANO FAVORITO 4"];
    //                                                 terceraSugerencia.forEach((peliculasanimadas) => alert(persona1.nombre + " " + persona1.apellido + " " + "te recomendamos:" + " -" + peliculasanimadas));
    //                                             break;
    //                                             case 2:
    //                                                 alert("Perdon no tenemos lo que buscas. :(")
    //                                             break;
    //                                             case 0:
    //                                                 alert("Volviste atras");
    //                                             break; 
    //                                             default:
    //                                                 alert("opcion invalida. Ingresa una opcion valida")
    //                                             break;
    //                                             } 
    //                                         }
    //                                     while (Pregunta1 !==0, Pregunta2 !==0, Pregunta3 !==0);
    //                                 break;
    //                                 case 0:
    //                                     alert("Volviste atras");
    //                                 break; 
    //                                 default:
    //                                     alert("opcion invalida. Ingresa una opcion valida")
    //                                 break;
    //                             } 
    //                         }
    //                         while (Pregunta1 !==0, Pregunta2 !==0);
    //                     break;
    //                     case 0:
    //                         alert("Volviste al menu principal");
    //                     break; 
    //                     default:
    //                         alert("opcion invalida. Ingresa una opcion valida")
    //                     break;
    //                 }
    //             } while (Pregunta1 !==0);