import styled from "styled-components";

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.box};
  border-radius: 4px;
  padding: 1rem;
`;

export default Box;
