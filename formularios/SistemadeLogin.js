const Ingresarcuenta = document.getElementById("Ingresarcuenta")
const allusers= JSON.parse(localStorage.getItem("Usuariosingresados"))
console.log(allusers)
Ingresarcuenta.addEventListener("submit", (e)=>{
    e.preventDefault()
    const userlogged= allusers.find( user => user.password == Ingresarcuenta.password.value && user.correo == Ingresarcuenta.email.value)
    if (userlogged != undefined) {
    localStorage.setItem("ActualUserveterinaria", JSON.stringify(userlogged))
    localStorage.setItem("logginveterinaria", JSON.stringify(true)) 
    location.href= "Agendarcita/Agendarcita.html"
    }else{
        alert("Contraseña o correo equivocado")
    }
    
})