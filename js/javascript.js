// Mostrar un mensaje al cargar la página
alert("¡Hola desde JavaScript!");

// Cambiar el contenido de un párrafo
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mensaje").textContent = "Este texto lo cambió JavaScript.";
});