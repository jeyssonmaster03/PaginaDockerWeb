document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let nombre = document.getElementById('nombre').value;
        let email = document.getElementById('email').value;
        let telefono = document.getElementById('telefono').value;
        let mensaje = document.getElementById('mensaje').value;
        let alertaExito = document.getElementById('alerta-exito');

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        
        alertaExito.classList.remove("d-none");

        
        setTimeout(() => {
            alertaExito.classList.add("d-none");
            document.getElementById('contactForm').reset();
        }, 3000);
    });
});