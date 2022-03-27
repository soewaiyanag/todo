import { useSelector } from 'react-redux';
import TodoItem from 'App/TodoItem';
import StyledTodoItems from './styled';
import { Droppable } from 'react-beautiful-dnd';
import TodoFooter from 'App/TodoFooter';

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Droppable droppableId="todo-items">
      {(provided) => {
        return (
          <StyledTodoItems ref={provided.innerRef} {...provided.droppableProps}>
            {todos.map((todo, index) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                index={index}
                isCompleted={todo.isCompleted}
              >
                {todo.text}
              </TodoItem>
            ))}
            {provided.placeholder}
            <TodoFooter />
          </StyledTodoItems>
        );
      }}
    </Droppable>
  );
};

export default TodoItems;
