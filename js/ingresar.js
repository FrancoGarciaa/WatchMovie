const nick = document.getElementById("nickname")
const form = document.getElementById("form")
const parrafo =  document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(nick.value.length < 4){
        warnings += `el nick no es valido <br>`
        entrar = true
    }

    const data = {
        nickname: nick.value,
    }
localStorage.setItem("usuario", JSON.stringify(data));

let datosUsuario2 = localStorage.getItem("usuario")

const datosUsuario = JSON.parse(localStorage.getItem("usuario"));

if (entrar) {
    parrafo.innerHTML = warnings
} else {
    Swal.fire({
        title: "Bienvenido" + " " + datosUsuario.nickname,
        text: "a WatchMovie.",
        imageUrl: "./assets/meme.jpg",
        imageWidth: 350,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonText: "Verificar", 
        footer: '<a href="index2.html">ENTRAR</a>'
    });
}
})
