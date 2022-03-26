import StyledTodoItem, { TodoContent } from "./styled";
import Checkbox from "App/Checkbox";
import DeleteIcon from "App/DeleteIcon";
import { Draggable } from "react-beautiful-dnd";

const TodoItem = ({ children, id, isCompleted, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <StyledTodoItem
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          isCompleted={isCompleted}
        >
          <Checkbox id={id} isCompleted={isCompleted} />
          <TodoContent>{children}</TodoContent>
          <DeleteIcon id={id} />
        </StyledTodoItem>
      )}
    </Draggable>
  );
};

export default TodoItem;
