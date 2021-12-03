"use strict";
import { idGenerator } from "./idGenerator";
import "../styles/scss/main.scss";
import "./dark_light_toggle";

let todos = [];

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
    UI.clean();
    UI.showTodoElements();
  }
  static toggleComplete() {}
}

class UI {
  static clean() {
    const todoParent = document.querySelector(".todo-elements");
    while (todoParent.firstChild) {
      todoParent.removeChild(todoParent.firstChild);
    }
  }

  static showTodoElements() {
    for (let i = 0; i < todos.length; i++) {
      const todo = todos[i];
      const $todoElement = document.createElement("div");
      const $checkbox = document.createElement("input");
      const $task = document.createElement("li");
      const $deleteBtn = document.createElement("i");

      $todoElement.className = "todo-element";
      $todoElement.id = todo.id;

      $checkbox.setAttribute("type", "checkbox");
      $checkbox.className = "check";

      $task.className = "task";
      $task.textContent = todo.task;

      $deleteBtn.className = "bi bi-x delete";
      $deleteBtn.addEventListener("click", Event.delete);

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
      UI.clean();
      UI.showTodoElements();
    }
  });
})();
