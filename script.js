document.addEventListener("DOMContentLoaded", function() {

    const numTareas = document.getElementById("numTareas")
    const listaTarea = document.getElementById("listaTarea")
    const formularioTarea = document.getElementById("formularioTarea")
    const inputTarea = document.getElementById("inputTarea")

    formularioTarea.addEventListener("submit", function (e)  {
        e.preventDefault()

        const li = document.createElement("li")
        li.textContent = inputTarea.value + " "
        const botonEliminar = document.createElement("button")
        botonEliminar.textContent = "Eliminar"
        botonEliminar.style.backgroundColor = "red"
        botonEliminar.style.color = "white"
        botonEliminar.style.border = "none"
        botonEliminar.style.padding = "2px 6px"
        botonEliminar.style.marginLeft = "8px"
        botonEliminar.style.cursor = "pointer"
        botonEliminar.addEventListener("click", function() {
            li.remove()
            numTareas.textContent = "Tareas Agregadas: " + listaTarea.children.length
        })
        li.appendChild(botonEliminar) 
        listaTarea.appendChild(li)    
        numTareas.textContent = "Tareas Agregadas: " + listaTarea.children.length
        inputTarea.value = "" 
    })

})