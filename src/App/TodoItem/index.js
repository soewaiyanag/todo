import StyledTodoItem from "./styled";
import Checkbox from "App/Checkbox";
import DeleteIcon from "App/DeleteIcon";

const TodoItem = ({ children, id, isCompleted }) => {
  return (
    <StyledTodoItem isCompleted={isCompleted}>
      <Checkbox id={id} isCompleted={isCompleted} />
      <span>{children}</span>
      <DeleteIcon id={id} />
    </StyledTodoItem>
  );
};

export default TodoItem;
