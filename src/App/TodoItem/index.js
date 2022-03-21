import StyledTodoItem from "./styled";
import Checkbox from "../../shared/Checkbox";

const TodoItem = ({ children }) => {
  return (
    <StyledTodoItem>
      <Checkbox />
      {children}
    </StyledTodoItem>
  );
};

export default TodoItem;
