document.addEventListener("DOMContentLoaded", function() {
    // Variables globales para los elementos
    var saludoElement, mensaje1Element, mensaje2Element, mensaje3Element;
    var toggleButton, audioPlayer;
    var currentIndex = 0;

    // Función para obtener elementos del DOM
    function getElements() {
        saludoElement = document.getElementById("saludo");
        mensaje1Element = document.getElementById("mensaje1");
        mensaje2Element = document.getElementById("mensaje2");
        mensaje3Element = document.getElementById("mensaje3");
        toggleButton = document.getElementById("audioControl");
        audioPlayer = document.getElementById("audioPlayer");
    }

    // Función para mostrar saludo
    function showSaludo() {
        // Obtener la hora actual en Colombia
        var fecha = new Date();
        fecha.setHours(fecha.getHours() - 5); // Restar 5 horas para obtener la hora en Colombia
        var horaActual = fecha.getHours();

        // Definir el saludo según la hora del día
        var saludo;
        if (horaActual < 12) {
            saludo = "Buenos días preciosa";
        } else if (horaActual < 18) {
            saludo = "Buenas tardes preciosa";
        } else {
            saludo = "Buenas noches preciosa";
        }

        // Mostrar saludo inicial
        saludoElement.textContent = saludo;
    }

    // Función para mostrar mensajes
    function showMensajes() {
        // Esperar 5 segundos antes de mostrar el primer mensaje
        setTimeout(function() {
            mensaje1Element.textContent = "Por cierto, te he pensado todo el dia!";
        }, 5000);

        // Esperar 10 segundos antes de mostrar el segundo mensaje
        setTimeout(function() {
            mensaje2Element.textContent = "Asi que hice esto porque...";
        }, 10000);

        // Esperar 15 segundos antes de mostrar el tercer mensaje
        setTimeout(function() {
            mensaje3Element.textContent = "Decirtelo de esta forma se me hizo original ;)";
        }, 15000);
    }

    // Función para alternar la reproducción/pausa
    function togglePlayPause() {
        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    }

    // Función para mostrar mensajes aleatorios
    function showRandomMessages() {
        var randomMessagesContainer = document.getElementById("randomMessages");

      // Mensajes aleatorios
      var randomMessages = [
        "Que placer es tenerte en mi vida",
        "Se que esto lleva poco tiempo, pero contigo todo se siente mejor",
        "Me gusta todo de ti, incluso aquello que crees que es tu debilidad",
        "Diossss, que bonita eres",
        "Me encantan tus besos",
        "Ultimamente mi lugar favorito es en tus brazos",
        "Creo que tu sonrisa se ha convertido en mi refugio.",
        "Tu me has quitado las ganas de conocer a alguien más",
        "El primer beso mas que con la boca, ya te lo habia dado con la mirada",
        "Me gusta como hueles",
        "Me encanta tu voz y el sonido de tu risa",
        "Quiero volver a dormir contigo (no importa cuando lo leas, aplica)",
        "Me gusta lo consentida que eres",
        "Quiero estar ahi cuando necesites un abrazo, quiero estar en tus momentos malos"
    ];

        function showNextMessage() {
            if (currentIndex < randomMessages.length) {
                var p = document.createElement("p");
                p.textContent = randomMessages[currentIndex];
                randomMessagesContainer.innerHTML = "";
                randomMessagesContainer.appendChild(p);
                currentIndex++;
                setTimeout(showNextMessage, 10000); // Muestra cada mensaje durante 10 segundos
            }
        }

        // Mostrar el primer mensaje aleatorio
        showNextMessage();
    }

    // Función para manejar los botones de navegación entre mensajes
    function handleNavigationButtons() {
        var prevButton = document.getElementById("prevButton");
        var nextButton = document.getElementById("nextButton");

        prevButton.addEventListener("click", function() {
            if (currentIndex > 1) {
                currentIndex -= 2; // Retrocede dos posiciones para mostrar el mensaje anterior
                showRandomMessages();
            }
        });

        nextButton.addEventListener("click", function() {
            showRandomMessages();
        });
    }

    // Obtener elementos después de que el DOM esté listo
    getElements();

    // Llamar a las funciones necesarias
    showSaludo();
    showMensajes();
    toggleButton.addEventListener("click", togglePlayPause);
    showRandomMessages();
    handleNavigationButtons();
});
