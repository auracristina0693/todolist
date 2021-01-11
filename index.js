//selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners

todoButton.addEventListener("click", addTodo);

//functions

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = "Hola";
  todoDiv.appendChild(newTodo);
  const completedButton = document.createElement("button");
  completedButton.classList = "completed-btn";
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  todoDiv.appendChild(completedButton);
  const trashButton = document.createElement("button");
  trashButton.classList = "trash-btn";
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(trashButton);
  console.log(todoDiv);
  todoList.appendChild(todoDiv);
}
