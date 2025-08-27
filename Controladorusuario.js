class Controladorusuario {
    constructor() {
        actualuser= JSON.parse(localStorage.getItem("ActualUser")),
        users= JSON.parse(localStorage.getItem("Allusers"))
    }
}

export default Controladorusuario