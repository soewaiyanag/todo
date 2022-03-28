import { useSelector } from 'react-redux';
import TodoItem from 'App/TodoItem';
import StyledTodoItems from './styled';
import { Droppable } from 'react-beautiful-dnd';
import TodoFooter from 'App/TodoFooter';

const TodoItems = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  return (
    <Droppable droppableId="todo-items">
      {(provided) => {
        return (
          <StyledTodoItems ref={provided.innerRef} {...provided.droppableProps}>
            {todos
              .filter((todo) => {
                return (
                  filter.showAll || filter.isCompleted === todo.isCompleted
                );
              })
              .map((todo, index) => (
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
