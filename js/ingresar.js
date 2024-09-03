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
    if(!regexEmail.test(email.value)){
        warnings += `el email no es valido <br>`
        entrar = true
        }
    if(nick.value.length < 4){
        warnings += `el nick no es valido <br>`
        entrar = true
    }

    const data = {
        nombre: nombre.value,
        nickname: nick.value,
        email: email.value
    }
localStorage.setItem("usuario", JSON.stringify(data));

let datosUsuario2 = localStorage.getItem("usuario")

const datosUsuario = JSON.parse(localStorage.getItem("usuario"));

if (entrar) {
    parrafo.innerHTML = warnings
} else {
    Swal.fire({
        title: "Bienvenido" + " " + datosUsuario.nickname,
        text: "a WatchCity.",
        imageUrl: "https://scontent.faep27-1.fna.fbcdn.net/v/t39.30808-6/293488158_5565352283485696_9017649600538333149_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K5M5qJVm7LwQ7kNvgFQlWpV&_nc_ht=scontent.faep27-1.fna&oh=00_AYDyDQvNG4cIa1hwBClSmtOUVfObExHVxZmArK50oNLyVg&oe=66D9E505",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonText: "Verificar", 
        footer: '<a href="index.html">ENTRAR</a>'
    });
}
})
