import styled from 'styled-components';

export const ThemeSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledThemeSwitcher = styled.img`
  ${({ animation }) => animation}
  width: 1.4rem;
  user-select: none;
`;

export default StyledThemeSwitcher;
