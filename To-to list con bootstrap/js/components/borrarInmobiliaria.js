import { mostrarInmobiliaria } from "./mostrarInmobiliaria.js";

export function borrarInmobiliaria(inmobiliarias, id){
    for (let i = 0; i < inmobiliarias.length; i++) {
        if(inmobiliarias[i].id == id){
            inmobiliarias.splice(i, 1);
        }
    }
    // for (let el of inmobiliarias) {
    //     if(el.id == id){
    //         inmobiliarias.splice(id - 1,1);
    //     }
    // }
    mostrarInmobiliaria(inmobiliarias);
}