import StyledTodoItem from "./styled";
import Checkbox from "../../shared/Checkbox";
import { useDispatch } from "react-redux";
import { toggleComplete } from "../../store/todoSlice";

const TodoItem = ({ children, id, isCompleted }) => {
  const dispatch = useDispatch();

  return (
    <StyledTodoItem isCompleted={isCompleted}>
      <Checkbox
        // if checked={true}, e.target.checked return "false"
        // to fix this it need to add "!" in front of isCompleted
        checked={!isCompleted}
        isCompleted={isCompleted}
        onChange={(e) => {
          dispatch(toggleComplete({ id }));
        }}
      />
      {children}
    </StyledTodoItem>
  );
};

export default TodoItem;
