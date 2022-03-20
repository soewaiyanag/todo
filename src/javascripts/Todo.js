import shortid from "shortid";

// To create new Todo object

function Todo(text) {
  return {
    id: shortid.generate(),
    text,
    isCompleted: false,
  };
}

export default Todo;
