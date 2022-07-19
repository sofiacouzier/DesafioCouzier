class Tema {
    constructor (id, nombre, dificultad, preguntas)
    {
        this.id = id
        this.nombre = nombre
        this.dificultad = dificultad
        this.preguntas = preguntas
    }
}

const Tema1 = new Tema (1,"matematica", "media", 5)
const Tema2 = new Tema (2,"historia", "alta", 6)
const Tema3 = new Tema (3,"arte", "media", 8)
const Tema4 = new Tema (4,"deporte", "baja", 5)
const Tema5 = new Tema (5,"lengua", "alta", 6)

const opciones = [Tema1, Tema2, Tema3, Tema4, Tema5]

const divTemas = document.getElementById("temas")



opciones.forEach(Tema => {
    divTemas.innerHTML += `
    <div class="card temas" id="opcion${Tema.id}" style="width: 14rem;">
    <div class="card-body">
        <h5 class="card-title">${Tema.nombre}</h5>
        <p class="card-text">dificultad: ${Tema.dificultad}</p>
        <p class="card-text">cant. de preguntas: ${Tema.preguntas}</p>
</div>
</div>
    `
})
