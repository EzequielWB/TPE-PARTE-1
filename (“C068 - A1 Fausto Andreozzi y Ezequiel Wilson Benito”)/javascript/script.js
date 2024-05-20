"use strict";

document.querySelector(".menuDesplegable").addEventListener("click", menuHamburguesa); // seleccionamos el menu

function menuHamburguesa() { // menú desplegable en mobile
    document.querySelector(".navegacion").classList.toggle("show");
}

let respuestaCorrecta; // Declarar variable globalmente

function generarCaptcha() { // generar valores del captcha
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
   
    document.getElementById('captchaValores').innerHTML = num1 + ' + ' + num2;

    respuestaCorrecta = num1 + num2; // Asignar el valor a la variable global
}

document.querySelector(".botonCaptcha").addEventListener("click", verificarRespuesta); // seleccionamos el botón de captcha

function verificarRespuesta() { // verificar el valor del captcha
    var respuestaIngresada = parseInt(document.getElementById('respuesta').value);
    
    if (respuestaIngresada === respuestaCorrecta) {
        let botonCaptcha = document.getElementById('botonCaptcha');
        botonCaptcha.value = "Suscrito!";
        botonCaptcha.disabled = true; // deshabilita el botón una vez suscrito
    } else {
        let botonCaptcha = document.getElementById('botonCaptcha');
        botonCaptcha.value = "Error en captcha - Reintente";
        document.getElementById('respuesta').value = '';
        generarCaptcha(); // reiniciar captcha
    }
}

generarCaptcha(); // generar el captcha al cargar la pagina
