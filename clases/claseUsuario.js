class Usuario {
    constructor(usuario) {
        this.id =  usuario.id || `${Math.floor((Math.random() * 899)  + 100) } ${Math.floor((Math.random() * 899)  + 100) }`
        this.nombre= usuario.nombre,
        this.correo= usuario.correo,
        this.password= usuario.password,
        this.telefono = usuario.telefono,
        this.consultas= usuario.consultas || []
    }

    getUserinfo() {
        return `${this.nombre}, ${this.correo}, ${this.password}, ${this.telefono}`
    }

    returnid(){
        return this.id
    }
    
    returnconsultas(){
        return this.consultas
    }
}

export default Usuario