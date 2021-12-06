"use strict";
import "../styles/scss/main.scss";
import "./dark_light_toggle";
import "./filter";
import { generate as generateId } from "shortid";
import completeMp3 from "../complete.mp3";
import deleteMp3 from "../delete.mp3";

// VARIABLES

const completeSound = new Audio(completeMp3);
const deleteSound = new Audio(deleteMp3);

const $filters = document.querySelectorAll(".filter");
let todos = [];
let filter = "all";

// CLASSES

class Todo {
  constructor(task, id) {
    this.id = id;
    this.task = task;
    this.isCompleted = false;
  }
}

class Todos {
  static get(filter) {
    if (filter === "active") {
      return todos.filter((todo) => {
        return !todo.isCompleted;
      });
    } else if (filter === "completed") {
      return todos.filter((todo) => {
        return todo.isCompleted;
      });
    } else {
      return todos;
    }
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
    deleteSound.currentTime = 0;
    deleteSound.play();

    const elementId = this.parentElement.id;
    todos = todos.filter((todo) => {
      return todo.id !== elementId;
    });

    UI.all();
    addToLocalStorage();
  }

  static toggleComplete() {
    const elementId = this.parentElement.id;
    todos.forEach((todo) => {
      if (todo.id === elementId) {
        if (todo.isCompleted) {
          todo.isCompleted = false;
        } else {
          todo.isCompleted = true;

          completeSound.currentTime = 0;
          completeSound.play();
        }
      }
    });

    UI.all();
    addToLocalStorage();
  }
}

class UI {
  // run all the UI methods
  static all() {
    this.clean();
    this.showTodoElements(Todos.get(filter));
    this.countLeftTodos();
  }

  static countLeftTodos() {
    document.querySelector(".remain-todo-count").textContent =
      Todos.get("active").length;
  }

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
      const $deleteBtn = document.createElement("img");

      $todoElement.className = "todo-element";
      $todoElement.id = todo.id;

      $checkbox.setAttribute("type", "checkbox");
      $checkbox.className = "check";
      $checkbox.addEventListener("click", Event.toggleComplete);

      $task.className = "task";
      $task.textContent = todo.task;

      $deleteBtn.className = "delete";
      $deleteBtn.src = "./images/icon-cross.svg";

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

// FUNCTIONS

const addToLocalStorage = () => {
  localStorage.clear();
  localStorage.setItem("todo-list", JSON.stringify(todos));
};

(function () {
  Input.$todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && Input.value() !== "") {
      todos.unshift(new Todo(Input.value(), generateId()));
      Input.reset();
      UI.all();
      addToLocalStorage();
    }
  });
})();

// EVENTS

window.addEventListener("DOMContentLoaded", () => {
  todos = JSON.parse(localStorage.getItem("todo-list")) ?? [];
  UI.all();
});

document.querySelector(".clear-completed").addEventListener("click", () => {
  deleteSound.play();
  todos = Todos.get("active");
  UI.all();
  addToLocalStorage();
});

$filters.forEach(($filter) => {
  $filter.addEventListener("click", () => {
    filter = $filter.id;
    UI.all();
    addToLocalStorage();
  });
});
