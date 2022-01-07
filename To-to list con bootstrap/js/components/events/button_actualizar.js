import { inmobiliarias } from "../../BD.js";
import { actualizarInmobiliaria } from "../actualizarInmobiliaria.js";

export const actualizar = ()=>{
    let tBody = document.querySelector('#mostrar');
    tBody.addEventListener('click', function(e){
        let padre = e.target.parentNode;
        let abuelo = padre.parentNode;
        let primerHijo = abuelo.firstElementChild;
        if(e.target.classList.contains('actualizar')){
            actualizarInmobiliaria(inmobiliarias, primerHijo.textContent);
        }
    });
}