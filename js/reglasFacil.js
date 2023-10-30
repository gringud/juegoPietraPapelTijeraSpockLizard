import volverJuegoTres from "./juegoFacil-01-menu.js"
import volverJuegoCinco from "./juegoDificil-01-menu.js"
const   d = document,
        ls = localStorage;
let template = "asd";
export default function reglas(tipoReglas){
    const $pantallaJuego = d.querySelector(".tableroMedio");

    if (tipoReglas === "ReglasFacil"){
        template =  `
                    <div class="reglas">
                        <span class="partidaFacilReglas">Reglas partida Facil</span>
                        <img class="img-reglas" src="./images/image-rules.svg" alt="">
                        <span class="btnReglasVolver">Volver al Juego</span>
                    </div>
                    `;
    } else {
        template =  `
                    <div class="reglas">
                        <span class="partidaFacilReglas">Reglas partida Facil</span>
                        <img class="img-reglas" src="./images/image-rules-bonus.svg" alt="">
                        <span class="btnReglasVolver">Volver al Juego</span>
                    </div>
                    `;
    }
    
    /* try{
    } catch (err){
        
    } */
    
    $pantallaJuego.innerHTML = template;

    
    const btnReglasVolver = d.querySelector(".btnReglasVolver");

    btnReglasVolver.addEventListener("click", el => {
        if (tipoReglas === "ReglasFacil"){
            volverJuegoTres();
        } else {
            volverJuegoCinco();
        }
    })    
    
}