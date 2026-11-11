// Pide las tareas a la API y escribe un resumen en la portada.
async function cargarResumen() {
    const resumen = document.getElementById("resumen");
    if (resumen === null) {
    return; // sin sesión no hay resumen
    }
    const respuesta = await fetch("/api/tasks");
    const tareas = await respuesta.json();
    const pendientes = tareas.filter((tarea) => !tarea.done).length;
    resumen.textContent = `Tienes ${pendientes} tareas pendientes de ${tareas.length}.`;
}
cargarResumen();