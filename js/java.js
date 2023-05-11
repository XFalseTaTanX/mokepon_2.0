var tit = document.title;
var c = 0;
function writetitle()
{
    document.title = tit.substring(0,c);
    if(c==tit.length)
{

    c = 0;
    setTimeout("writetitle()", 1000)
}

else
{
    c++;
    setTimeout("writetitle()", 200)
}
}

writetitle()

const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReinicar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego  = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const inputSquirtle = document.getElementById('Squirtle')
const inputLanduros = document.getElementById('Landuros')
const inputCharizard = document.getElementById('Charizard')
const spanMascotaJugador = document.getElementById('Mascota-Jugador')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaEnemigo = document.getElementById('Mascota-Enemigo')

const spanVidasJugador = document.getElementById('vidas-Jugador')
const spanVidasEnemigo = document.getElementById('vidas-Enemigo')   

const sectionMensajes = document.getElementById('mensajes')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function seleccionarMacostaJugador() {

   
    sectionSeleccionarMascota.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'block '

    
    if (inputSquirtle.checked) {
        spanMascotaJugador.innerHTML = 'Squirtle'
    } else if (inputLanduros.checked){
        spanMascotaJugador.innerHTML = 'Landuros'
    } else if (inputCharizard.checked){
        spanMascotaJugador.innerHTML = 'Charizard'
    } else{
        alert('Seleciona una Mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let MascotaAleatorio = aletorio(1,3)
    

    if (MascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Squirtle'
    } else if (MascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Landuros'
    } else {
        spanMascotaEnemigo.innerHTML = 'Charizard'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo() 
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo() 
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo() 
}

function ataqueAleatorioEnemigo() {
    let ataqueAleaorio = aletorio(1,3)

    if (ataqueAleaorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleaorio == 2){
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }

    Combate()
}

function Combate() {
    

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje ("Empate")
         
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 

    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
        
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua'){
        crearMensaje ("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo   
        
    } else{
        crearMensaje ("Perdiste")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador 
        
    }

    revisarvidas()
}

function revisarvidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("¡Felicitaciones! Ganaste 🎉😁")
    } else if (vidasJugador == 0){
        crearMensajeFinal("¡Mis Condolencias! Perdiste 😥😩")
    } 
}

function crearMensaje(Resultado) {
    

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + '-' + Resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(ResultadoFinal) { 
    

    let parrafo = document.createElement('p')
    parrafo.innerHTML = ResultadoFinal

    sectionMensajes.appendChild(parrafo)

    
        botonFuego.disabled = true 
    
        botonAgua.disabled = true 
    
        botonTierra.disabled = true 

    
    sectionReinicar.style.display = 'block'
 
}


function aletorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min) 
}

function reinicarJuego() {
    location.reload()
}


sectionSeleccionarAtaque.style.display = 'none'
sectionReinicar.style.display = ('none')
botonMascotaJugador.addEventListener('click', seleccionarMacostaJugador)
botonFuego.addEventListener('click', ataqueFuego)
botonAgua.addEventListener('click', ataqueAgua)
botonTierra.addEventListener('click', ataqueTierra)
botonReiniciar.addEventListener('click', reinicarJuego)