import {httpManager} from '../../../http/httpManager.js';

export const drop = (table,type) => {
    table.addEventListener("drop", (event) => {
        event.preventDefault();  // Evitar el comportamiento por defecto
        var data = JSON.parse(event.dataTransfer.getData("text"));
        var draggedElement = document.getElementById(data.id);
        var rect = event.target.getBoundingClientRect();
        var offsetX = event.clientX - rect.left;
        var offsetY = event.clientY - rect.top;

        if (draggedElement.classList.contains(event.target.id)) {
            event.target.appendChild(draggedElement);
            const position = {
                tabla: event.target.id,
                carta: draggedElement.id
            }
            httpManager.getInstance('http://localhost:3000').send(position)
        }
    });
    table.addEventListener("dragover", (event) => {
        event.preventDefault();  
    })
}