import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id}>{todo.text}</TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
