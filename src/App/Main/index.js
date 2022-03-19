import Container from "../../shared/Container";
import StyledMain from "./styled";
import TodoForm from "../TodoForm";

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
