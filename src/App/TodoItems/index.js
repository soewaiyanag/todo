import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} isCompleted={todo.isCompleted}>
          {todo.text}
        </TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
