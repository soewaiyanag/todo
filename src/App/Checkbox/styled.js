import styled, { css } from "styled-components";
import checkIcon from "assets/icon-check.svg";
import transition from "shared/transition";

const checkedStyle = css`
  background: linear-gradient(145deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  ::after {
    content: url(${checkIcon});
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
  }
`;

const uncheckedStyle = css`
  background: transparent;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  ${transition}
  height: 20px;
  aspect-ratio: 1/1;
  position: relative;
  appearance: none;
  border-radius: 50%;
  justify-self: center;
  ${({ isCompleted }) => (isCompleted ? checkedStyle : uncheckedStyle)};
  cursor: ${(props) => !props.readOnly && "pointer"};
  border: ${({ theme, isCompleted }) =>
    !isCompleted && "2px solid " + theme.colors.border};
`;

export default StyledCheckbox;
