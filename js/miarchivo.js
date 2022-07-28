
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
// const muestra = document.getElementById('mostrarTema')
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

        localStorage.setItem(`eleccion`, JSON.stringify(opcionElegida))
 }
}     )


//MOSTRAR TEMA

const mostrar = document.getElementById(`mostrarTema`)
const elegido = document.getElementById(`elegido`)

mostrar.addEventListener(`click`, () => {
    let temaStorage = JSON.parse(localStorage.getItem(`eleccion`))
    elegido.innerHTML += "" 
    temaStorage.forEach((opcionElegida, i) => {
        elegido.innerHTML += `
        <div class="card border-dark mb-3" id="tema${i}" style="max-width: 20rem; margin:4px;">
            <div class="card-header text-dark"><h2>${opcionElegida.nombre}</h2></div>
            <div class="card-body text-muted">
                <p class="card-title">dificultad: ${opcionElegida.dificultad}</p>
                <p class="card-title">pregunta: ${opcionElegida.preguntas}</p>
            </div>
        </div>
        
        `});
})










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


form.addEventListener(`submit`, (e) => {
    e.preventDefault()
   
    let nombre = document.getElementById(`idNombre`).value
    let email = document.getElementById(`idMail`).value
    let contraseña = document.getElementById(`idContraseña`).value

    const jugador = new Jugador (nombre, email, contraseña)
    Jugadores.push(jugador)

    localStorage.setItem(`Jugadores`, JSON.stringify(Jugadores))
    form.reset()
})

botonJugadores.addEventListener(`click`, () => {
    let arrayStorage = JSON.parse(localStorage.getItem(`Jugadores`))
    divJugadores.innerHTML = "" 
    arrayStorage.forEach((Jugador, indice) => {
        
        divJugadores.innerHTML += `
        <div class="card border-dark mb-3" id="nombre${indice}" style="max-width: 20rem; margin:4px;">
            <div class="card-header text-dark"><h2>${Jugador.nombre}</h2></div>
            <div class="card-body text-muted">
                <p class="card-title">Talle: ${Jugador.email}</p>
                <button class="btn btn-danger">Eliminar jugador</button>
            </div>
        </div>
        
        `
    });


    arrayStorage.forEach((Jugador, indice) => {
        let botonCard = document.getElementById(`nombre${indice}`).lastElementChild.lastElementChild
        botonCard.addEventListener(`click`, () => {
          document.getElementById(`nombre${indice}`).remove() 
          Jugadores.splice(indice, 1)
          localStorage.setItem(`Jugadores`, JSON.stringify(Jugadores)) 
          console.log(`${Jugador.nombre} Eliminada`)
        })
    
     }) 
})




const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")
 
let darkMode

if(localStorage.getItem('theme')){
    darkMode = localStorage.getItem("theme")
}else{
    localStorage.setItem('theme',"light")
}

if (darkMode == "dark"){
    document.body.classList.add('darkMode')
}

botonDarkMode.addEventListener('click', () => {
    document.body.classList.add("darkMode") 
    localStorage.setItem('theme',"dark")
})
botonLightMode.addEventListener("click", () => {
    document.body.classList.remove("darkMode") 
    localStorage.setItem('theme',"light")
   
})