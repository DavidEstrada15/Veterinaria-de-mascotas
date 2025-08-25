const clientsfrecuentscontainer= document.getElementById("clientsfrecuentscontainer")
const buttonleft= document.getElementById("buttonleft")
const buttonleftcontainer= document.getElementById("buttonleftcontainer")
const buttonright= document.getElementById("buttonright")
const buttonrightcontainer= document.getElementById("buttonrightcontainer")
let clienteactual= 0
const clientsfrecuents= document.querySelectorAll(".clientsfrecuents")
const carruselclients= document.getElementById("carruselclients")
let posicionactual= 0

buttonleft.addEventListener("click", ()=>{
    clienteactual -= 220
carruselclients.style.marginLeft= `-${clienteactual}px`
posicionactual --
comprobarvisibilidad()
})

function comprobarvisibilidad() {
    if (posicionactual >= clientsfrecuents.length - 2) {
        buttonright.style.visibility= "hidden"
        buttonrightcontainer.style.visibility= "hidden"}else{
            buttonright.style.visibility= "visible"
        buttonrightcontainer.style.visibility= "visible"
        }

        if (posicionactual < 1) {
            buttonleft.style.visibility= "hidden"
            buttonleftcontainer.style.visibility= "hidden"
        }else{
            buttonleft.style.visibility= "visible"
            buttonleftcontainer.style.visibility= "visible"
        }
}

buttonright.addEventListener("click", ()=>{
carruselclients.style.marginLeft = `-${clienteactual}px`
     clienteactual += 220
     posicionactual++
    comprobarvisibilidad()
})

comprobarvisibilidad()