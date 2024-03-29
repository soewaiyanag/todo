import StyledTodoItem, { TodoContent } from './StyledTodoItem';
import Checkbox from 'App/Checkbox/Checkbox';
import DeleteIcon from 'App/DeleteIcon';
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = ({ children, id, isCompleted, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <StyledTodoItem
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            isCompleted={isCompleted}
            isDragging={snapshot.isDragging}
          >
            <Checkbox id={id} isCompleted={isCompleted} label="toggle todo" />
            <TodoContent>{children}</TodoContent>
            <DeleteIcon id={id} />
          </StyledTodoItem>
        );
      }}
    </Draggable>
  );
};

export default TodoItem;
