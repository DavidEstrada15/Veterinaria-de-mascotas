const clientsfrecuentscontainer= document.getElementById("clientsfrecuentscontainer")
const buttonleft= document.getElementById("buttonleft")
const buttonleftcontainer= document.getElementById("buttonleftcontainer")
const buttonright= document.getElementById("buttonright")
const buttonrightcontainer= document.getElementById("buttonrightcontainer")
let clienteactual= 220
const clientsfrecuents= document.querySelectorAll(".clientsfrecuents")
const carruselclients= document.getElementById("carruselclients")
let posicionactual= 0

buttonleft.addEventListener("click", ()=>{
    clienteactual -= 220
carruselclients.style.marginLeft= `-${clienteactual}px`
posicionactual --
if (posicionactual < 1) {
    buttonleft.style.visibility= "hidden"
    buttonleftcontainer.style.visibility= "hidden"
}else{
    buttonleft.style.visibility= "visible"
    buttonleftcontainer.style.visibility= "visible"
}

 if (posicionactual >= clientsfrecuents.length - 2) {
    buttonright.style.visibility= "hidden"
    buttonrightcontainer.style.visibility= "hidden"}else{
        buttonright.style.visibility= "visible"
    buttonrightcontainer.style.visibility= "visible"
    }

})

buttonright.addEventListener("click", ()=>{
carruselclients.style.marginLeft = `-${clienteactual}px`
     clienteactual += 220
     posicionactual++
     if (posicionactual >= clientsfrecuents.length - 2) {
    buttonright.style.visibility= "hidden"
    buttonrightcontainer.style.visibility= "hidden"
}

if (posicionactual < 1) {
    buttonleft.style.visibility= "hidden"
    buttonleftcontainer.style.visibility= "hidden"
}else{
    buttonleft.style.visibility= "visible"
    buttonleftcontainer.style.visibility= "visible"
}
})

if (posicionactual < 1) {
    buttonleft.style.visibility= "hidden"
    buttonleftcontainer.style.visibility= "hidden"
}else{
    buttonleft.visibility= "visible"
    buttonleftcontainer.style.visibility= "visible"
}



