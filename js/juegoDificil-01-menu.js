import inicioJuego from "./inicioJuego.js"
import juegoDificilEmp from "./juegoDificil-02-juego.js"
import localStorageActualizar from "./localStorageActualizar.js"
import mostrarReglas from "./reglasFacil.js"

const   d = document,
        ls = localStorage;
let scoreJugado = 0;
let template = "";
let templateTablero = "";

export default function juegoDificil() {
    const $pantallaJuego = d.querySelector(".pantallaJuego");
    cargarTableroJuego();
    

    template =  `
                <div class="tableroJuego tableroJuegoMenu">
                    <div class="tableroArriba">
                        <div class="marcadorIzq">
                            <img class="imgLogo" src="./images/logo-bonus.svg" alt="">
                        </div>
                        <div class="marcadorDer">
                            <span class="spanTitulo">SCORE</span>
                            <span class="spanResultado">${scoreJugado}</span>
                        </div>
                    </div>
                    <div class="tableroMedio">
                        ${templateTablero}
                    </div>
                    <div class="tableroAbajo">
                        <div class="btnVolver botones">Volver</div>
                        <div class="btnReglas botones">Reglas</div>
                    </div>
                </div>
                `;

    $pantallaJuego.innerHTML = template;

    localStorageActualizar("cargarLS", "vacio", "ScoreJugadorDificil");
    
    function cargarTableroJuego(){
        /* console.log("ACA CARGO EL TEMPLATE DEL TABLERO"); */
        templateTablero =   `
                                <div class="juegoCincoOpc">
                                    <img class="img-pentagono" src="./images/bg-pentagon.svg" alt="">
                                    <div class="cincoOpcArr">
                                        <div class="circulo btnCirculo ubicScissors circuloScissors circuloConcoOpc" id="scissors">
                                            <img class="img-tijera" src="./images/icon-scissors.svg" alt="">
                                        </div>
                                    </div>

                                    <div class="cincoOpcMed">
                                        <div class="circulo btnCirculo ubicSpock circuloSpock circuloConcoOpc" id="spock">
                                            <img class="img-papel" src="./images/icon-spock.svg" alt="">
                                        </div>
                                        <div class="circulo btnCirculo ubicPaper circuloPaper circuloConcoOpc" id="paper">
                                            <img class="img-papel" src="./images/icon-paper.svg" alt="">
                                        </div>
                                    </div>

                                    <div class="cincoOpcaba">
                                        <div class="circulo btnCirculo ubicLizard circuloLizard circuloConcoOpc" id="lizard">
                                            <img class="img-piedra" src="./images/icon-Lizard.svg" alt="">
                                        </div>
                                        <div class="circulo btnCirculo ubicRock circuloRock circuloConcoOpc" id="rock">
                                            <img class="img-piedra" src="./images/icon-rock.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            `;
    }


    const opcionFacil = d.querySelector(".btnVolver");
    opcionFacil.addEventListener("click", el =>{
        /* console.log("Presione volver"); */

        const explicacionTitulo = d.querySelector(".explicacionTitulo");
        const explicacionContenido = d.querySelector(".explicacionContenido");
        explicacionTitulo.innerHTML = "";
        explicacionContenido.innerHTML = "";
        
        inicioJuego();
    },{ once: true })

    const btnReglas = d.querySelector(".btnReglas");
    btnReglas.addEventListener("click", el =>{
        console.log("presione reglas");
        mostrarReglas("ReglasDificil");
    })

    const btnCirculo = d.querySelectorAll(".btnCirculo");
    /* console.log(btnCirculo); */

    btnCirculo.forEach(el => {
        el.addEventListener("click", event => {
            /* console.log("Presioné el botón", el.id); */
            juegoDificilEmp(el.id)


        });
    });
}
