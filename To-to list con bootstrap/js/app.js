import { inmobiliarias } from "./BD.js";
import { mostrarForm } from "./components/events/button_mostrar_form.js";
import { mostrarInmobiliaria } from "./components/mostrarInmobiliaria.js";
import { añadirInmobiliaria } from "./components/events/button_añadir_inmobiliaria.js";
import { borrar } from "./components/events/button_borrar.js";
import { actualizar } from "./components/events/button_actualizar.js";

document.addEventListener('DOMContentLoaded',function(e){
    mostrarForm();
    mostrarInmobiliaria(inmobiliarias);
    añadirInmobiliaria();
    borrar();
    actualizar();
});
