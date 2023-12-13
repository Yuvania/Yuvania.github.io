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
            saludo = "Buenos días.";
        } else if (horaActual < 18) {
            saludo = "Buenas tardes.";
        } else {
            saludo = "Buenas noches.";
        }

        // Mostrar saludo inicial
        saludoElement.textContent = saludo;
    }

    // Función para mostrar mensajes
    function showMensajes() {
        // Esperar 5 segundos antes de mostrar el primer mensaje
        setTimeout(function() {
            mensaje1Element.textContent = "Hey Nati!";
        }, 5000);

        // Esperar 10 segundos antes de mostrar el segundo mensaje
        setTimeout(function() {
            mensaje2Element.textContent = "Espero que hayas o estés pasando un bonito día!";
        }, 10000);

        // Esperar 15 segundos antes de mostrar el tercer mensaje
        setTimeout(function() {
            mensaje3Element.textContent = "Sé que hay formas más fáciles de decir buenos dias, pero creo que usar una página web es gracioso jajaja.";
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
        "Tienes una sonrisa muy bonita",
        "Creo que tienes unos ojos muy bonitos también",
        "Creo que es lindo el cómo te esfuerzas por tu pequeña",
        "Que bonita eres",
        "Lamento no haberte mirado más, cuando pude hacerlo",
        "Estoy haciendo el catálogo de los mejores restaurantes de Medellín, ¿me ayudas a completarlo? jajaja",
        "Quería llevarte al cine, pero no permiten entrar con dulces xD",
        "Tienes un cabello muy bonito",
        "El megalodón se extinguió, pero veo que tu madre logró dar vida al megabombón jajaja",
        "¿En qué parada de metro debo bajarme para llegar a gustarte? JAJAJA",
        "Tienes lindos labios",
        "El acento de medellin es lo mejor",
        "Creo que bailas muy bien",
        "Ojalá fuera profesora para pasarte de tercero a mi cuarto. sorry JAJAJAJA",
        "Creo que te ves muy radiante",
        "Te me haces una persona muy amable"
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
