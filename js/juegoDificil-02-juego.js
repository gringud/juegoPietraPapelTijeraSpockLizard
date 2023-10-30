import volverJuegoCinco from "./juegoDificil-01-menu.js"
import localStorageActualizar from "./localStorageActualizar.js"
const   d = document,
        ls = localStorage;

let template = "";
export default function juegoDificil(seleccionJugador){
    /* console.log("El jugador eligio ", seleccionJugador); */
    const $pantallaJuego = d.querySelector(".tableroMedio");
    /* $pantallaJuego.innerHTML="puto el que lee" */
    template =  `
                <div class="juegoTresResul">
                    <div class="juegoArriba">
                        <span class="spanJuego">Jugador</span>
                        <span class="spanJuego">Ordenador</span>
                    </div>
                    <div class="juegoMedio">
                        <div class="juegoMedioIzq circulo circuloUsuario circulo${seleccionJugador.charAt(0).toUpperCase()+seleccionJugador.slice(1)}">
                            <img class="img-tijera" src="./images/icon-${seleccionJugador}.svg" alt="">
                        </div>
                        <div class="juegoMedioDer circulo circuloPaper circuloContrinc">
                            <img class="imgContrinc" src="./images/icon-paper.svg" alt="">
                        </div>
                    </div>
                    <div class="juegoAbajo">
                        <span class="resultadoJuego"></span>
                        <span class="btnNuevoJuego">Nuevo Juego</span>
                    </div>
                </div>
                `
    $pantallaJuego.innerHTML= template;

    const btnNuevoJuego = d.querySelector(".btnNuevoJuego");
    btnNuevoJuego.addEventListener("click", el =>{
        const explicacionTitulo = d.querySelector(".explicacionTitulo");
        const explicacionContenido = d.querySelector(".explicacionContenido");
        explicacionTitulo.innerHTML = "";
        explicacionContenido.innerHTML = "";
        volverJuegoCinco();
    })

    const $circuloContrincante = d.querySelector(".circuloContrinc");
    const $imgContrincante = d.querySelector(".imgContrinc");

    let myNumeroAleatorio = Math.floor(Math.random()*(5))
    /* console.log("Aleatorio: ---> ",myNumeroAleatorio); */
    let valorContrincante = ""; 
    switch (myNumeroAleatorio){
        case 0:
            valorContrincante = "paper";
            break;
        case 1:
            valorContrincante = "scissors";
            break;
        case 2:
            valorContrincante = "rock";
            break;
        case 3:
            valorContrincante = "spock";
            break;
        case 4:
            valorContrincante = "lizard";
            break;
        default:
            console.log("Error grave");
            break;
    }

    /* console.log("El contrincante eligio",valorContrincante); */

    modificacionAdversario($circuloContrincante, $imgContrincante, valorContrincante, seleccionJugador);
}

async function modificacionAdversario(circContrin, imgContrin, valorContrincante, seleccionJugador){
    let tiempo = 100;

    let temporal= "";

    const $circuloUsuario = d.querySelector(".circuloUsuario");
    /* let respuestaSapan = d.querySelector(".resultadoSpan"); */
    let respuestaJuego = d.querySelector(".resultadoJuego");

    temporal=   `
                    <span class="resultadoSpan"></span>
                `;
    
    let respuestaSapan = d.querySelector(".resultadoJuego");
    /* console.log(respuestaSapan); */
   

    /* console.log("object"); */
    circContrin.classList.add("circuloRock")
    let terminarFor=20;
    /* console.log("El oponente eligio: ", valorContrincante); */
    if (valorContrincante === "scissors"){
        terminarFor = terminarFor+1;
    } else if (valorContrincante === "rock"){
        terminarFor = terminarFor+2;
    } else if (valorContrincante === "spock"){
        terminarFor = terminarFor+3;
    } else if (valorContrincante === "lizard"){
        terminarFor = terminarFor+4;
    }
    try{
        
        for (let i=0; i<terminarFor; i++){
            /* tiempo= tiempo+100; */
            /* console.log("El resto es "+tiempo); */
            setTimeout(()=>{
                /* console.log("-------------------------");
                console.log("RESULTADO ",i%5); */
                switch (i%5){
                    case 0:
                        circContrin.classList.remove("circuloPaper")
                        circContrin.classList.add("circuloScissors")
                        circContrin.classList.remove("circuloRock")
                        circContrin.classList.remove("circuloLizard")
                        circContrin.classList.remove("circuloSpock")
                        imgContrin.setAttribute("src", "./images/icon-scissors.svg");
                        break;
                    case 1:
                        circContrin.classList.remove("circuloPaper")
                        circContrin.classList.remove("circuloScissors")
                        circContrin.classList.add("circuloRock")
                        circContrin.classList.remove("circuloLizard")
                        circContrin.classList.remove("circuloSpock")
                        imgContrin.setAttribute("src", "./images/icon-rock.svg");
                        break;
                    case 2:
                        circContrin.classList.remove("circuloPaper")
                        circContrin.classList.remove("circuloScissors")
                        circContrin.classList.remove("circuloRock")
                        circContrin.classList.remove("circuloLizard")
                        circContrin.classList.add("circuloSpock")
                        imgContrin.setAttribute("src", "./images/icon-spock.svg");
                        break; 
                    case 3:
                        circContrin.classList.add("circuloLizard")
                        circContrin.classList.remove("circuloSpock");
                        circContrin.classList.remove("circuloPaper")
                        circContrin.classList.remove("circuloScissors")
                        circContrin.classList.remove("circuloRock")
                        imgContrin.setAttribute("src", "./images/icon-lizard.svg");
                        break;
                    case 4:
                        circContrin.classList.remove("circuloLizard");
                        circContrin.classList.remove("circuloSpock");
                        circContrin.classList.add("circuloPaper")
                        circContrin.classList.remove("circuloScissors")
                        circContrin.classList.remove("circuloRock")
                        imgContrin.setAttribute("src", "./images/icon-paper.svg");
                        break;
                    default:
                        imgContrin.setAttribute("src", "./images/icon-rock.svg");
                    break;
                }
                /* console.log(tiempo); */

                

                if ((i+1) === terminarFor){
                    /* respuestaJuego.innerHTML = temporal; */
                    
                    /* console.log("Yo elegi: ",seleccionJugador);
                    console.log("El contrincante: ",valorContrincante); */

                    modificarFooter(seleccionJugador, valorContrincante);
                    
                    
                    /* let respuestaSapan = d.querySelector(".resultadoSpan");
                    console.log(respuestaSapan); */
                    /* respuestaSapan.innerHTML="puto el que lee"; */
                    if (seleccionJugador === "paper"){
                        if (valorContrincante === "paper"){
                            respuestaSapan.innerHTML="Empate!!!";
                        } else if ((valorContrincante === "scissors") || (valorContrincante === "lizard")){
                            respuestaSapan.innerHTML="Perdiste!!!";
                        } else {
                            respuestaSapan.innerHTML="Ganaste!!!";
                            $circuloUsuario.classList.add("resultadoGanador");
                            circContrin.classList.remove("resultadoGanador");                            
                        }
                    } else if (seleccionJugador === "scissors"){
                        if ((valorContrincante === "paper") || (valorContrincante === "lizard")){
                            respuestaSapan.innerHTML="Ganaste!!!";

                        } else if (valorContrincante === "scissors"){
                            respuestaSapan.innerHTML="Empate!!!";
                        } else {
                            respuestaSapan.innerHTML="Perdiste!!!";
                        }
                    } else if (seleccionJugador === "rock"){
                        if ((valorContrincante === "paper") || (valorContrincante === "spock")){
                            respuestaSapan.innerHTML="Perdiste!!!";
                        } else if ((valorContrincante === "scissors") || (valorContrincante === "lizard")){
                            respuestaSapan.innerHTML="Ganaste!!!";
                        } else {
                            respuestaSapan.innerHTML="Empate!!!";
                        }
                    } else if (seleccionJugador === "spock"){
                        if ((valorContrincante === "paper") || (valorContrincante === "lizard")){
                            respuestaSapan.innerHTML="Perdiste!!!";
                        } else if ((valorContrincante === "scissors") || (valorContrincante === "rock")){
                            respuestaSapan.innerHTML="Ganaste!!!";
                        } else {
                            respuestaSapan.innerHTML="Empate!!!";
                        }
                    } else if (seleccionJugador === "lizard"){
                        if ((valorContrincante === "scissors") || (valorContrincante === "rock")){
                            respuestaSapan.innerHTML="Perdiste!!!";
                        } else if ((valorContrincante === "spock") || (valorContrincante === "paper")){
                            respuestaSapan.innerHTML="Ganaste!!!";
                        } else {
                            respuestaSapan.innerHTML="Empate!!!";
                        }
                    }

                    /* console.log("asdadasdasdd ",respuestaSapan.innerHTML); */
                    
                    resultado(respuestaSapan.innerHTML, circContrin, $circuloUsuario)
                }

                

            },tiempo= tiempo+150)
            
        }

        
        
    } catch (err){
        console.log(err);
    }
}


function resultado(resultado, circContrin, circUsuario){
    switch (resultado){
        case "Ganaste!!!":
            circUsuario.classList.add("resultadoGanador");
            localStorageActualizar("ActualizarLS",1, "ScoreJugadorDificil");
            /* console.log("Actualizo el ls a 1"); */
            break;
        case "Perdiste!!!":
            circContrin.classList.add("resultadoGanador");
            localStorageActualizar("ActualizarLS",-1, "ScoreJugadorDificil");
            /* console.log("Actualizo el ls a -1"); */
            break;
        case "Empate!!!":
            circUsuario.classList.add("resultadoGanador");
            circContrin.classList.add("resultadoGanador");
        break;
        default:
            console.log("ERROR GRAVE");
            break;
    }
}

function modificarFooter(jugador, contrincante){

    const explicacionTitulo = d.querySelector(".explicacionTitulo");
    const explicacionContenido = d.querySelector(".explicacionContenido");
    
    let temporalResp = "";

    if (jugador === contrincante){
        temporalResp = "Ambos eligieron la misma opcion";
    } else if (jugador === "paper"){
        if (contrincante === "rock"){
            temporalResp = "Papel cubre roca";
        } else if (contrincante === "spock"){
            temporalResp = "Papel refuta a Spock";
        } else if (contrincante === "scissors"){
            temporalResp = "Tijeras corta papel";
        } else {
            temporalResp = "Lagarto come papel";
        }
    } else if (jugador === "scissors"){
        if (contrincante === "paper"){
            temporalResp = "Tijera corta papel";
        } else if (contrincante === "lizard"){
            temporalResp = "Tijera decapita lagarto";
        } else if (contrincante === "rock"){
            temporalResp = "Roca aplasta tijera";
        } else {
            temporalResp = "Spock rompe tijera";
        }
    } else if (jugador === "rock"){
        if (contrincante === "lizard"){
            temporalResp = "Roca aplasta lagarto";
        } else if (contrincante === "scissors"){
            temporalResp = "Roca aplasta tijera";
        } else if (contrincante === "paper"){
            temporalResp = "Papel cubre roca";
        } else {
            temporalResp = "Spock vaporiza roca";
        }
    } else if (jugador === "lizard"){
        if (contrincante === "spock"){
            temporalResp = "Lagarto enveneca a spock";
        } else if (contrincante === "paper"){
            temporalResp = "Lagarto come papel";
        } else if (contrincante === "scissors"){
            temporalResp = "Tijera decapita lagarto";
        } else {
            temporalResp = "Roca aplasta lagarto";
        }
    } else if (jugador === "spock"){
        if (contrincante === "scissors"){
            temporalResp = "Spock rompe las tijeras";
        } else if (contrincante === "rock"){
            temporalResp = "Spock vaporiza Roca";
        } else if (contrincante === "paper"){
            temporalResp = "Papel refuta a Spock";
        } else {
            temporalResp = "Lagarto envenena a Spock";
        }
    }
    explicacionTitulo.innerHTML = "Explicacion";
    explicacionContenido.innerHTML = temporalResp;
}