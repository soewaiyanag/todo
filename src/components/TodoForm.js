import Checkbox from "../styles/Checkbox.styled";
import StyledTodoForm from "../styles/TodoForm.styled";
import TodoInput from "../styles/TodoInput";

const TodoForm = () => {
  return (
    <StyledTodoForm>
      <Checkbox readOnly disabled />
      <TodoInput placeholder="Create a new todo" />
    </StyledTodoForm>
  );
};

export default TodoForm;
