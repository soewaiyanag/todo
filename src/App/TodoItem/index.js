import StyledTodoItem from "./styled";
import Checkbox from "../../shared/Checkbox";

const TodoItem = ({ children, id, isCompleted }) => {
  return (
    <StyledTodoItem isCompleted={isCompleted}>
      <Checkbox
        // if checked={true}, e.target.checked return "false"
        // to fix this it need to add "!" in front of isCompleted
        checked={!isCompleted}
        isCompleted={isCompleted}
        onChange={(e) => {
          console.log(e.target.checked);
        }}
      />
      {children}
    </StyledTodoItem>
  );
};

export default TodoItem;
