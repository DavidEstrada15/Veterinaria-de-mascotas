import Usuario from "../clases/claseUsuario.js"
const usuariosingresados= JSON.parse(localStorage.getItem("Usuariosingresados")) || []
const Crearcuenta = document.getElementById("Crearcuenta")
Crearcuenta.addEventListener("submit", (e)=>{
  e.preventDefault()
  const newusuario= {
    nombre: Crearcuenta.nombre.value,
    correo: Crearcuenta.correo.value,
    password: Crearcuenta.password.value,
    telefono: Crearcuenta.telefono.value
  }
  const usuarioconvertido= new Usuario(newusuario)  
  usuariosingresados.push(usuarioconvertido)
  localStorage.setItem("Usuariosingresados", JSON.stringify(usuariosingresados))
  localStorage.setItem("logginveterinaria", JSON.stringify(true))
  localStorage.setItem("ActualUserveterinaria", JSON.stringify(usuarioconvertido))
  location.href= "Agendarcita/Agendarcita.html"
})