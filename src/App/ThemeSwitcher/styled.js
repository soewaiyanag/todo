import styled, { keyframes } from "styled-components";
import { css } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledThemeSwitcher = styled.img`
  width: 1.4rem;
  cursor: pointer;
  animation: ${({ isAnimate }) => isAnimate && css`0.5s ${spin} ease-out`};
`;

export default StyledThemeSwitcher;
