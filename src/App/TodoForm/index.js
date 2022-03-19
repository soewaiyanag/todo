import Checkbox from "../../shared/Checkbox";
import StyledTodoForm from "./styled";
import TodoInput from "../TodoInput";

const TodoForm = () => {
  return (
    <StyledTodoForm>
      <Checkbox readOnly disabled />
      <TodoInput placeholder="Create a new todo..." />
    </StyledTodoForm>
  );
};

export default TodoForm;
