import Usuario from "../clases/claseUsuario.js"

const Crearcuenta = document.getElementById("Crearcuenta")
Crearcuenta.addEventListener("submit", ()=>{
  const newusuario= {
    nombre: Crearcuenta.nombre.value,
    correo: Crearcuenta.correo.value,
    password: Crearcuenta.password.value,
    telefono: Crearcuenta.telefono.value
  }  

  localStorage.setItem("Usuariosingresados", JSON.stringify(new Usuario(newusuario)))
  localStorage.setItem("logginveterinaria", JSON.stringify(true))
  location.reload()
})