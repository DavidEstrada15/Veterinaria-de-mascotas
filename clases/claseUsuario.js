class Usuario {
    constructor(usuario) {
        this.id =  usuario.id || `${Math.floor(Math.random() * 500) - Math.floor(Math.random() * 500)}`
        this.nombre= usuario.nombre,
        this.correo= usuario.correo,
        this.password= usuario.password,
        this.telefono = usuario.telefono,
        this.consultas= usuario.consultas || []
    }

    getUserinfo() {
        return `${this.nombre}, ${this.correo}, ${this.password}, ${this.telefono}`
    }
}

export default Usuario