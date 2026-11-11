// Pide confirmación antes de borrar una tarea.
for (const formulario of document.querySelectorAll(".form-borrar")) {
formulario.addEventListener("submit", (evento) => {
const tarea = formulario.closest("[data-task-item]");
const titulo = tarea.querySelector(".task-title").textContent;
if (!confirm(`¿Eliminar «${titulo}»?`)) {
evento.preventDefault();
}
});
}