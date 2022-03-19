import shortid from "shortid";

// Todo class
// To create new Todo object

class Todo {
  constructor(text) {
    this.id = shortid.generate();
    this.text = text;
    this.isCompleted = false;
  }
}

export default Todo;
