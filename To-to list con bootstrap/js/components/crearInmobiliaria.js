let id = 0;
export const crearInmobiliaria = (inmobiliarias, anio, metros, habitaciones, garaje, zona)=>{
    id++;
    let inmobiliaria = {
        id,
        anio,
        metros,
        habitaciones,
        garaje,
        zona
    }
    inmobiliarias.push(inmobiliaria);
}