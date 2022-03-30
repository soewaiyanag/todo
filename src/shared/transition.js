import { css } from 'styled-components';

const transition = css`
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity;
  transition-duration: 150ms;
  transition-timing-function: ${({ theme }) => theme.transition.timingFunc};
`;

export default transition;
