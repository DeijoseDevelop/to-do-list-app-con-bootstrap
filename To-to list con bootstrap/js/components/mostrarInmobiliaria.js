let tabla = document.getElementById('mostrar');

export const mostrarInmobiliaria = (inmobiliarias)=>{
    let filasTabla = '';
    for (let inmobiliaria of inmobiliarias) {
        let { id, anio, metros, habitaciones, garaje, zona} = inmobiliaria;
        let badged = '';
        if(garaje){
          badged = "<span class='badge bg-primary'>Si tiene</span>";
        } else{
          badged = "<span class='badge bg-secondary text-dark'>No tiene</span>";
        }
        filasTabla += `
      <tr>
        <th scope="row">${id}</th>
        <td>${anio}</td>
        <td>${metros}</td>
        <td>${habitaciones}</td>
        <td>${badged}</td>
        <td>${zona}</td>
        <td>
          <button class="actualizar" type="button" class="btn btn-outline-primary btn-sm">Editar</button>
          
          <button class="borrar" type="button" class="btn btn-sm btn-outline-danger")">Eliminar</button>
        </td>
      </tr>
    `;
    }
    tabla.innerHTML = filasTabla;
}