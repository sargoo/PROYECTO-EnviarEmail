//variables
const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');

eventListeners();


//funciones
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validadFormulario);
    asunto.addEventListener('blur', validadFormulario);
    mensaje.addEventListener('blur', validadFormulario);

}


function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function validadFormulario(e){



    if(e.target.value.length > 0){
        console.log('hay taxto');
    }else{
        e.target.classList.add('border','border-red-500');
        mostrarError('Todos los campos son obligatorios');

    }
    if(e.target.type === 'email'){
        const resultado = e.target.value.indexOf('@');
        console.log(resultado);
        if(resultado < 0 ){    
            mostrarError('El mail no es válido');
        }
    } 
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500','background-red-100','text-red-500','p-3', 'error');
    

    const errores = document.querySelectorAll('.error');
    if(errores.length ===0){
        formulario.appendChild(mensajeError);
    }


}