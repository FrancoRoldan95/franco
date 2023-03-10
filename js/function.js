/**
document.getElementById('boton').onclick = function () {
    
    console.log ("capturamos el evento click")
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en JS"
}

document.addEventListener('click', function () {
    console.log ("Hola mundo desde EventListener!")
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en JS";
});
*/

document.getElementById('boton').addEventListener('click', function () {
    console.log ("Hola mundo desde EventListener!")
    document.getElementById("demo").innerHTML = "estamos probando nuestro primer evento en JS";
});

document.getElementById('boton-color').addEventListener('click', function () {
    document.body.style.backgroundColor = '#ff2233';
});

document.getElementById('boton-default').addEventListener('click', function () {
    document.body.style.backgroundColor = 'aquamarine';
});

document.getElementById('boton-ocultar').addEventListener('click', function () {
    document.getElementById('demo').style.display = 'none';
});

const collection = document.getElementsByClassName("prueba");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.backgroundColor = "purple";
    }