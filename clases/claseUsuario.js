class Usuario {
    constructor(usuario) {
        this.nombre= usuario.nombre,
        this.correo= usuario.correo,
        this.password= usuario.password,
        this.telefono = usuario.telefono
    }

    getUserinfo() {
        return `${this.nombre}, ${this.correo}, ${this.password}, ${this.telefono}`
    }
}

export default Usuario