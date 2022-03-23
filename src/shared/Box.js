import styled from "styled-components";
import transition from "./transition";

const Box = styled.div`
  ${transition}
  background-color: ${({ theme }) => theme.colors.box};
  padding: 1rem;
`;

export default Box;
