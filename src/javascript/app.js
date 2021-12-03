// TODO SECTION

const todoInput = document.querySelector(".todo-input");
const todoContainer = document.querySelector(".todo-items");

// FOR PREBUILD TODOS (FEEL FREE TO DELECTE THIS CODE)
let todoItems = document.querySelectorAll(".todo-item");

todoItems.forEach((tdItem) => {
  let check = tdItem.children[0];
  let td = tdItem.children[1];
  let del = tdItem.children[2];

  td.addEventListener("click", () => {
    if (!tdItem.classList.contains("completed")) {
      tdItem.classList.add("completed");
      check.checked = true;
    } else {
      tdItem.classList.remove("completed");
      check.checked = false;
    }
    countLeftItems();
  });

  del.addEventListener("click", () => {
    tdItem.classList.add("deleted");
    tdItem.addEventListener("transitionend", () => {
      tdItem.remove();
      countLeftItems();
    });
  });
});
// PREBULD SECTION END HERE //

todoInput.addEventListener("keydown", (k) => {
  if (k.keyCode === 13 && todoInput.value) {
    createTodo();
    todoInput.value = "";
    countLeftItems();
  }
});

// FUNCTIONS

function countLeftItems() {
  unfinishedItems = document.querySelectorAll(".todo-item:not(.completed)");
  let leftItem = document.querySelector(".left-item");
  leftItem.textContent = unfinishedItems.length + " items left";
}

function createTodo() {
  // todo div and append to todo container
  const tdItem = document.createElement("div");
  tdItem.className = "todo-item";
  todoContainer.appendChild(tdItem);

  // create check and append to todo div
  const check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  check.className = "check";
  tdItem.appendChild(check);

  //   create todo and append to todo div
  const td = document.createElement("li");
  td.innerText = todoInput.value;

  td.className = "todo";
  tdItem.appendChild(td);

  //   create del and append to todo div
  const del = document.createElement("i");
  del.className = "bi bi-x delete";
  tdItem.appendChild(del);

  //  CHECK TODO IF COMPLETED
  td.addEventListener("click", () => {
    if (!tdItem.classList.contains("completed")) {
      tdItem.classList.add("completed");
      check.checked = true;
    } else {
      tdItem.classList.remove("completed");
      check.checked = false;
    }
    countLeftItems();
  });

  // DELETE THE TODO
  del.addEventListener("click", () => {
    tdItem.classList.add("deleted");
    tdItem.addEventListener("transitionend", () => {
      tdItem.remove();
      countLeftItems();
    });
  });
}

// FILTER SECTION
