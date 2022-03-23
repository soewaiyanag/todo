import StyledHeader from "./styled";
import Container from "shared/Container";
import ThemeSwitcher from "App/ThemeSwitcher";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <h1>TODO</h1>
        <ThemeSwitcher />
      </Container>
    </StyledHeader>
  );
};

export default Header;
