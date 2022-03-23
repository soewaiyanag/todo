import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";
import StyledTodoItems from "./styled";

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <StyledTodoItems>
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} isCompleted={todo.isCompleted}>
          {todo.text}
        </TodoItem>
      ))}
    </StyledTodoItems>
  );
};

export default TodoItems;
