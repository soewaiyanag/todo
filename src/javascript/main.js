"use strict";
import { idGenerator } from "./idGenerator";
import "../styles/scss/main.scss";
import "./dark_light_toggle";
import "./filter";

let todos = [];

window.addEventListener("DOMContentLoaded", function () {
  getTodo();
});

// CLASSES

class Todo {
  constructor(task, id) {
    this.id = id;
    this.task = task;
    this.isCompleted = false;
  }
}

class Input {
  static $todoInput = document.querySelector(".todo-input");

  static value() {
    return this.$todoInput.value;
  }

  static reset() {
    this.$todoInput.value = "";
  }
}

class Event {
  static delete() {
    const elementId = this.parentElement.id;
    todos = todos.filter((todo) => {
      return todo.id !== Number(elementId);
    });
    setTodo();
  }
  static toggleComplete() {
    const elementId = this.parentElement.id;
    todos.forEach((todo) => {
      if (todo.id === Number(elementId)) {
        if (todo.isCompleted) {
          todo.isCompleted = false;
        } else {
          todo.isCompleted = true;
        }
      }
    });
    setTodo();
  }
}

const $filters = document.querySelectorAll(".filter");
let filter = "all";
$filters.forEach(($filter) => {
  $filter.addEventListener("click", () => {
    filter = $filter.id;
    setTodo();
  });
});

function todoFilter(value) {
  if (value === "active") {
    return todos.filter((todo) => {
      return !todo.isCompleted;
    });
  } else if (value === "completed") {
    return todos.filter((todo) => {
      return todo.isCompleted;
    });
  } else {
    return todos;
  }
}

function setTodo() {
  UI.clean();
  UI.showTodoElements(todoFilter(filter));
  localStorage.clear();
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

function getTodo() {
  todos = JSON.parse(localStorage.getItem("todo-list")) ?? [];
  UI.clean();
  UI.showTodoElements(todoFilter(filter));
}
class UI {
  static clean() {
    const $todoParent = document.querySelector(".todo-elements");
    while ($todoParent.firstChild) {
      $todoParent.removeChild($todoParent.firstChild);
    }
  }

  static showTodoElements(todoElements) {
    for (let i = 0; i < todoElements.length; i++) {
      const todo = todoElements[i];
      const $todoElement = document.createElement("div");
      const $checkbox = document.createElement("input");
      const $task = document.createElement("li");
      const $deleteBtn = document.createElement("i");

      $todoElement.className = "todo-element";
      $todoElement.id = todo.id;

      $checkbox.setAttribute("type", "checkbox");
      $checkbox.className = "check";
      $checkbox.addEventListener("click", Event.toggleComplete);

      $task.className = "task";
      $task.textContent = todo.task;

      $deleteBtn.className = "bi bi-x delete";
      $deleteBtn.addEventListener("click", Event.delete);

      // check if todo is completed or not
      if (todo.isCompleted) {
        $task.classList.add("completed");
        $checkbox.checked = true;
      }

      $todoElement.append($checkbox, $task, $deleteBtn);

      document.querySelector(".todo-elements").appendChild($todoElement);
    }
  }
}

(function () {
  const id = idGenerator();
  Input.$todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && Input.value() !== "") {
      todos.push(new Todo(Input.value(), id()));
      Input.reset();
      setTodo();
    }
  });
})();
