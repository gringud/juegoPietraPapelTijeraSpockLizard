import juegoFacil from "./juegoFacil-01-menu.js";
import juegoDificil from "./juegoDificil-01-menu.js"

const   d = document,
        ls = localStorage;

let template = "";
export default function cargaInicial(){
    console.log("Entre en cargaInicial");
    const $pantallaJuego = d.querySelector(".pantallaJuego");
    template =  `
                    <div class="tableroJuego">

                        <div class="opcionFacil botones">Juego Facil</div>
                        <div class="opcionDificil botones">Juego Dificil</div>
                    </div>
                `;
    /* $pantallaJuego.innerHTML = ""; */
    $pantallaJuego.innerHTML = template;

    const opcionFacil = d.querySelector(".opcionFacil");
    opcionFacil.addEventListener("click", el =>{
        /* console.log("Presione el boton"); */
        juegoFacil();
    },{ once: true })

    const opcionDificil = d.querySelector(".opcionDificil");
    opcionDificil.addEventListener("click", el =>{
        /* console.log("Presione el boton"); */
        juegoDificil();
    },{ once: true })
}