import Usuario from "../clases/claseUsuario.js"
const usuariosingresados= localStorage.getItem("Usuariosingresados") || []
const Crearcuenta = document.getElementById("Crearcuenta")
Crearcuenta.addEventListener("submit", (e)=>{
  e.preventDefault()
  const newusuario= {
    nombre: Crearcuenta.nombre.value,
    correo: Crearcuenta.correo.value,
    password: Crearcuenta.password.value,
    telefono: Crearcuenta.telefono.value
  }  

  localStorage.setItem("Usuariosingresados", JSON.stringify(new Usuario(newusuario)))
  localStorage.setItem("logginveterinaria", JSON.stringify(true))
  localStorage.setItem("ActualUserveterinaria", JSON.stringify(new Usuario(newusuario)))
  location.href= "Agendarcita/Agendarcita.html"
})