const   d = document,
        ls = localStorage;

let partidasAcumuladas = 0;

export default function localStorageActualizar(queHacerPrimero, valorActualizado, nombreLocalStorage){
    /* console.log("cargar local Storage"); */
    /* console.log(ls); */
    const spanResultado = d.querySelector(".spanResultado");

    if (queHacerPrimero === "cargarLS"){
        if (localStorage){
            //Verificamos si soporta la caché local
          //Como Saber si existe Sidebar
          /* console.log("object"); */
          if(localStorage.getItem(nombreLocalStorage) !== undefined && localStorage.getItem(nombreLocalStorage)){     
            /* console.log("Existe!!!!"); */
            partidasAcumuladas = parseInt(ls.getItem(nombreLocalStorage));
            spanResultado.innerHTML = partidasAcumuladas;
            /* console.log(partidasAcumuladas); */
          } else {
            /* console.log("No lo encontre asi que lo creo"); */
            ls.setItem(nombreLocalStorage, 0)
            spanResultado.innerHTML = 0;
          }
      }
    } else {
        ls.setItem(nombreLocalStorage, partidasAcumuladas+valorActualizado)

        partidasAcumuladas = parseInt(ls.getItem(nombreLocalStorage));
        /* console.log("Devi actualicar pero no c porque no entre"); */
        spanResultado.innerHTML = partidasAcumuladas;
    }
}