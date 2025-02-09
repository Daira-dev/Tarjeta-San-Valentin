// Inicializar el audio
const musicaFondo = new Audio("sounds/mus_house1.ogg");
musicaFondo.loop = true; // Bucle 
musicaFondo.volume = 0.3;

// Esperar a que el usuario haga clic para reproducir la música
const btnPlayMusic = document.getElementById("btn_play_music");

btnPlayMusic.addEventListener("click", () => {
    musicaFondo.play().catch(error => {
        console.log("Autoplay bloqueado, iniciar con interacción del usuario.");
    });
    btnPlayMusic.style.display = "none"; // Ocultar el botón después de iniciar la música
});

window.addEventListener("load", () => {
    musicaFondo.play().catch(error => {
        console.log("Autoplay bloqueado, iniciar con interacción del usuario.");
    });
});


// Carta
const cartaImg = document.getElementById("carta_img");
const abrirCarta = new Audio("sounds/paper.mp3"); // constante para el sonido
let cartaAbierta = false; // La carta aun no se ha abierto

const btnSi = document.getElementById("btn_si");
const btnNo = document.getElementById("btn_no");

cartaImg.addEventListener("click", function() {
    if (!cartaAbierta) {
        abrirCarta.play(); // Reproduce el sonido
        cartaImg.src = "img/pixil-sobre-abierto.png"; // Cambia la imagen a la carta abierta
        cartaAbierta = true; // La carta se abrió

        setTimeout(() => {
            btnSi.style.display = "block"; // Muestra los botones
            btnNo.style.display = "block";
        }, 0);
    }
});

// Lista de imágenes de error y advertencia
const errores = [
    "img/error-1.png",
    "img/error-2.png",
    "img/error-3.png"
];

const advert = [
    "img/adv-1.png",
    "img/pixil-gif.gif"
];

const aceptar = "/img/aceptar.png"; // Imagen fija de aceptar
let indiceError = 0;

// Elementos de la ventana emergente
const error = new Audio("sounds/error.mp3"); // Sonido de error
const advertencia = new Audio("sounds/advertencia.mp3");
const overlay = document.getElementById("overlay");
const ventanaError = document.getElementById("ventana_error");
const ventanaAdv = document.getElementById("ventana_adv");
const imgError = document.getElementById("img_error");
const imgAdv = document.getElementById("img_adv");

// Evento cuando presionan "No"
btnNo.addEventListener("click", function() {
    overlay.style.display = "block"; // Muestra fondo oscuro
    ventanaError.style.display = "block"; // Muestra la ventana
    error.play(); // Reproduce sonido de error
    
    // Cambia la imagen de error en secuencia
    imgError.src = errores[indiceError];
    indiceError++;
    
    // Si llega al último error, vuelve a empezar
    if (indiceError >= errores.length) {
        indiceError = 2;
    }
});

// Evento cuando presionan "Sí"
btnSi.addEventListener("click", function() {
    overlay.style.display = "block"; // Muestra fondo oscuro
    ventanaAdv.style.display = "block"; // Muestra la ventana de aceptación
    advertencia.play();
});

const btnCerrar = document.getElementById("btn_cerrar");

// Evento para cerrar la ventana emergente
btnCerrar.addEventListener("click", function() {
    overlay.style.display = "none"; // Oculta fondo oscuro
    ventanaError.style.display = "none"; // Oculta la ventana
});


const btnCerrarAdv = document.getElementById("btn_cerrar_adv");
const aplausos = new Audio("sounds/mus_mett_cheer.ogg"); // Sonido de error
const latidos = new Audio("sounds/latidos.mp3"); // Sonido de error

btnCerrarAdv.addEventListener("click", function() {
    imgAdv.src = "img/pixil-gif.gif"; // Cambia la imagen
    imgAdv.style.width = "94%"; // Ajusta el tamaño
    btnCerrarAdv.style.display = "none"; // Oculta el botón de cerrar
    aplausos.play();
    latidos.play();
});
