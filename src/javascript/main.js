"use strict";
import { generate as generateId } from "shortid";
import "../styles/scss/main.scss";
import "./dark_light_toggle";
import "./filter";

// VARIABLES

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
      return todo.id !== elementId;
    });
    setTodo();
  }
  static toggleComplete() {
    const elementId = this.parentElement.id;
    todos.forEach((todo) => {
      if (todo.id === elementId) {
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

class UI {
  static countLeftTodos() {
    document.querySelector(".remain-todo-count").textContent =
      getTodos("active").length;
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

const getTodos = (value) => {
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
};

const setTodo = () => {
  UI.clean();
  UI.showTodoElements(getTodos(filter));
  UI.countLeftTodos();
  localStorage.clear();
  localStorage.setItem("todo-list", JSON.stringify(todos));
};

const getTodo = () => {
  todos = JSON.parse(localStorage.getItem("todo-list")) ?? [];
  UI.clean();
  UI.showTodoElements(getTodos(filter));
  UI.countLeftTodos();
};

(function () {
  Input.$todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && Input.value() !== "") {
      todos.unshift(new Todo(Input.value(), generateId()));
      Input.reset();
      setTodo();
    }
  });
})();

// EVENTS

window.addEventListener("DOMContentLoaded", () => {
  getTodo();
});

document.querySelector(".clear-completed").addEventListener("click", () => {
  todos = getTodos("active");
  setTodo();
});

$filters.forEach(($filter) => {
  $filter.addEventListener("click", () => {
    filter = $filter.id;
    setTodo();
  });
});
