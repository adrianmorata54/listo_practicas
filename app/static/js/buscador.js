const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sin-resultados");
// Sin tareas no hay buscador: getElementById devuelve null
if (buscador !== null) {
buscador.addEventListener("input", () => {
const texto = buscador.value.trim().toLowerCase();
let visibles = 0;
for (const tarea of document.querySelectorAll("[data-task-item]")) {
// HUECO 1: lee el título de esta tarea (.task-title), en minúsculas,
// y guarda en una constante coincide si incluye texto
const titulo = tarea.querySelector(".task-title").textContent.toLowerCase();
const coincide = titulo.includes(texto);
// HUECO 2: con classList.toggle, pon d-none si no coincide,
// pon coincide si coincide y texto no está vacío, y suma 1 a visibles si coincide
tarea.classList.toggle("d-none", !coincide);
tarea.classList.toggle("coincide", coincide && texto !== "");
if (coincide) {
visibles++;
}
}
sinResultados.classList.toggle("d-none", visibles > 0);
});
// La tecla / lleva al buscador, como en GitHub o YouTube
document.addEventListener("keydown", (evento) => {
if (evento.key === "/" && document.activeElement !== buscador) {
evento.preventDefault();
buscador.focus();
}
});
}