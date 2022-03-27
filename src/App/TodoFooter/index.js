import Filter from 'App/Filter';
import StyledTodoFooter from './styled';
import TodoFooterBtn from 'App/TodoFooterBtn/styled';
import { useSelector } from 'react-redux';

const LeftItems = () => {
  const todos = useSelector((state) => state.todos);
  const incompletedTodos = todos.filter((todo) => !todo.isCompleted);
  return (
    <TodoFooterBtn style={{ cursor: 'default' }}>
      {incompletedTodos.length} items left
    </TodoFooterBtn>
  );
};

const ClearCompletedBtn = () => {
  return <TodoFooterBtn>Clear Completed</TodoFooterBtn>;
};

const TodoFooter = () => {
  return (
    <StyledTodoFooter>
      <LeftItems />
      <Filter />
      <ClearCompletedBtn />
    </StyledTodoFooter>
  );
};

export default TodoFooter;
