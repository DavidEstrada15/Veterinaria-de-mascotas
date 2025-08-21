class Animales {
    constructor(Mascota) {
        this.nombre= Mascota.nombre,
        this.especie= Mascota.especie,
        this.Edad = Mascota.edad,
        this.Genero = Mascota.genero,
        this.image= Mascota.imagen ||  "https://cdn-icons-png.flaticon.com/512/66/66364.png"
    }

    getAnimalInfo(){
        return `${this.nombre}, ${this.especie}, ${this.Edad}, ${this.Genero}, ${this.image}`
    }
}