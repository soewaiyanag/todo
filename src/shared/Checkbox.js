import styled from "styled-components";

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 20px;
  aspect-ratio: 1/1;
  position: relative;
  appearance: none;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.border};
  cursor: ${(props) => (props.readOnly ? null : "pointer")};
  justify-self: center;
`;

export default StyledCheckbox;
