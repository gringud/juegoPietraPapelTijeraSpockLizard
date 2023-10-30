import volverJuegoTres from "./juegoFacil-01-menu.js"
import localStorageActualizar from "./localStorageActualizar.js"
const   d = document,
        ls = localStorage;

let template = "";
export default function juegoFacil(seleccionJugador){
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
        /* console.log("Presione el boton"); */
        volverJuegoTres();
    })

    const $circuloContrincante = d.querySelector(".circuloContrinc");
    const $imgContrincante = d.querySelector(".imgContrinc");

    let myNumeroAleatorio = Math.floor(Math.random()*(2+1))
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
    }
    try{
        
        for (let i=0; i<terminarFor; i++){
            /* tiempo= tiempo+100; */
            /* console.log("El resto es "+tiempo); */
            setTimeout(()=>{
                switch (i%3){
                    case 0:
                        circContrin.classList.remove("circuloPaper")
                        circContrin.classList.remove("circuloScissors")
                        circContrin.classList.add("circuloRock")
                        imgContrin.setAttribute("src", "./images/icon-rock.svg");
                        break;
                    case 1:
                        circContrin.classList.add("circuloPaper")
                        circContrin.classList.remove("circuloScissors")
                        circContrin.classList.remove("circuloRock")
                        imgContrin.setAttribute("src", "./images/icon-paper.svg");
                        break;
                    case 2:
                        circContrin.classList.remove("circuloPaper")
                        circContrin.classList.add("circuloScissors")
                        circContrin.classList.remove("circuloRock")
                        imgContrin.setAttribute("src", "./images/icon-scissors.svg");
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
                    
                    /* let respuestaSapan = d.querySelector(".resultadoSpan");
                    console.log(respuestaSapan); */
                    /* respuestaSapan.innerHTML="puto el que lee"; */
                    if (seleccionJugador === "paper"){
                        if (valorContrincante === "paper"){
                            respuestaSapan.innerHTML="Empate!!!";
                        } else if (valorContrincante === "scissors"){
                            respuestaSapan.innerHTML="Perdiste!!!";
                        } else {
                            respuestaSapan.innerHTML="Ganaste!!!";
                            $circuloUsuario.classList.add("resultadoGanador");
                            circContrin.classList.remove("resultadoGanador");                            
                        }
                    } else if (seleccionJugador === "scissors"){
                        if (valorContrincante === "paper"){
                            respuestaSapan.innerHTML="Ganaste!!!";

                        } else if (valorContrincante === "scissors"){
                            respuestaSapan.innerHTML="Empate!!!";
                        } else {
                            respuestaSapan.innerHTML="Perdiste!!!";
                        }
                    } else if (seleccionJugador === "rock"){
                        if (valorContrincante === "paper"){
                            respuestaSapan.innerHTML="Perdiste!!!";
                        } else if (valorContrincante === "scissors"){
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
            localStorageActualizar("ActualizarLS",1, "ScoreJugadorFacil");
            /* console.log("Actualizo el ls a 1"); */
            break;
        case "Perdiste!!!":
            circContrin.classList.add("resultadoGanador");
            localStorageActualizar("ActualizarLS",-1, "ScoreJugadorFacil");
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