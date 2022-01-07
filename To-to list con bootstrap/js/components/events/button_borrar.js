import { inmobiliarias } from "../../BD.js";
import { borrarInmobiliaria } from "../borrarInmobiliaria.js";

export const borrar = ()=>{
    let tBody = document.querySelector('#mostrar');
    tBody.addEventListener('click', function(e){
        let padre = e.target.parentNode;
        let abuelo = padre.parentNode;
        let primerHijo = abuelo.firstElementChild;
        if(e.target.classList.contains('borrar')){
            borrarInmobiliaria(inmobiliarias, primerHijo.textContent);
        }
    });
}