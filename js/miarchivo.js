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

  

const eleccion = document.getElementById('botonTemas')
eleccion.addEventListener('click', (event) => {
    event.preventDefault()
    let eleccion
    do{
        eleccion = prompt('Elija un tema (matematica, historia, arte, deporte, o lengua').toLowerCase()
        if( eleccion === "matematica" || eleccion === "historia" || eleccion === "arte" || eleccion === "deporte" || eleccion === "lengua"){
            buscarTema(opciones)
            break
        }else{
           alert ("El tema seleccionado no existe, por favor pruebe otro")
        }
    }while ( eleccion != "matematica" || eleccion != "historia" || eleccion != "arte" ||eleccion != "deporte" || eleccion != "lengua")
     

     function buscarTema(opciones){
        let opcionElegida = opciones.find( tema => tema.nombre == eleccion)
        if (opcionElegida == undefined) {
            console.log('opcion no encontrado')
        }else{
            console.log(opcionElegida)
        }
 }
}     )
     
   
   




class Jugador{ 
    constructor(nombre, email, contraseña) {
        this.nombre = nombre
        this.email = email
        this.contraseña = contraseña
    }
}

const Jugadores = []


const form = document.getElementById(`idForm`)
const botonJugadores = document.getElementById(`botonJugadores`)
const divJugadores = document.getElementById(`divJugadores`)


form.addEventListener(`submit`, (event) => {
    event.preventDefault()
    let nombre = document.getElementById(`idNombre`).value
    let email = document.getElementById(`idMail`).value
    let contraseña = document.getElementById(`idContraseña`).value

    const jugador = new Jugador (nombre, email, contraseña)
    Jugadores.push(jugador)
    console.log(Jugadores)
    form.reset()
})

botonJugadores.addEventListener(`click`, () => {
    Jugadores.forEach(jugador => {
        divJugadores.innerHTML +=
        `
        <div class="card" style="width: 18rem; margin: 5px;">
  
            <div class="card-body">
            <h5 class="card-title">${jugador.nombre}</h5>
            <p class="card-text">${jugador.email}</p>
    
            </div>
</div>
        `
    })
})
