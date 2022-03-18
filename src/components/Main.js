import Container from "../styles/Container";
import StyledMain from "../styles/Main.styled";
import TodoForm from "./TodoForm";

const Main = () => {
  return (
    <StyledMain>
      <Container>
        <TodoForm />
      </Container>
    </StyledMain>
  );
};

export default Main;
