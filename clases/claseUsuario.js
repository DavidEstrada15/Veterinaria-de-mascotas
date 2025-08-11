class Usuario {
    constructor(usuario) {
        this.nombre= usuario.nombre,
        this.correo= usuario.correo,
        this.password= usuario.password,
        this.telefono = usuario.telefono | "No ingreso"
    }
}

export default Usuario