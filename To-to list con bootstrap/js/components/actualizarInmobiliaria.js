import { editarInmobiliaria , editarInmobiliariaSoloGaraje } from "./editarInmobiliaria.js";
import { mostrarInmobiliaria } from "./mostrarInmobiliaria.js";

export const actualizarInmobiliaria = (inmobiliarias, id)=>{
    let anio = prompt('De que año es?');
    let metros = prompt('Cuantos metros tiene?');
    let habitaciones = prompt('Cuantas habitaciones tiene?');
    let estado = prompt('tiene garaje? \n 1.Si \n 2.No');
    let zona = prompt('De que zona es? A o B');
    zona = zona.toUpperCase();
    if(estado == 1){
        garaje = true
    } else{
        garaje = false;
    }
    editarInmobiliaria(id, anio, metros, habitaciones, garaje, zona);
    mostrarInmobiliaria(inmobiliarias);
}