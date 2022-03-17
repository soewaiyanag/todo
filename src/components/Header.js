import StyledHeader from "../styles/Header.styled";
import Container from "../styles/Container";
import { useTheme } from "styled-components";

const Header = () => {
  const theme = useTheme(); // useTheme provide the current theme outside of styled components
  return (
    <StyledHeader>
      <Container>
        <h1>TODO</h1>
        <img src={theme.icons.switch} alt="theme-swicher" />
      </Container>
    </StyledHeader>
  );
};

export default Header;
