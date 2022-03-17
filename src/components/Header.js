import StyledHeader from "../styles/Header.styled";
import Container from "../styles/Container";
import { useTheme } from "styled-components";
import { useContext } from "react";
import DarkContext from "../context/DarkContext";

const Header = () => {
  const theme = useTheme(); // useTheme provide the current theme outside of styled components
  const { setIsDark } = useContext(DarkContext);
  return (
    <StyledHeader>
      <Container>
        <h1>TODO</h1>
        <img
          src={theme.icons.switch}
          alt="theme-swicher"
          onClick={() => {
            setIsDark((prev) => !prev);
          }}
        />
      </Container>
    </StyledHeader>
  );
};

export default Header;
