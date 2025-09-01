const logginveterinaria= JSON.parse(localStorage.getItem("logginveterinaria"))
const button1= document.getElementById("button1")
const button2= document.getElementById("button2")
const textformulario= document.getElementById("textformulario")
const redirectoaformulariooaagendar= document.getElementById("redirectoaformulariooaagendar")
const redirecttoregisteroragend= document.getElementById("redirecttoregisteroragend")
const buttondividir= document.getElementById("buttondividir")
if (logginveterinaria == true) {
    button1.style.display= "none"
    button2.style.display= "none"
    buttondividir.style.display= "none"
    textformulario.textContent= "Agenda una cita en el horario que prefieras"
    redirectoaformulariooaagendar.href= "formularios/Agendarcita/Agendarcita.html"
    redirectoaformulariooaagendar.innerText= "Agenda tus citas"
    redirecttoregisteroragend.href= "formularios/Agendarcita/Agendarcita.html"
}