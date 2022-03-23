import { css } from "styled-components";

const transition = css`
  transition-property: color, background-color;
  transition-duration: 150ms;
  transition-timing-function: ${({ theme }) => theme.transition.timingFunc};
`;

export default transition;
