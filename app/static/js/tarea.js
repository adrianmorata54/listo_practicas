// Formulario de tareas: cuenta los caracteres del título y valida antes de enviar.
const formulario = document.getElementById("tarea");
const campoTitulo = document.getElementById("title");
const contador = document.getElementById("contador");
const vistaPrevia = document.getElementById("vista-previa");
const maximo = 120;
function actualizarContador() {
const largo = campoTitulo.value.length;
contador.textContent = `${largo}/${maximo}`;
contador.classList.toggle("contador-pasado", largo > maximo);
vistaPrevia.textContent = campoTitulo.value;
}
// Al cargar la página (al editar, el título ya trae texto) y a cada tecla
actualizarContador();
campoTitulo.addEventListener("input", actualizarContador);


formulario.addEventListener("submit", (evento) => {
limpiarErrores();
const titulo = campoTitulo.value.trim();
if (titulo === "") {
mostrarError(campoTitulo, "Escribe un título: solo con espacios no vale.");
evento.preventDefault();
} else if (titulo.length > maximo) {
mostrarError(campoTitulo, `El título no puede pasar de ${maximo} caracteres.`);
evento.preventDefault();
}
})