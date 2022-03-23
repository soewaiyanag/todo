import styled from "styled-components";

const StyledThemeSwitcher = styled.img`
  ${({ animation }) => animation}
  width: 1.4rem;
  cursor: pointer;
`;

export default StyledThemeSwitcher;
