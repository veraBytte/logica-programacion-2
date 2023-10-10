const $ = (elemento) => {
    return document.querySelector(elemento);
}

const botonConvertir = $('#button1');
const gradosUsuario = $('#gradosUsuario');
const parrafoResultado = $('#resultado');
const changeValues = $('#change');
let resultado;

botonConvertir.addEventListener('click', () => {
    if  (gradosUsuario.value === '') {
        alert('Ingrese los grados a convertir');
        return;
    }

    const unidad1 = $('#unidad1').value;
    const unidad2 = $('#unidad2').value;

    if(unidad1 === unidad2) {
        alert('Seleccione unidades diferentes');
        return;
    }

    const grados = +$('#gradosUsuario').value;

    if(unidad1 === 'Kelvin'){
        convertirKelvin(unidad2,grados);
    }else if(unidad1 === 'Farenheit'){
        convertirFahrenheit(unidad2,grados);
    }else{
        convertirCelsius(unidad2,grados);
    }
});


function convertirKelvin(unidad2,gradosUsuario) {
    if(unidad2 === 'Fahrenheit'){
        resultado = (gradosUsuario * 9/5) - 459.67;
    }else{
        resultado = gradosUsuario - 273.15;
    }

    mostarResultado(resultado,unidad2);
}

function convertirFahrenheit(unidad2,gradosUsuario) {
    if(unidad2 === 'Kelvin'){
        resultado = (gradosUsuario + 459.67) * 5/9;
    }else{
        resultado = (gradosUsuario - 32) * 5/9;
    }

    mostarResultado(resultado,unidad2);
}

function convertirCelsius(unidad2,gradosUsuario) {
    if(unidad2 === 'Kelvin'){
        resultado = gradosUsuario + 273.15;
    }else{
        resultado = (gradosUsuario * 9/5) + 32;
    }

    mostarResultado(resultado,unidad2);
}

function mostarResultado(resultado,unidad2) {
    parrafoResultado.textContent = `El resultado es: ${resultado} grados ${unidad2}`;
}

changeValues.addEventListener('click', () => {
    const unidad1 = $('#unidad1').value;
    const unidad2 = $('#unidad2').value;

    $('#unidad1').value = unidad2;
    $('#unidad2').value = unidad1;
});
