const nombre = document.querySelector('#nombreInput');
const apellido = document.querySelector('#apellidoInput');
const mail = document.querySelector('#mailInput');
const contraseña = document.querySelector('#contraseñaInput');

const nombreError = document.querySelector('#nombreError');
const apellidoError = document.querySelector('#apellidoError');
const mailError = document.querySelector('#mailError');
const contraseñaError = document.querySelector('#contraseñaError');

const button = document.querySelector('#button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log(event);
    validaEmpty(nombre.value, nombre);
});

function validaEmpty(valueInput, divInput){
    if(valueInput.length == 0){
        showError(divInput);
    } else {
        hideError();
    }
}

function showError () {
    divInput.style.border = '1px solid red'; 
}