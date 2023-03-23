let tituloPrincipal = document.getElementById("titulo")
console.log(tituloPrincipal.innerHTML)
tituloPrincipal.innerHTML="este es el nuevo titulo"
tituloPrincipal.style.color="yellow"
tituloPrincipal.style.backgroundColor="green"

let parrafoDelSitio=document.querySelector ("p")
let botonDelSitio = document.getElementById("boton")
botonDelSitio.onclick=function () {
    parrafoDelSitio.style.textAlign ="center"
}
