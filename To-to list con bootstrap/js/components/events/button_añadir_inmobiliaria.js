import { crearInmobiliaria } from "../crearInmobiliaria.js";
import { mostrarInmobiliaria } from "../mostrarInmobiliaria.js";
import { inmobiliarias } from "../../BD.js";

export const añadirInmobiliaria = ()=>{
    document.getElementById('agregar').addEventListener('click', function(e){
        let form = document.getElementById('form');
        let { anio, metros, habitaciones, garaje, zona } = form.elements;
        crearInmobiliaria(inmobiliarias, anio.value, metros.value, habitaciones.value, garaje.checked, zona.value.toUpperCase());
        form.reset();
        mostrarInmobiliaria(inmobiliarias);
        document.getElementById('form').classList.add('d-none')
    });
}