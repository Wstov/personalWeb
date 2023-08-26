document.addEventListener("DOMContentLoaded", function () {
    const curtain = document.querySelector(".curtain");
    const delay = 800; // 2 segundos

    setTimeout(function () {
        curtain.classList.add("hide");
        // content.classList.add("show");
    }, delay);
});


// ANIMACION REPETIDA DEL TEXTO DEL BOTON CARDS
function repeatAnimation() {
    const button = document.querySelector('.shake-bottom');

    // Función que reinicia la animación
    function resetAnimation() {
        // Elimina la clase para detener la animación
        button.classList.remove('shake-bottom');

        // Fuerza un reflujo (repaint). Esta línea es necesaria para reiniciar la animación
        void button.offsetWidth;

        // Agrega la clase nuevamente para reiniciar la animación
        button.classList.add('shake-bottom');
    }

    // Inicia el ciclo de animación
    setInterval(resetAnimation, 3000); // 5000 ms = 5 s
}

// Llama a la función cuando se carga la página
window.addEventListener('load', repeatAnimation);

