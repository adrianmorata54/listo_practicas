// Funciones comunes a todos los formularios de Listo.
// Hay que cargar este fichero antes que el de cada formulario.
// Borra las marcas y los mensajes del intento anterior
function limpiarErrores(formulario) {
for (const campo of formulario.querySelectorAll(".is-invalid")) {
campo.classList.remove("is-invalid");
}
for (const aviso of formulario.querySelectorAll(".invalid-feedback")) {
aviso.remove();
}
}
// Marca un campo en rojo y escribe el mensaje debajo de él
function mostrarError(campo, mensaje) {
campo.classList.add("is-invalid");
const aviso = document.createElement("div");
aviso.classList.add("invalid-feedback");
aviso.textContent = mensaje;
campo.parentElement.appendChild(aviso);
}