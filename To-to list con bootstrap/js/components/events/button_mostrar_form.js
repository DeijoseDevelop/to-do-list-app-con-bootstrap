export const mostrarForm = ()=>{

    const $buttonMostrarForm = document.getElementById('mostrar-form');

    $buttonMostrarForm.addEventListener('click', (e) =>{
        document.querySelector('#form').classList.toggle('d-none');
    });
}
