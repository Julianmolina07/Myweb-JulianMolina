document.querySelector("#contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name && email && message) {
        alert("Formulario enviado correctamente!");
        // Aquí podrías añadir el código para enviar el formulario a un servidor
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
