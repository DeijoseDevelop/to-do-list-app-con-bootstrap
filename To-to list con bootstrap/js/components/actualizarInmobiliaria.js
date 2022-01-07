import { editarInmobiliaria , editarInmobiliariaSoloGaraje } from "./editarInmobiliaria.js";
import { mostrarInmobiliaria } from "./mostrarInmobiliaria.js";

export const actualizarInmobiliaria = (inmobiliarias, id)=>{
    let pregunta = prompt('quieres editar solo el garaje? \n 1.si \n 2.no');
    let garaje = false;
    if(pregunta == 1){
        let estado = prompt('tiene garaje? \n 1.Si \n 2.No');
        if(estado == 1){
            garaje = true
        } else{
            garaje = false;
        }
        editarInmobiliariaSoloGaraje(id, garaje);
        mostrarInmobiliaria(inmobiliarias);
    } else{
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
}