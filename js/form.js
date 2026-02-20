// Botón y formulario
const btn = document.getElementById("button");
const form = document.getElementById("formulario-contacto");

// Inicializamos EmailJS 
emailjs.init("uNz236MfPx4gA6oYW"); // 👈 Tu Public Key

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Cambiamos el texto del botón
  btn.textContent = "Enviando...";

  // Crear fecha y hora en formato colombiano
  const ahora = new Date();
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };
  const fecha = ahora.toLocaleString("es-CO", opciones);

  // Capturamos los datos del formulario
  const templateParams = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    ciudad: document.getElementById("ciudad").value,
    mensaje: document.getElementById("mensaje").value,
    fecha: fecha
  };

  // Enviar datos a EmailJS
  emailjs.send("service_gr59vch", "template_utkd8ud", templateParams) 
    .then(() => {
      btn.textContent = "Enviar";
      alert("✅ ¡Mensaje enviado con éxito!");
      form.reset();
    })
    .catch((err) => {
      btn.textContent = "Enviar";
      console.error("Error al enviar:", err);
      alert("❌ Ocurrió un error. Verifica tu configuración de EmailJS.");
    });
});
