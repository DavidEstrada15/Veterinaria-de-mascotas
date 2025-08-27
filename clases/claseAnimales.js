class Animales {
    constructor(Mascota) {
        this.id =  Mascota.id || `${Math.floor(Math.random() * 500) - Math.floor(Math.random() * 500)}`
        this.nombre= Mascota.nombre,
        this.especie= Mascota.especie,
        this.edad = Mascota.edad,
        this.genero = Mascota.genero,
        this.image= Mascota.image ||  "https://cdn-icons-png.flaticon.com/512/66/66364.png"
    }

    getAnimalInfo(){
        return `${this.nombre}, ${this.especie}, ${this.edad}, ${this.genero}, ${this.image}`
    }
}

export default Animales