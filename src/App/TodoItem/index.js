import StyledTodoItem, { TodoContent } from "./styled";
import Checkbox from "App/Checkbox";
import DeleteIcon from "App/DeleteIcon";

const TodoItem = ({ children, id, isCompleted }) => {
  return (
    <StyledTodoItem isCompleted={isCompleted}>
      <Checkbox id={id} isCompleted={isCompleted} />
      <TodoContent>{children}</TodoContent>
      <DeleteIcon id={id} />
    </StyledTodoItem>
  );
};

export default TodoItem;
