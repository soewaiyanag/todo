import { css, keyframes } from "styled-components";

function animation(animationName) {
  return css`
    animation-name: ${animationName};
    animation-duration: ${({ animationDuration }) => animationDuration};
    animation-iteration-count: 1;
    animation-timing-function: ${({ theme }) => theme.transition.timingFunc};
  `;
}

const zoomOut = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

const zoomIn = keyframes`
    from { transform: scale(1); }
    to { transform: scale(0); }
`;

export const zoomOutAnimation = animation(zoomOut);
export const zoomInAnimation = animation(zoomIn);
