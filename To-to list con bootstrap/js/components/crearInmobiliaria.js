export const crearInmobiliaria = (inmobiliarias, anio, metros, habitaciones, garaje, zona)=>{
    let id = inmobiliarias.length + 1;
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