const formanimalyconsulta= document.getElementById("formanimalyconsulta")
const logginveterinaria= JSON.parse(localStorage.getItem("logginveterinaria"))
const usuariosingresados= JSON.parse(localStorage.getItem("Usuariosingresados"))
const ActualUserveterinaria= JSON.parse(localStorage.getItem("ActualUserveterinaria"))
const Citas= document.getElementById("Citas")
const Genero= document.getElementById("Genero")
const cerrarsesion= document.getElementById("cerrarsesion")
let Modal= document.getElementById("Modal")
import Animales from "../../clases/claseAnimales.js"
import Consulta from "../../clases/claseConsulta.js"
import Usuario from "../../clases/claseUsuario.js"

comprobarloggin()
cerrarsesion.addEventListener("click", () =>  {
  const pregunta= confirm("Estas seguro de cerrar sesion ?")
  if (pregunta == true) {
      localStorage.removeItem("ActualUserveterinaria")
  localStorage.setItem("logginveterinaria", JSON.stringify(false))
  location.reload()
  }

})

window.abrirmodal = function(id) {
let consultaactual= ActualUserveterinaria.consultas.find( consulta => consulta.id == id)
consultaactual = new Consulta(consultaactual)
Modal.style.animation= `aparecer 1s ease both`
Modal.innerHTML= `<article> <div><svg onclick = "{cerrarmodal()}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></div> <h2> Motivo de la cita: ${consultaactual.returnMotivo()}</h2> <p> Hora de la cita:${consultaactual.returnHora()} <p> Fecha de la cita: ${consultaactual.returnFecha()} </p> </p> </article>`
}

window.cerrarmodal = function(){
  Modal.style.animation= `desaparecer 1s ease both`
}

ActualUserveterinaria.consultas.forEach(consulta => {
  consulta= new Consulta(consulta)
  let mascotadata= new Animales(consulta.Mascota)
  Citas.innerHTML += `
  <article onclick = "{abrirmodal(${consulta.returnconsultaid()})}"> 
  <h2>Nombre: ${mascotadata.returnnombre()}</h2>
  <p>Especie: ${mascotadata.returnespecie()} </p>
  <p> Edad: ${mascotadata.returnedad()} </p>
  <p> Genero: ${mascotadata.returngenero()} </p>
   <img src= "${mascotadata.returnimage()}" alt =" imagen de la mascota">
  </articole>
  `
});

formanimalyconsulta.addEventListener("submit", (e)=>{
e.preventDefault()
const Mascota= {
  nombre: formanimalyconsulta.name.value,
  especie: formanimalyconsulta.especie.value,
  edad: formanimalyconsulta.edad.value,
  genero: Genero.value, 
  image: formanimalyconsulta.image.value
}

const newConsulta= {
   Fecha: formanimalyconsulta.fecha.value,
   Hora: formanimalyconsulta.hora.value,
   Motivo: formanimalyconsulta.motivo.value,
   Mascota: new Animales(Mascota)
}

ActualUserveterinaria.consultas.push(new Consulta(newConsulta))
localStorage.setItem("ActualUserveterinaria", JSON.stringify(ActualUserveterinaria))
usuariosingresados.forEach(usuario => {
  let usuarionew= new Usuario(usuario)
  let Actualusernew= new Usuario(ActualUserveterinaria)
if (usuarionew.returnid() == Actualusernew.returnid()) {
  usuarionew.consultas = Actualusernew.returnconsultas()
}
console.log(usuariosingresados)
localStorage.setItem("Usuariosingresados", JSON.stringify(usuariosingresados))
});
})

function comprobarloggin() {
  if (logginveterinaria != true) {
    alert("Hazte una cuenta para hacer consultas")
    location.href= "../login.html"
}
}