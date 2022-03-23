import StyledMain from "./styled";
import TodoForm from "App/TodoForm";
import TodoItems from "App/TodoItems";
import TodoContainer from "App/TodoContainer/styled";

const Main = () => {
  return (
    <StyledMain>
      <TodoContainer>
        <TodoForm />
        <TodoItems />
      </TodoContainer>
    </StyledMain>
  );
};

export default Main;
