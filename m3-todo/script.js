// ARRAY PRINCIPAL
let tareas = [];

// ELEMENTOS DEL DOM
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");


// FUNCION PARA RENDERIZAR
function render() {

  // LIMPIAR CONTENEDOR
  taskList.innerHTML = "";

  // RECORRER ARRAY
  tareas.forEach((tarea) => {

    // CREAR LI
    const li = document.createElement("li");

    // TEXTO DE LA TAREA
    const span = document.createElement("span");
    span.textContent = tarea.texto;
    span.classList.add("task-text");

    // SI ESTA COMPLETADA
    if (tarea.completada) {
      span.classList.add("completed");
    }

    // MARCAR COMPLETADA
    span.addEventListener("click", () => {

      tarea.completada = !tarea.completada;

      render();
    });

    // BOTON BORRAR
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", () => {

      tareas = tareas.filter(t => t !== tarea);

      render();
    });

    // AGREGAR ELEMENTOS AL LI
    li.appendChild(span);
    li.appendChild(deleteButton);

    // AGREGAR LI A LA LISTA
    taskList.appendChild(li);
  });

  // CONTADOR
  const completadas = tareas.filter(t => t.completada).length;

  counter.textContent =
    `${tareas.length} tareas, ${completadas} completadas`;
}


// FUNCION AGREGAR TAREA
function agregarTarea() {

  const texto = taskInput.value.trim();

  // EVITAR TAREAS VACIAS
  if (texto === "") {
    return;
  }

  // AGREGAR AL ARRAY
  tareas.push({
    texto: texto,
    completada: false
  });

  // LIMPIAR INPUT
  taskInput.value = "";

  // RE-RENDER
  render();
}


// CLICK EN BOTON
addButton.addEventListener("click", agregarTarea);


// ENTER EN INPUT
taskInput.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    agregarTarea();
  }
});


// RENDER INICIAL
render();
