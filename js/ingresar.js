const nombre = document.getElementById("name")
const email = document.getElementById("email")
const nick = document.getElementById("nickname")
const form = document.getElementById("form")
const parrafo =  document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `el nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value))
        warnings += `el email no es valido <br>`
        entrar = true
    if(nick.value.length < 4){
        warnings += `el nick no es valido <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})


// const nombre = prompt("Ingresá tu nombre");
// const apellido = prompt("Ingresá tu apellido");


// const persona1 = {
//     nombre: nombre,
//     apellido: apellido,
// }
