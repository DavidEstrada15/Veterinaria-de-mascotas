import Usuario from "../clases/claseUsuario.js"

const Crearcuenta = document.getElementById("Crearcuenta")
Crearcuenta.addEventListener("submit", ()=>{
  const newusuario= {
    nombre: Crearcuenta.nombre.value,
    correo: Crearcuenta.correo.value,
    password: Crearcuenta.password.value,
    telefono: Crearcuenta.telefono.value
  }  

  new Usuario(newusuario)
  location.reload()
})