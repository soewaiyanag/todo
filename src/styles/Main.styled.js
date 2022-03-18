import styled from "styled-components";

const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.colors.main};
  min-height: calc(100vh - 14rem);
`;

export default StyledMain;
