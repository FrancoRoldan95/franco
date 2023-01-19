document.getElementById("sumar").addEventListener('click',function () {

    let numeroA = document.getElementById("numero1").value;
    console.log('El valor de A: '+numeroA);
    let numeroB = document.getElementById("numero2").value;
    console.log('El valor de B: '+numeroB);
    let resultado = sumar( parseInt(numeroA),parseInt(numeroB));
    console.log('El resultado es: '+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
})

function sumar (a,b) {
    return a + b;
}

document.getElementById("resta").addEventListener('click',function () {

    let numeroA = document.getElementById("numero1").value;
    console.log('El valor de A: '+numeroA);
    let numeroB = document.getElementById("numero2").value;
    console.log('El valor de B: '+numeroB);
    let resultado = resta ( parseInt(numeroA),parseInt(numeroB));
    console.log('El resultado es: '+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
})

function resta (a,b) {
    return a - b;
}

document.getElementById("multiplicacion").addEventListener('click',function () {

    let numeroA = document.getElementById("numero1").value;
    console.log('El valor de A: '+numeroA);
    let numeroB = document.getElementById("numero2").value;
    console.log('El valor de B: '+numeroB);
    let resultado = multiplicacion( parseInt(numeroA),parseInt(numeroB));
    console.log('El resultado es: '+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
})

function multiplicacion (a,b) {
    return a * b;
}

document.getElementById("division").addEventListener('click',function () {

    let numeroA = document.getElementById("numero1").value;
    console.log('El valor de A: '+numeroA);
    let numeroB = document.getElementById("numero2").value;
    console.log('El valor de B: '+numeroB);
    let resultado = division( parseInt(numeroA),parseInt(numeroB));
    console.log('El resultado es: '+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorResultado').style.display = 'block';
})

function division (a,b) {
    return a / b;
}