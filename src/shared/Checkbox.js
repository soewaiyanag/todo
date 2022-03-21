import styled, { css } from "styled-components";

const checkedStyle = css`
  background: linear-gradient(145deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
`;

const uncheckedStyle = css`
  background: transparent;
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 20px;
  aspect-ratio: 1/1;
  position: relative;
  appearance: none;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.border};
  cursor: ${(props) => (props.readOnly ? null : "pointer")};
  justify-self: center;
  ${({ isCompleted }) => (isCompleted ? checkedStyle : uncheckedStyle)};
`;

export default StyledCheckbox;
