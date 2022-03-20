import { useSelector } from "react-redux";

const TodoContainer = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map((todo) => (
        <h1 key={todo.id}>{todo.text}</h1>
      ))}
    </div>
  );
};

export default TodoContainer;
