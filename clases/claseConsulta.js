class Consulta {
    constructor(Consulta) {
        this.id = Consulta.id || `${Math.floor(Math.random() * 500) - Math.floor(Math.random() * 500)}`
        this.Fecha= Consulta.Fecha,
        this.Hora = Consulta.Hora,
        this.Motivo= Consulta.Motivo
        this.Mascota= Consulta.Mascota
    }

    returnconsultaid(){
        return this.id
    }
    returnconsulta() {
        return `${this.Motivo} - ${this.Mascota?.nombre} - ${this.Fecha} - ${this.Hora}`
    }
    returnFecha(){
        return this.Fecha
    }
    returnHora(){
        return this.Hora
    }
    returnMotivo(){
        return this.Motivo
    }
    returnMascota(){
        return this.Mascota
    }
}

export default Consulta