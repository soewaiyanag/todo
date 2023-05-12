import StyledHeader from './StyledHeader';
import Container from 'shared/Container';
import ThemeSwitcher from 'App/ThemeSwitcher/ThemeSwitcher';

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
