/*---- TO FILTER WHEN ACTIVE OR COMPLETED IS ENABLE ----*/

const todoItemContainer = document.querySelector(".todo-item-container");
todoItemContainer.addEventListener("click", () => {
  if (filterActive.checked) {
    active();
  } else if (filterCompleted.checked) {
    completed();
  }
});

/*---- SELECTORS ----*/

const filterAll = document.querySelector("#filter-all");
const filterActive = document.querySelector("#filter-active");
const filterCompleted = document.querySelector("#filter-completed");
const clearCompleted = document.querySelector(".clear-completed");
const filter = document.querySelectorAll('input[name="filter"]');

/*---- FUNCTIONS ----*/

function all() {
  document.querySelectorAll(".todo-item").forEach((td) => {
    td.style.display = "grid";
  });
}

function active() {
  all();
  document.querySelectorAll(".todo-item:is(.completed)").forEach((td) => {
    td.style.display = "none";
  });
}

function completed() {
  all();
  document.querySelectorAll(".todo-item:not(.completed)").forEach((td) => {
    td.style.display = "none";
  });
}

/*---- EVENT LISTENERS ----*/

filterAll.addEventListener("click", all);
filterActive.addEventListener("click", active);
filterCompleted.addEventListener("click", completed);

clearCompleted.addEventListener("click", () => {
  document.querySelectorAll(".todo-item:is(.completed)").forEach((td) => {
    td.remove();
  });
});
