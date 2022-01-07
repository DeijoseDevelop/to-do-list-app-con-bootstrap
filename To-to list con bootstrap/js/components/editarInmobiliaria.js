import { inmobiliarias } from "../BD.js";

export const editarInmobiliaria = (id, anio, metros, habitacion, garaje, zona)=>{
    for (let i = 0; i < inmobiliarias.length; i++) {
        if(inmobiliarias[i].id == id){
            inmobiliarias[i].anio = anio;
            inmobiliarias[i].metros = metros;
            inmobiliarias[i].habitacion = habitacion;
            inmobiliarias[i].garaje = garaje;
            inmobiliarias[i].zona = zona;
        }
    }
}
export const editarInmobiliariaSoloGaraje = (id, garaje)=>{
    for (let i = 0; i < inmobiliarias.length; i++) {
        if(inmobiliarias[i].id == id){
            inmobiliarias[i].garaje = garaje;
        }
    }
}