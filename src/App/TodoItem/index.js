import StyledTodoItem from "./styled";
import Checkbox from "../../shared/Checkbox";

const TodoItem = ({ children, id, isCompleted }) => {
  return (
    <StyledTodoItem isCompleted={isCompleted}>
      <Checkbox checked={isCompleted} />
      {children}
    </StyledTodoItem>
  );
};

export default TodoItem;
