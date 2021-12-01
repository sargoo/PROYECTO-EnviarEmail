//variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();


//funciones
function eventListeners(){
    //cuando arranca la app
    document.addEventListener('DOMContentLoaded', iniciarApp);
    
    //campos del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
    btnReset.addEventListener('click', resetearFormulario);

    //enviar el Email
    formulario.addEventListener('submit', enviarEmail);

}

//funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

function validarFormulario(e){
    if(e.target.value.length > 0){
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        e.target.classList.remove('border','border-red-500');   
        e.target.classList.add('border','border-green-500');
    }else{
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }
    if(e.target.type === 'email'){
        if(er.test(e.target.value) ){    
            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }
            e.target.classList.remove('border','border-red-500');   
            e.target.classList.add('border','border-green-500');
        }else{
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
            mostrarError('Email no válido');

        }
    }
    
    if (er.test(email.value) && asunto.value != '' && mensaje.value !='') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
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

enviarEmail

function enviarEmail(e){
    e.preventDefault();
     
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout( () =>{
        spinner.style.display = 'none';
        const parrafo = document.createElement('p',);
        parrafo.textContent = 'El Email se envió correctamente';
        parrafo.classList.add('text-center','border','my-10', 'bg-green-500','text-white','font-bold','uppercase','p-5');
        formulario.insertBefore(parrafo, spinner);

        setTimeout(()=>{
            parrafo.remove();
            resetearFormulario();
        },3000);

    },3000); //cada segundo son mil
}

function resetearFormulario(){
    formulario.reset();
    iniciarApp();
    email.classList.remove('border','border-green-500');
    asunto.classList.remove('border','border-green-500');
    mensaje.classList.remove('border','border-green-500');
};