const formulario = document.getElementById("entrar");
const campoEmail = document.getElementById("email");
const campoClave = document.getElementById("password");

formulario.addEventListener("submit", (evento) => {
  // Estas dos funciones vienen del archivo validacion.js que cargaste antes
  limpiarErrores();
  
  let hayErrores = false;

  // 1. Si el correo no tiene arroba
  if (!campoEmail.value.includes("@")) {
    mostrarError(campoEmail, "El correo debe contener una arroba.");
    hayErrores = true;
  }

  // 2. Si la contraseña está vacía
  if (campoClave.value.trim() === "") {
    mostrarError(campoClave, "La contraseña no puede estar vacía.");
    hayErrores = true;
  }

  // Cancela el envío si se cumple alguna regla
  if (hayErrores) {
    evento.preventDefault();
  }
});