export const crearInmobiliaria = (inmobiliarias, anio, metros, habitaciones, zona)=>{
    let id = inmobiliarias.length + 1;
    let inmobiliaria = {
        id,
        anio,
        metros,
        habitaciones,
        garaje: false,
        zona
    }
    inmobiliarias.push(inmobiliaria);
}